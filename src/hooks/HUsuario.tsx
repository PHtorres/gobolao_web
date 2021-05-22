import React, { createContext, useCallback, useState, useContext } from 'react';
import IUsuario from '../models/IUsuario';
import apiGoBolao from '../services/ApiGoBolao';
import ServiceStorage from '../services/ServiceStorage';
import ServiceUsuario from '../services/ServiceUsuario';
import { useAlerta } from './HAlerta';

interface IContextoUsuario {
    usuario: IUsuario;
    logar(email: string, senha: string): Promise<void>;
    sair(): void;
    alterar(nome: string, email: string): void;
}

const storage = new ServiceStorage();
const servicoUsuario = new ServiceUsuario();

const ContextoUsuario = createContext<IContextoUsuario>({} as IContextoUsuario);

export const UsuarioProvider: React.FC = ({ children }) => {

    const { exibirMensagens, exibirMensagem } = useAlerta();

    const [usuario, setUsuario] = useState<IUsuario>(() => {
        const resultadoStorage = storage.PegarUsuario();
        return resultadoStorage;
    });

    const adicionarTokenNaApi = () => {
        const tokenStorage = storage.PegarTokenUsuario();
        if (tokenStorage.length > 0) {
            apiGoBolao.setHeader('Authorization', `Bearer ${tokenStorage}`);
        }
    }

    adicionarTokenNaApi();

    const logar = useCallback(async (email: string, senha: string) => {

        const {resposta} = await servicoUsuario.Autenticar(email, senha);
        if (resposta?.conteudo?.logado) {
            adicionarTokenNaApi();
            setUsuario(resposta.conteudo);
            return;
        }

        if (resposta?.notificacoes) {
            exibirMensagens(resposta.notificacoes, 'erro');
        }

    }, [exibirMensagens]);

    const sair = useCallback(() => {
        storage.LimparDadosUsuario();
        setUsuario({} as IUsuario);
    }, []);

    const alterar = useCallback(async (apelido: string, email: string) => {

        const resultado = await servicoUsuario.AlterarUsuario(usuario.id, apelido, email);
        if (resultado.sucesso) {
            setUsuario((atual) => {
                return {
                    id: atual.id,
                    email: resultado.conteudo.email,
                    apelido: resultado.conteudo.apelido,
                    nomeImagemAvatar:resultado.conteudo.nomeImagemAvatar,
                    logado: true
                }
            });

            exibirMensagem('Perfil atualizado com sucesso!', 'sucesso');
            return;
        }

        exibirMensagens(resultado?.notificacoes, 'erro');

    }, [exibirMensagens, exibirMensagem, usuario.id]);


    return (
        <ContextoUsuario.Provider value={{ usuario, logar, sair, alterar }}>
            {children}
        </ContextoUsuario.Provider>
    );
}

export const useUsuario = (): IContextoUsuario => {
    const contexto = useContext(ContextoUsuario);
    return contexto;
}
import React, { createContext, useCallback, useState, useContext } from 'react';
import ListaAlertas from '../components/ListaAlertas';
import IMensagemAlerta from '../models/IMensagemAlerta';
import {uuid} from 'uuidv4';

interface IContextoAlerta {
    exibirMensagem(mensagem: string, tipo: 'erro' | 'sucesso'): void;
    exibirMensagens(mensagens: string[], tipo: 'erro' | 'sucesso'): void;
    removerMensagem(id: string): void;
}

const ContextoAlerta = createContext<IContextoAlerta>({} as IContextoAlerta);

export const AlertaProvider: React.FC = ({ children }) => {

    const [listaMensagens, setListaMensagens] = useState<IMensagemAlerta[]>([]);

    const exibirMensagem = useCallback((mensagem: string, tipo: 'erro' | 'sucesso') => {
        setListaMensagens((mensagens) => [{ id:uuid(), mensagem, tipo }, ...mensagens]);
    }, []);

    const exibirMensagens = useCallback((mensagens: string[], tipo: 'erro' | 'sucesso') => {

        const novasMensagens = mensagens.map(item => {
            return {id:uuid(), mensagem: item, tipo }
        });

        setListaMensagens((mensagens) => [...novasMensagens, ...mensagens]);
    }, []);

    const removerMensagem = useCallback((id: string) => {
        setListaMensagens((mensagens) => mensagens.filter(item => item.id !== id));
    }, []);

    return (
        <ContextoAlerta.Provider value={{ exibirMensagem, exibirMensagens, removerMensagem }}>
            {children}
            <ListaAlertas mensagens={listaMensagens} />
        </ContextoAlerta.Provider>
    );
}

export const useAlerta = (): IContextoAlerta => {
    const contexto = useContext(ContextoAlerta);
    return contexto;
}
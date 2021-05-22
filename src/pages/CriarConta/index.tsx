import React, { FormEvent, useState } from 'react';
import { BiAt, BiLock, BiUser } from 'react-icons/bi';
import BotaoLink from '../../components/BotaoLink';
import BotaoPrimario from '../../components/BotaoPrimario';
import CaixaTexto from '../../components/CaixaTexto';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import Titulo from '../../components/Titulo';
import { useAlerta } from '../../hooks/HAlerta';
import { useUsuario } from '../../hooks/HUsuario';
import ServiceUsuario from '../../services/ServiceUsuario';
import { Formulario } from './styles';

const servicoUsuario = new ServiceUsuario();

const CriarConta: React.FC = () => {

    const {logar} = useUsuario();
    const {exibirMensagens, exibirMensagem} = useAlerta();
    const [apelido, setApelido] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const tentarCriarConta = async (evento: FormEvent<HTMLFormElement>): Promise<void> => {

        evento.preventDefault();
        const { notificacoes, sucesso } = await servicoUsuario.CriarUsuario({
            apelido,
            email,
            senha,
            confirmaSenha
        });

        if(sucesso){
            logar(email, senha);
            exibirMensagem(`Bem-vindo ao GoBolão, ${apelido}`, 'sucesso');
            return;
        }

        exibirMensagens(notificacoes, 'erro')
    }

    return (
        <ContainerPadraoCentralizado>
            <Titulo>Criar conta</Titulo>
            <Formulario onSubmit={tentarCriarConta}>
                <CaixaTexto
                    Icone={BiUser}
                    label="Apelido"
                    valor={apelido}
                    onChange={(e) => setApelido(e.target.value)}
                />
                <CaixaTexto
                    Icone={BiAt}
                    label="E-mail"
                    valor={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CaixaTexto
                    Icone={BiLock}
                    label="Senha"
                    valor={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                />
                <CaixaTexto
                    Icone={BiLock}
                    label="Confirma senha"
                    valor={confirmaSenha}
                    onChange={(e) => setConfirmaSenha(e.target.value)}
                    type="password"
                />
                <BotaoPrimario>Confirmar</BotaoPrimario>
                <BotaoLink to="/">Voltar</BotaoLink>
            </Formulario>
        </ContainerPadraoCentralizado>
    );
}

export default CriarConta;
import React, { FormEvent, useState } from 'react';
import { BiAt, BiLock, BiUser } from 'react-icons/bi';
import BotaoLink from '../../components/BotaoLink';
import BotaoPrimario from '../../components/BotaoPrimario';
import CaixaTexto from '../../components/CaixaTexto';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import Titulo from '../../components/Titulo';
import useUsuario from '../../contexts/hooks/useUsuario';
import { Formulario } from './styles';


const CriarConta: React.FC = () => {

    const { criar } = useUsuario();
    const [apelido, setApelido] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const tentarCriarConta = async (evento: FormEvent<HTMLFormElement>): Promise<void> => {

        evento.preventDefault();
        criar({
            apelido,
            email,
            senha,
            confirmaSenha
        });
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
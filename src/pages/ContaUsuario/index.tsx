import React, { FormEvent, useState } from 'react';
import { BiAt, BiUser } from 'react-icons/bi';
import BotaoPrimario from '../../components/BotaoPrimario';
import CaixaTexto from '../../components/CaixaTexto';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import Titulo from '../../components/Titulo';
import { useUsuario } from '../../hooks/HUsuario';
import { Formulario } from './styles';

const ContaUsuario = () => {

    const { alterar, usuario } = useUsuario();
    const [apelido, setApelido] = useState(usuario.apelido);
    const [email, setEmail] = useState(usuario.email);

    const alterarConta = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        alterar(apelido, email);
    }

    return (
        <ContainerPadraoCentralizado>
            <Titulo>Minha conta</Titulo>
            <Formulario onSubmit={alterarConta}>
                <CaixaTexto
                    Icone={BiUser}
                    label="Apelido"
                    valor={apelido}
                    onChange={e => setApelido(e.target.value)}
                />
                <CaixaTexto
                    Icone={BiAt}
                    label="E-mail"
                    valor={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <BotaoPrimario>Alterar conta</BotaoPrimario>
            </Formulario>
        </ContainerPadraoCentralizado>
    );
}

export default ContaUsuario;
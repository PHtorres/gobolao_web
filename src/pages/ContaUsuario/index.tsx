import React, { FormEvent, useState } from 'react';
import { BiAt, BiLock, BiUser } from 'react-icons/bi';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoSecundario from '../../components/BotaoSecundario';
import CaixaTexto from '../../components/CaixaTexto';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import Modal from '../../components/Modal';
import Titulo from '../../components/Titulo';
import { useAlerta } from '../../hooks/HAlerta';
import { useUsuario } from '../../hooks/HUsuario';
import ServiceUsuario from '../../services/ServiceUsuario';
import { Formulario } from './styles';

const servicoUsuario = new ServiceUsuario();

const ContaUsuario = () => {

    const { exibirMensagens, exibirMensagem } = useAlerta();
    const { alterar, usuario } = useUsuario();
    const [apelido, setApelido] = useState(usuario.apelido);
    const [email, setEmail] = useState(usuario.email);
    const [modalAlterarSenhaAberto, setModalAlterarSenhaAberto] = useState(false);
    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const alterarConta = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        alterar(apelido, email);
    }

    const alterarSenha = async (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const { notificacoes, sucesso } = await servicoUsuario.AlterarSenhaUsuario(
            senhaAtual,
            novaSenha,
            confirmaSenha);

        if (sucesso) {
            exibirMensagem('Senha alterada com sucesso!', 'sucesso');
            return;
        }

        exibirMensagens(notificacoes || [], 'erro');
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
                <BotaoSecundario type="button" onClick={() => setModalAlterarSenhaAberto(true)}>
                    Alterar senha
                </BotaoSecundario>
            </Formulario>
            <Modal
                isOpen={modalAlterarSenhaAberto}
                fechar={() => setModalAlterarSenhaAberto(false)}
                conteudoCentralizadoVertical
            >
                <ContainerPadraoCentralizado>
                    <Titulo>Alterar senha</Titulo>
                    <Formulario onSubmit={alterarSenha}>
                        <CaixaTexto
                            Icone={BiLock}
                            label="Senha atual"
                            valor={senhaAtual}
                            onChange={e => setSenhaAtual(e.target.value)}
                            type="password"
                        />
                        <CaixaTexto
                            Icone={BiLock}
                            label="Nova senha"
                            valor={novaSenha}
                            onChange={e => setNovaSenha(e.target.value)}
                            type="password"
                        />
                        <CaixaTexto
                            Icone={BiLock}
                            label="Confirma senha"
                            valor={confirmaSenha}
                            onChange={e => setConfirmaSenha(e.target.value)}
                            type="password"
                        />
                        <BotaoPrimario>Confirmar</BotaoPrimario>
                    </Formulario>
                </ContainerPadraoCentralizado>
            </Modal>
        </ContainerPadraoCentralizado>
    );
}

export default ContaUsuario;
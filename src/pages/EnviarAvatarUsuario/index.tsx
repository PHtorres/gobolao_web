import React, { ChangeEvent, useCallback } from 'react';
import AvatarUsuarioGrande from '../../components/AvatarUsuarioGrande';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import Titulo from '../../components/Titulo';
import useUsuario from '../../contexts/hooks/useUsuario';

import { AreaAvatar, InputImagem, LabelSelecionarArquivo } from './styles';

const EnviarAvatarUsuario = () => {

    const { usuario, alterarAvatar } = useUsuario();

    const aoSelecionarImagem = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            alterarAvatar(e.target.files);
        }
    }, [alterarAvatar]);

    return (
        <ContainerPadraoCentralizado>
            <Titulo>Capriche no seu Avatar, {usuario.apelido}!</Titulo>
            <AreaAvatar>
                <AvatarUsuarioGrande nomeImagemAvatar={usuario.nomeImagemAvatar} />
            </AreaAvatar>
            <LabelSelecionarArquivo htmlFor="avatar">
                Selecionar imagem
                <InputImagem type="file" accept="image/*" id="avatar" onChange={aoSelecionarImagem} />
            </LabelSelecionarArquivo>
        </ContainerPadraoCentralizado>
    );
}

export default EnviarAvatarUsuario;
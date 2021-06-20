import React from 'react';

import { Container } from './styles';

import avatarPadrao from '../../assets/images/AvatarUsuarioPadrao.png';
import utils from '../../utils';

interface AvatarUsuarioProps {
    nomeImagemAvatar: string;
}

const AvatarUsuario: React.FC<AvatarUsuarioProps> = ({ nomeImagemAvatar }) => {

    const imagemValida = (nomeImagemAvatar.length > 0);
    const sourceImagem = imagemValida?utils.urlImagem(nomeImagemAvatar):avatarPadrao;

    return (
        <Container src={sourceImagem}/>
    );
}

export default AvatarUsuario;
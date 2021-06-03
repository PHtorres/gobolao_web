import React from 'react';

import { Container } from './styles';

import avatarPadrao from '../../assets/images/AvatarUsuarioPadrao.png';

interface AvatarUsuarioProps {
    nomeImagemAvatar: string;
}

const AvatarUsuario: React.FC<AvatarUsuarioProps> = ({ nomeImagemAvatar }) => {

    const imagemValida = (nomeImagemAvatar.length > 0);
    const sourceImagem = imagemValida?`${process.env.REACT_APP_NOWIMG_URL_IMAGENS}/${nomeImagemAvatar}`:avatarPadrao;

    return (
        <Container src={sourceImagem}/>
    );
}

export default AvatarUsuario;
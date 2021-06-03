import React from 'react';

import { Container } from './styles';

import avatarPadrao from '../../assets/images/AvatarUsuarioPadrao.png';

interface AvatarUsuarioGrandeProps {
    nomeImagemAvatar: string;
}

const AvatarUsuarioGrande: React.FC<AvatarUsuarioGrandeProps> = ({ nomeImagemAvatar }) => {

    const imagemValida = (nomeImagemAvatar.length > 0);
    const sourceImagem = imagemValida?`${process.env.REACT_APP_NOWIMG_URL_IMAGENS}/${nomeImagemAvatar}`:avatarPadrao;

    return (
        <Container src={sourceImagem}/>
    );
}

export default AvatarUsuarioGrande;
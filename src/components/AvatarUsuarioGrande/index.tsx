import React from 'react';

import { Container } from './styles';

import avatarPadrao from '../../assets/images/AvatarUsuarioPadrao.png';
import utils from '../../utils';

interface AvatarUsuarioGrandeProps {
    nomeImagemAvatar: string;
}

const AvatarUsuarioGrande: React.FC<AvatarUsuarioGrandeProps> = ({ nomeImagemAvatar }) => {

    const imagemValida = (nomeImagemAvatar.length > 0);
    const sourceImagem = imagemValida?utils.urlImagem(nomeImagemAvatar):avatarPadrao;

    return (
        <Container src={sourceImagem}/>
    );
}

export default AvatarUsuarioGrande;
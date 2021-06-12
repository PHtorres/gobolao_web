import React from 'react';
import AvatarUsuarioGrande from '../AvatarUsuarioGrande';
import Titulo from '../Titulo';

import { Container } from './styles';

interface PerfilUsuarioProps{
    apelido:string;
    nomeImagemAvatar:string;
}

const PerfilUsuario: React.FC<PerfilUsuarioProps> = ({apelido, nomeImagemAvatar}) => {
  return (
      <Container>
          <AvatarUsuarioGrande nomeImagemAvatar={nomeImagemAvatar}/>
          <Titulo>{apelido}</Titulo>
      </Container>
  );
}

export default PerfilUsuario;
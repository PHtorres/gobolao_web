import React from 'react';
import { Link } from 'react-router-dom';
import useUsuario from '../../contexts/hooks/useUsuario';
import AvatarUsuario from '../AvatarUsuario';
import Texto from '../Texto';
import { Container } from './styles';

const AreaUsuario: React.FC = () => {

  const { usuario } = useUsuario();

  return (
    <Container>
      <Texto>{usuario.apelido}</Texto>
      <Link to='/me/avatar'>
        <AvatarUsuario nomeImagemAvatar={usuario.nomeImagemAvatar} />
      </Link>
    </Container>
  );
}

export default AreaUsuario;
import React from 'react';
import { useUsuario } from '../../../hooks/HUsuario';
import Rotas from '../../../routes';
import Menu from './Menu';

import { Container } from './styles';

const Corpo: React.FC = () => {

  const { usuario } = useUsuario();

  return (
    <Container>
      {usuario.logado &&
        <Menu />}
      <Rotas />
    </Container>
  );
}

export default Corpo;
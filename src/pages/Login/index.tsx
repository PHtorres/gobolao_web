import React from 'react';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import Titulo from '../../components/Titulo';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
      <ContainerPadraoCentralizado>
          <Titulo>Login</Titulo>
      </ContainerPadraoCentralizado>
  );
}

export default Login;
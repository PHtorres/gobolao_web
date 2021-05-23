import React from 'react';
import AreaUsuario from '../../../components/AreaUsuario';
import LogoGoBolao from '../../../components/LogoGoBolao';
import { useUsuario } from '../../../hooks/HUsuario';

import { Container } from './styles';

const Cabecalho: React.FC = () => {

  const { usuario } = useUsuario();

  return (
    <Container>
      <LogoGoBolao />
      {
        usuario.logado && <AreaUsuario />
      }
    </Container>
  );
}

export default Cabecalho;
import React from 'react';
import AreaUsuario from '../../../components/AreaUsuario';
import LogoGoBolao from '../../../components/LogoGoBolao';
import useMenuMobileStatus from '../../../contexts/hooks/useMenuMobileStatus';
import useUsuario from '../../../contexts/hooks/useUsuario';
import Tema from '../../../theme';

import { Container, IconeMenu } from './styles';

const Cabecalho: React.FC = () => {

  const { usuario } = useUsuario();
  const { exibirMenuMobile } = useMenuMobileStatus();

  return (
    <Container>
      <LogoGoBolao />
      {usuario.logado && <AreaUsuario />}
      <IconeMenu onClick={exibirMenuMobile} size={35} color={Tema.corTextoMenu}/>
    </Container>
  );
}

export default Cabecalho;
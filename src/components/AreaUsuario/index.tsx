import React from 'react';
import { useUsuario } from '../../hooks/HUsuario';
import Tema from '../../theme';
import Texto from '../Texto';
import { Container, IconeSairUsuario } from './styles';

const AreaUsuario: React.FC = () => {

  const { usuario, sair } = useUsuario();

  return (
    <Container>
      <Texto>{usuario.apelido}</Texto>
      <IconeSairUsuario color={Tema.corBordaInput} size={35} onClick={sair}/>
    </Container>
  );
}

export default AreaUsuario;
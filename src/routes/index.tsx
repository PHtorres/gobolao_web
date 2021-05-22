import React from 'react';
import { useUsuario } from '../hooks/HUsuario';
import Privadas from './Privadas';
import Publicas from './Publicas';

const Rotas: React.FC = () => {
  
  const { usuario } = useUsuario();

  if (usuario.logado) {
    return <Privadas />
  }

  return <Publicas />

}

export default Rotas;
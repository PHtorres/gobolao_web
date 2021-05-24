import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useAlerta } from '../../hooks/HAlerta';
import IMensagemAlerta from '../../models/IMensagemAlerta';
import Tema from '../../theme';

import { Container, Texto } from './styles';


const Alerta: React.FC<IMensagemAlerta> = ({ id, mensagem, tipo }) => {

  const { removerMensagem } = useAlerta();

  setTimeout(() => {
    removerMensagem(id);
  }, 5000);


  return (
    <Container tipo={tipo}>
      <Texto tipo={tipo}>{mensagem}</Texto>
      <IoIosCloseCircleOutline
        color={tipo === 'sucesso' ? Tema.corTextoSucesso : Tema.corTextoAlerta}
        size={30}
        onClick={() => removerMensagem(id)} />
    </Container>
  );
}

export default Alerta;
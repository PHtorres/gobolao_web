import React from 'react';
import IJogo from '../../models/IJogo';
import AvatarTime from '../AvatarTime';
import Texto from '../Texto';
import { Container } from './styles';

interface JogoProps{
    jogo:IJogo;
}

const Jogo: React.FC<JogoProps> = ({jogo}) => {
  return (
      <Container>
          <Texto>{jogo.mandante} x {jogo.visitante}</Texto>
          <AvatarTime nomeImagem={jogo.nomeImagemAvatarMandante}/>
          <AvatarTime nomeImagem={jogo.nomeImagemAvatarVisitante}/>
      </Container>
  );
}

export default Jogo;
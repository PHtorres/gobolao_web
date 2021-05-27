import React from 'react';
import IRanking from '../../models/IRanking';
import Texto from '../Texto';

import { Container } from './styles';

interface RankingProps{
    ranking:IRanking;
}

const Ranking: React.FC<RankingProps> = ({ranking}) => {

  return (
      <Container>
          {ranking.classificacao?.map(item => <Texto>{item.apelidoUsuario}</Texto>)}
      </Container>
  );
}

export default Ranking;
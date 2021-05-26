import React from 'react';
import { Container } from './styles';

const CardPadrao: React.FC = ({children}) => {
  return (
      <Container>
          {children}
      </Container>
  );
}

export default CardPadrao;
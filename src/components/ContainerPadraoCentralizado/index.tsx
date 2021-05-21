import React from 'react';

import { Container } from './styles';

const ContainerPadraoCentralizado: React.FC = ({children}) => {
  return (
      <Container>
          {children}
      </Container>
  );
}

export default ContainerPadraoCentralizado;
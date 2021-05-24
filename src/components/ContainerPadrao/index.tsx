import React from 'react';

import { Container } from './styles';

const ContainerPadrao: React.FC = ({children}) => {
  return (
      <Container>
          {children}
      </Container>
  );
}

export default ContainerPadrao;
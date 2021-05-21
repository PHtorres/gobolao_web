import React from 'react';

import { Container } from './styles';

const Titulo: React.FC = ({children}) => {
  return (
      <Container>
          {children}
      </Container>
  );
}

export default Titulo;
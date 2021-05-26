import React from 'react';

import { Container } from './styles';

const TituloSecundario: React.FC = ({children}) => {
  return (
      <Container>
          {children}
      </Container>
  );
}

export default TituloSecundario;
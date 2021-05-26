import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media(max-width: 680px) {
    flex-direction: column;
  }

  @media(min-width: 680px) {
    align-items: center;
  }

`;

export const AreaBlocos = styled(Link)`
  display: flex;
  justify-content: space-between;
  flex: 1;
  text-decoration: none;
`;

export const BlocoEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BlocoCentro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlocoDireita = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AreaBotoes = styled.div`

`;

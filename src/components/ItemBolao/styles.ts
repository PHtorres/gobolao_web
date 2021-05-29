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

const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20%;
`;

export const AreaBlocos = styled(Link)`
  display: flex;
  justify-content: space-between;
  flex: 1;
  text-decoration: none;
`;

export const BlocoEsquerda = styled(Bloco)`
  align-items: flex-start;
`;

export const BlocoCentro = styled(Bloco)`
  align-items: center;
`;

export const BlocoDireita = styled(Bloco)`
  align-items: flex-end;
`;

export const AreaBotoes = styled.div`
min-width: 20%;
/* @media(max-width: 1150px) {
  width: 10%;
  } */
`;

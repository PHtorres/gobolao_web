import styled from 'styled-components';

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 610px) {
    flex-direction: column;
  }
`;

export const AreaBotoes = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 350px;
  align-items: center;
`;

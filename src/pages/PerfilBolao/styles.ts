import styled from 'styled-components';

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 610px) {
    flex-direction: column;
  }
`;

export const AreaBotoesCabecalho = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 450px;
  align-items: center;
  gap: 5px;
`;

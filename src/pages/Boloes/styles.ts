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

export const AreaBoloes = styled.div`
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    @media(max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    @media(max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 8px;
    }
`;

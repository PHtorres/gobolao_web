import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px;
  border:1px solid ${({theme}) => theme.corBordaInput};
  border-radius: 10px;
  margin: 8px 0;
  width: 600px;
  @media(max-width: 750px) {
    width: 100%;
  }
`;

export const LinhaSolicitacao = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0;
`;

export const LinhaBotoes = styled.div`
display: flex;
justify-content: center;
`;

export const AreaEsquerda = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

export const AreaDireita = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;

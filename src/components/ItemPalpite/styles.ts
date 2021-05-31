import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px;
  border:1px solid ${({theme}) => theme.corBordaInput};
  border-radius: 10px;
  margin: 8px 0;
`;

export const LinhaPalpite = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0;
`;

export const LinhaResultado = styled.div`
display: flex;
justify-content: space-between;
`;

export const LinhaBotaoDesfazerPalpite = styled.div`
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

export const AreaPlacar = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

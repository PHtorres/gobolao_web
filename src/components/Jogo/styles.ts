import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px;
  border:1px solid ${({theme}) => theme.corBordaInput};
  border-radius: 10px;
  margin: 8px 0;
`;

export const AreaEsquerda = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

export const AreaCentro = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
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

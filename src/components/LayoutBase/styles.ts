import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  min-width: 700px;
  margin: 20px;
  background-color: ${({theme}) => theme.corFundo};
  border-radius: 10px;
  width: 100%;
  height: 100vh;
`;

export const AreaCorpo = styled.nav`
  display: flex;
  flex: 1;
`;

export const AreaMenu = styled.nav`
border-right: 1px solid ${({theme}) => theme.corBarraDivisao};
padding: 5px;
`;

export const AreaPaginas = styled.main`
display: flex;
flex: 1;
`;

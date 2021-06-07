import styled from 'styled-components';

export const Container = styled.nav`
  padding: 10px 30px;
  border-right: 1px solid ${({theme}) => theme.corBarraDivisao};
  height: 100vh;
  @media(max-width: 900px) {
    display: none;
  }
`;
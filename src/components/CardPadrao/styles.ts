import styled from 'styled-components';

export const Container = styled.div`
    padding: 5px;
  border:1px solid ${({theme}) => theme.corBordaInput};
  border-radius: 10px;
  margin: 8px 0;
`;

import styled from 'styled-components';

export const Container = styled.img`
  width: 300px;
  height: 300px;
  border: 8px solid ${({theme}) => theme.corPrimaria};
  border-radius: 50%;
`;

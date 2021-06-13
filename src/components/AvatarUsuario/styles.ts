import styled from 'styled-components';

export const Container = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid ${({theme}) => theme.corPrimaria};
  border-radius: 50%;
`;

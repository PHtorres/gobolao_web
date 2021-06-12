import styled from 'styled-components';

export const Container = styled.img`
  width: 40px;
  height: 40px;
  border: 2px solid ${({theme}) => theme.corPrimaria};
  border-radius: 20px;
`;

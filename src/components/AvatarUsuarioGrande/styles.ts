import styled from 'styled-components';

export const Container = styled.img`
  width: 300px;
  height: 300px;
  border: 1px solid ${({theme}) => theme.corTextoMenu};
  border-radius: 50%;
`;

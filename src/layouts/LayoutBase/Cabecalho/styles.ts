import { BiMenu } from 'react-icons/bi';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid ${({theme}) => theme.corBarraDivisao};
`;

export const IconeMenu = styled(BiMenu)`
  @media(min-width: 900px) {
    display: none;
  }
`;

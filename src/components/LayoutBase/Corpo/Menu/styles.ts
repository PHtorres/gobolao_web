import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  padding: 10px 30px;
  border-right: 1px solid ${({theme}) => theme.corBarraDivisao};
  height: 80vh;
`;

export const TituloMenu = styled.span`
  color: ${({theme}) => theme.corTextoTituloSecundario};
`;

export const ListaMenu = styled.ul`
margin: 20px 10px;
`;

export const ItemMenu = styled.li`
list-style: none;
margin-bottom: 15px;
`;

export const LinkMenu = styled(Link)`
text-decoration: none;
color: ${({theme}) => theme.corTextoMenu};
`;
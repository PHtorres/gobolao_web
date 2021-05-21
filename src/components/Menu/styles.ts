import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  padding: 5px;
`;

export const TituloMenu = styled.h5`
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
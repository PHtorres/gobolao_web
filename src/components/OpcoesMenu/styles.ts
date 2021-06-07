import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
`;

export const ItemMenu = styled.li`
list-style: none;
`;

export const LinkMenu = styled(Link)`
text-decoration: none;
color: ${({theme}) => theme.corTextoMenu};
`;

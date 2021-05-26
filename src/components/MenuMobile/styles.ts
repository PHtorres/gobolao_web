import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  padding: 10px 30px;
  border-right: 1px solid ${({theme}) => theme.corBarraDivisao};
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 320px;
  height: 100vh;
  z-index: 999;
  background-color: ${({theme}) => theme.corFundo};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CabecalhoMenuMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const TituloMenu = styled.span`
  color: ${({theme}) => theme.corTextoTituloSecundario};
  margin: 15px 0;
`;

export const ListaMenu = styled.ul`
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

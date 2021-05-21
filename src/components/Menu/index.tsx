import React from 'react';
import LogoGoBolao from '../LogoGoBolao';

import { Container, ListaMenu, ItemMenu, LinkMenu, TituloMenu } from './styles';

const Menu: React.FC = () => {
  return (
      <Container>
          <TituloMenu>Navegue</TituloMenu>
          <ListaMenu>
              <ItemMenu>
                  <LinkMenu to="/">Home</LinkMenu>
              </ItemMenu>
              <ItemMenu>
                  <LinkMenu to="/palpites">Palpites</LinkMenu>
              </ItemMenu>
              <ItemMenu>
                  <LinkMenu to="/jogos">Jogos</LinkMenu>
              </ItemMenu>
              <ItemMenu>
                  <LinkMenu to="/rankings">Rankings</LinkMenu>
              </ItemMenu>
          </ListaMenu>
      </Container>
  );
}

export default Menu;
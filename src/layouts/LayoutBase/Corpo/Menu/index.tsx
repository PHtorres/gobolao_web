import React from 'react';
import { useUsuario } from '../../../../hooks/HUsuario';

import { Container, ListaMenu, ItemMenu, LinkMenu, TituloMenu } from './styles';

const Menu: React.FC = () => {
    const { sair } = useUsuario();
    return (
        <Container>
            <TituloMenu>Navegue</TituloMenu>
            <ListaMenu>
                <ItemMenu>
                    <LinkMenu to="/">Home</LinkMenu>
                </ItemMenu>
                <ItemMenu>
                    <LinkMenu to="/boloes">Bolões</LinkMenu>
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
                <ItemMenu>
                    <LinkMenu to="/me/conta">Conta</LinkMenu>
                </ItemMenu>
                <ItemMenu onClick={sair}>
                    <LinkMenu to="/">Sair</LinkMenu>
                </ItemMenu>
            </ListaMenu>
        </Container>
    );
}

export default Menu;
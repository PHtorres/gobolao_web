import React from 'react';

import { Container, ItemMenu, LinkMenu } from './styles';
import { useUsuario } from '../../hooks/HUsuario';

const OpcoesMenu: React.FC = () => {

    const { sair } = useUsuario();

    return (
        <Container>
            <ItemMenu>
                <LinkMenu to="/">Home</LinkMenu>
            </ItemMenu>
            <ItemMenu>
                <LinkMenu to="/me/boloes">Bolões</LinkMenu>
            </ItemMenu>
            <ItemMenu>
                <LinkMenu to="/me/palpites">Palpites</LinkMenu>
            </ItemMenu>
            <ItemMenu>
                <LinkMenu to="/jogos">Jogos</LinkMenu>
            </ItemMenu>
            <ItemMenu>
                <LinkMenu to="/me/rankings">Rankings</LinkMenu>
            </ItemMenu>
            <ItemMenu>
                <LinkMenu to="/me/conta">Conta</LinkMenu>
            </ItemMenu>
            <ItemMenu>
                <LinkMenu to="/regulamento">Regulamento</LinkMenu>
            </ItemMenu>
            <ItemMenu onClick={sair}>
                <LinkMenu to="/">Sair</LinkMenu>
            </ItemMenu>
        </Container>
    );
}

export default OpcoesMenu;
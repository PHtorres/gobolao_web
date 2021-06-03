import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {BiX} from 'react-icons/bi';
import { useMenuMobileStatus } from '../../hooks/HMenuMobileStatus';
import Tema from '../../theme';
import AreaUsuario from '../AreaUsuario';
import LogoGoBolao from '../LogoGoBolao';

import { Container, CabecalhoMenuMobile, TituloMenu, ListaMenu, ItemMenu, LinkMenu } from './styles';
import { useUsuario } from '../../hooks/HUsuario';

const MenuMobile: React.FC = () => {

    const {sair} = useUsuario();
    const {esconderMenuMobile} = useMenuMobileStatus();
    const history = useHistory();
    useEffect(() => {
        return history.listen(() => {
            esconderMenuMobile();
        });
    }, [history, esconderMenuMobile]);

    return (
        <Container>
            <CabecalhoMenuMobile>
                <LogoGoBolao />
                <AreaUsuario />
                <BiX onClick={esconderMenuMobile} size={35} color={Tema.corTextoMenu}/>
            </CabecalhoMenuMobile>
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
                <ItemMenu onClick={sair}>
                    <LinkMenu to="/">Sair</LinkMenu>
                </ItemMenu>
            </ListaMenu>
        </Container>
    );
}

export default MenuMobile;
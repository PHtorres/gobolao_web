import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BiX } from 'react-icons/bi';
import Tema from '../../theme';
import AreaUsuario from '../AreaUsuario';
import LogoGoBolao from '../LogoGoBolao';
import OpcoesMenu from '../OpcoesMenu';

import { Container, CabecalhoMenuMobile } from './styles';
import useMenuMobileStatus from '../../contexts/hooks/useMenuMobileStatus';


const MenuMobile: React.FC = () => {

    const { esconderMenuMobile } = useMenuMobileStatus();
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
                <BiX onClick={esconderMenuMobile} size={35} color={Tema.corTextoMenu} />
            </CabecalhoMenuMobile>
            <OpcoesMenu />
        </Container>
    );
}

export default MenuMobile;
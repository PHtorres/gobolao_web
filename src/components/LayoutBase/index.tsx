import React from 'react';
import Cabecalho from '../Cabecalho';
import Menu from '../Menu';

import { Container, AreaCorpo, AreaMenu, AreaPaginas } from './styles';

const LayoutBase: React.FC = ({ children }) => {
    return (
        <Container>
            <Cabecalho />
            <AreaCorpo>
                {/* <AreaMenu>
                    <Menu />
                </AreaMenu> */}
                <AreaPaginas>
                    {children}
                </AreaPaginas>
            </AreaCorpo>
        </Container>
    );
}

export default LayoutBase;
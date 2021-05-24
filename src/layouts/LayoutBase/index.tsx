import React from 'react';
import Cabecalho from './Cabecalho';

import { Container } from './styles';
import Corpo from './Corpo';

const LayoutBase: React.FC = () => {
    return (
        <Container>
            <Cabecalho />
            <Corpo/>
        </Container>
    );
}

export default LayoutBase;
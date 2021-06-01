import React, { ButtonHTMLAttributes } from 'react';

import { Container, TextoBotao } from './styles';

const BotaoTerciario: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            <TextoBotao>
                {children}
            </TextoBotao>
        </Container>
    );
}

export default BotaoTerciario;
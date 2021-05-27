import React from 'react';
import { LinkProps } from 'react-router-dom';

import { Container, TextoBotao } from './styles';

const BotaoPrimarioLink: React.FC<LinkProps> = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            <TextoBotao>
                {children}
            </TextoBotao>
        </Container>
    );
}

export default BotaoPrimarioLink;
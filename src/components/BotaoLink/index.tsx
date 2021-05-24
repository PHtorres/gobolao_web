import React from 'react';
import { LinkProps } from 'react-router-dom';
import { Container, TextoLink } from './styles';

const BotaoLink: React.FC<LinkProps> = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            <TextoLink>
                {children}
            </TextoLink>
        </Container>
    );
}

export default BotaoLink;
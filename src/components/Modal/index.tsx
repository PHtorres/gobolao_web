import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import TemaDark from '../../theme';

import { Container, AreaBotaoFechar, AreaConteudo } from './styles';

interface ModalProps {
    isOpen: boolean;
    fechar():void;
    conteudoCentralizadoVertical?:boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, fechar, conteudoCentralizadoVertical }) => {

    if (isOpen) {
        return (
            <Container
            conteudoCentralizadoVertical={conteudoCentralizadoVertical}>
                <AreaBotaoFechar onClick={fechar}>
                    <AiOutlineClose color={TemaDark.corTextoMenu} size={40} />
                </AreaBotaoFechar>
                <AreaConteudo>
                    {children}
                </AreaConteudo>
            </Container>
        );
    }

    return <></>;
}

export default Modal;
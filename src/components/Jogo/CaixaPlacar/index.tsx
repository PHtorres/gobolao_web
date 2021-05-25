import React, { InputHTMLAttributes, useState } from "react";

import { Container, Conteudo, Input } from './styles';


const CaixaPlacar: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {

    const [estaFocado, setEstaFocado] = useState(false);

    function aoFocar() {
        setEstaFocado(true);
    }

    function aoDesfocar() {
        setEstaFocado(false);
    }

    const onNumberOnlyChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValid = new RegExp("[0-9]").test(keyValue);
        if (!isValid) {
           event.preventDefault();
           return;
        }
    };

    return (
        <Container>
            <Conteudo focado={estaFocado}>
                <Input {...rest} onFocus={aoFocar} onBlur={aoDesfocar} onKeyPress={onNumberOnlyChange} />
            </Conteudo>
        </Container>
    );
}

export default CaixaPlacar;
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

    return (
        <Container>
            <Conteudo focado={estaFocado}>
                <Input {...rest} onFocus={aoFocar} onBlur={aoDesfocar} />
            </Conteudo>
        </Container>
    );
}

export default CaixaPlacar;
import React, { InputHTMLAttributes, useState } from "react";
import { IconType } from "react-icons";
import tema from '../../theme';
import Texto from "../Texto";

import { Container, Conteudo, Input } from './styles';

interface CaixaTextoProps extends InputHTMLAttributes<HTMLInputElement> {
    valor: string;
    label: string;
    Icone:IconType;
}

const CaixaTexto: React.FC<CaixaTextoProps> = ({ valor, label, Icone, ...rest }) => {

    const [estaFocado, setEstaFocado] = useState(false);

    function aoFocar() {
        setEstaFocado(true);
    }

    function aoDesfocar() {
        setEstaFocado(false);
    }

    return (
        <Container>
            <Texto>{label}</Texto>
            <Conteudo focado={estaFocado}>
                <Icone size={30} color={estaFocado || valor.length > 0?tema.corPrimaria:tema.corBordaInput}/>
                <Input value={valor} {...rest} onFocus={aoFocar} onBlur={aoDesfocar} />
            </Conteudo>
        </Container>
    );
}

export default CaixaTexto;
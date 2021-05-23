import React, { InputHTMLAttributes, useState } from "react";
import { IconType } from "react-icons";
import tema from '../../theme';
import Texto from "../Texto";

import { Container, Conteudo, Input } from './styles';

interface CaixaDataHoraProps extends InputHTMLAttributes<HTMLInputElement> {
    valor: string;
    label: string;
    Icone:IconType;
}

const CaixaDataHora: React.FC<CaixaDataHoraProps> = ({ valor, label, Icone, ...rest }) => {

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
                <input type="datetime" onChange={(e) => e.target.value}/>
            </Conteudo>
        </Container>
    );
}

export default CaixaDataHora;
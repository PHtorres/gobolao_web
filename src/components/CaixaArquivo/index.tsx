import React, { InputHTMLAttributes, useState } from "react";
import { IconType } from "react-icons";
import tema from '../../theme';
import Texto from "../Texto";

import { Container, Conteudo, Input } from './styles';

interface CaixaArquivoProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    Icone:IconType;
}

const CaixaArquivo: React.FC<CaixaArquivoProps> = ({ label, Icone, ...rest }) => {

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
                <Icone size={30} color={estaFocado?tema.corPrimaria:tema.corBordaInput}/>
                <Input {...rest} onFocus={aoFocar} onBlur={aoDesfocar} type="file"/>
            </Conteudo>
        </Container>
    );
}

export default CaixaArquivo;
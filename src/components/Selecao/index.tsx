import React, { ChangeEvent } from 'react';
import { IconType } from 'react-icons';
import Tema from '../../theme';
import Texto from '../Texto';

import { Container, Conteudo, Select, Option } from './styles';

interface SelecaoOpcao {
    id: number;
    texto: string;
}

interface SelecaoProps {
    label: string;
    Icone: IconType;
    opcoes: SelecaoOpcao[];
    selecionarOpcao(id: number): void;
    selecionado: number;
}

const Selecao: React.FC<SelecaoProps> = ({ label, Icone, opcoes, selecionarOpcao, selecionado }) => {

    const aoSelecionar = (e: ChangeEvent<HTMLSelectElement>) => {
        selecionarOpcao(Number(e.target.value));
    }

    return (
        <Container>
            <Texto>{label}</Texto>
            <Conteudo focado={selecionado > 0}>
                <Icone size={30} color={selecionado > 0 ? Tema.corPrimaria : Tema.corBordaInput} />
                <Select onChange={(e) => aoSelecionar(e)}>
                    {opcoes.map(item => (
                        <Option
                            selected={selecionado === item.id}
                            key={item.id}
                            value={item.id}>
                            {item.texto}
                        </Option>
                    ))}
                </Select>
            </Conteudo>
        </Container>
    );
}

export default Selecao;
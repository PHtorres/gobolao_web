import React from 'react';
import IBolao from '../../models/IBolao';
import CardPadrao from '../CardPadrao';
import Texto from '../Texto';
import TextoDestaque from '../TextoDestaque';
import TituloSecundario from '../TituloSecundario';

import { Container, AreaCriador } from './styles';

interface CardBolaoProps {
    bolao: IBolao;
}

const CardBolao: React.FC<CardBolaoProps> = ({ bolao }) => {

    return (
        <CardPadrao>
            <Container to={`/boloes/perfil/${bolao.idBolao}`}>
                <TituloSecundario>{bolao.nome}</TituloSecundario>
                <AreaCriador>
                    <Texto>Criador</Texto>
                    <TextoDestaque>{bolao.nomeCriador}</TextoDestaque>
                </AreaCriador>
            </Container>
        </CardPadrao>
    );
}

export default CardBolao;
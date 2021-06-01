import React, { useCallback } from 'react';
import ISugestao from '../../models/ISugestao';
import BotaoTerciario from '../BotaoTerciario';
import Texto from '../Texto';
import Titulo from '../Titulo';
import { useHistory } from 'react-router-dom';

import { Container, AreaBotoes } from './styles';
import BotaoPrimario from '../BotaoPrimario';

interface SugestaoProps {
    sugestao: ISugestao;
    cancelar(): void;
}

const Sugestao: React.FC<SugestaoProps> = ({ sugestao, cancelar }) => {

    const history = useHistory();

    const confirmar = useCallback(() => {
        cancelar();
        history.push(sugestao.rotaConfirma);
    }, [history, cancelar, sugestao]);

    return (
        <Container>
            <Titulo>{sugestao.titulo}</Titulo>
            <Texto>{sugestao.descricao}</Texto>
            <AreaBotoes>
                <BotaoPrimario onClick={confirmar}>
                    {sugestao.textoConfirma}
                </BotaoPrimario>
                <BotaoTerciario onClick={cancelar}>{sugestao.textoCancela}</BotaoTerciario>
            </AreaBotoes>
        </Container>
    );
}

export default Sugestao;
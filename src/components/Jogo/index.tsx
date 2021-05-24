import React, { useState } from 'react';
import IJogo from '../../models/IJogo';
import ServicePalpite from '../../services/ServicePalpite';
import AvatarTime from '../AvatarTime';
import Texto from '../Texto';
import CaixaPlacar from './CaixaPlacar';
import { Container, AreaEsquerda, AreaCentro, AreaDireita } from './styles';

const servicoPalpite = new ServicePalpite();
interface JogoProps {
    jogo: IJogo;
}

const Jogo: React.FC<JogoProps> = ({ jogo }) => {
    const [placarMandante, setPlacarMandante] = useState(0);
    const [placarVisitante, setPlacarVisitante] = useState(0);

    return (
        <Container>
            <AreaEsquerda>
                <AvatarTime nomeImagem={jogo.nomeImagemAvatarMandante} />
                <Texto>{jogo.mandante}</Texto>
            </AreaEsquerda>
            <AreaCentro>
                <CaixaPlacar
                    value={placarMandante}
                    onChange={(e) => setPlacarMandante(Number(e.target.value))} />
                <Texto>X</Texto>
                <CaixaPlacar
                    value={placarVisitante}
                    onChange={(e) => setPlacarVisitante(Number(e.target.value))} />
            </AreaCentro>
            <AreaDireita>
                <Texto>{jogo.visitante}</Texto>
                <AvatarTime nomeImagem={jogo.nomeImagemAvatarVisitante} />
            </AreaDireita>
        </Container>
    );
}

export default Jogo;
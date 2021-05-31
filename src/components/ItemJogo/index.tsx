import React, { useState } from 'react';
import IJogo from '../../models/IJogo';
import utils from '../../utils';
import ServicePalpite from '../../services/ServicePalpite';
import AvatarTime from '../AvatarTime';
import BotaoPrimario from '../BotaoPrimario';
import BotaoSecundario from '../BotaoSecundario';
import BotaoSucesso from '../BotaoSucesso';
import Texto from '../Texto';
import CaixaPlacar from './CaixaPlacar';
import {
    Container,
    LinhaInfo,
    LinhaJogo,
    AreaEsquerda,
    AreaStatusPalpite,
    AreaPlacar,
    AreaDireita,
    LinhaBotaoEnviarPalpite
} from './styles';
import { useAlerta } from '../../hooks/HAlerta';
import BotaoPrimarioLink from '../BotaoPrimarioLink';

const servicoPalpite = new ServicePalpite();
interface JogoProps {
    jogo: IJogo;
}

const ItemJogo: React.FC<JogoProps> = ({ jogo }) => {

    const { exibirMensagem, exibirMensagens } = useAlerta();
    const [palpiteHabilitado, setPalpiteHabilitado] = useState(false);
    const [usuarioTemPalpite, setUsuarioTemPalpite] = useState(jogo.usuarioTemPalpite);
    const [placarMandante, setPlacarMandante] = useState(0);
    const [placarVisitante, setPlacarVisitante] = useState(0);

    const enviarPalpite = async () => {
        const { sucesso, notificacoes } = await servicoPalpite.CriarPalpite({
            idJogo: jogo.id,
            placarMandantePalpite: placarMandante,
            placarVisitantePalpite: placarVisitante
        });

        if (sucesso) {
            setPalpiteHabilitado(false);
            setUsuarioTemPalpite(true);
            exibirMensagem('Palpite criado com sucesso!', 'sucesso');
            return;
        }

        exibirMensagens(notificacoes || [], 'erro');
    }

    const botaoFazerPalpite = () => !usuarioTemPalpite && !palpiteHabilitado && !jogo.jogoIniciado;
    const botaoEnviarPalpite = () => !usuarioTemPalpite && palpiteHabilitado && !jogo.jogoIniciado;
    const botaoPalpiteEnviado = () => usuarioTemPalpite && !jogo.jogoIniciado;
    const botaoPalpitesGalera = () => jogo.jogoIniciado;
    const areaPlacar = () => !usuarioTemPalpite && palpiteHabilitado && !jogo.jogoIniciado;

    return (
        <Container>
            <LinhaInfo>
                <Texto>{utils.DataCurtaComHoraMinuto(new Date(jogo.dataHora))} - {jogo.nomeCampeonato} - {jogo.fase}</Texto>
            </LinhaInfo>
            <LinhaJogo>
                <AreaEsquerda>
                    <AvatarTime nomeImagem={jogo.nomeImagemAvatarMandante} />
                    <Texto>{jogo.mandante}</Texto>
                </AreaEsquerda>

                {areaPlacar() &&
                    <AreaPlacar>
                        <CaixaPlacar
                            value={placarMandante}
                            onChange={(e) => setPlacarMandante(Number(e.target.value))} />
                        <Texto>X</Texto>
                        <CaixaPlacar
                            value={placarVisitante}
                            onChange={(e) => setPlacarVisitante(Number(e.target.value))} />
                    </AreaPlacar>}

                {botaoFazerPalpite() &&
                    <AreaStatusPalpite>
                        <BotaoSecundario onClick={() => setPalpiteHabilitado(true)}>
                            Fazer palpite
                        </BotaoSecundario>
                    </AreaStatusPalpite>}

                {botaoPalpiteEnviado() &&
                    <AreaStatusPalpite>
                        <BotaoSucesso>Palpite enviado!</BotaoSucesso>
                    </AreaStatusPalpite>}

                {botaoPalpitesGalera() &&
                    <AreaStatusPalpite>
                        <BotaoPrimarioLink to={`palpites/jogo/${jogo.id}`}>
                            Palpites da galera
                        </BotaoPrimarioLink>
                    </AreaStatusPalpite>}

                <AreaDireita>
                    <Texto>{jogo.visitante}</Texto>
                    <AvatarTime nomeImagem={jogo.nomeImagemAvatarVisitante} />
                </AreaDireita>
            </LinhaJogo>


            {botaoEnviarPalpite() &&
                <LinhaBotaoEnviarPalpite>
                    <BotaoPrimario onClick={enviarPalpite}>Enviar palpite</BotaoPrimario>
                </LinhaBotaoEnviarPalpite>}


        </Container>
    );
}

export default ItemJogo;
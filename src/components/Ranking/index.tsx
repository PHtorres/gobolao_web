import React, { useCallback, useState } from 'react';
import { lighten } from 'polished';
import IRanking from '../../models/IRanking';
import Tema from '../../theme';
import Texto from '../Texto';
import TextoDestaque from '../TextoDestaque';
import TextoSecundario from '../TextoSecundario';
import TituloSecundario from '../TituloSecundario';

import {
    Container,
    AreaInfo,
    AreaClassificacao,
    CabecalhoClassificacao,
    ItemClassificacao,
    BlocoEsquerda,
    BlocoEsquerdaUsuario,
    BlocoCentro,
    BlocoDireita,
    BlocoColocacao,
    TextoNumeroColocacao
} from './styles';
import AvatarUsuario from '../AvatarUsuario';
import BotaoPrimario from '../BotaoPrimario';
import ServicePalpite from '../../services/ServicePalpite';
import IPalpite from '../../models/IPalpite';
import Modal from '../Modal';
import Titulo from '../Titulo';
import ItemPalpite from '../ItemPalpite';
import ContainerPadrao from '../ContainerPadrao';
import PerfilUsuario from '../PerfilUsuario';

const servicoPalpite = new ServicePalpite();

interface RankingProps {
    ranking: IRanking;
}

const corNumeroColocacao = (numeroColocacao: number): string => {
    switch (numeroColocacao) {
        case 1:
            return Tema.corPrimaria;
        default:
            return Tema.corTextoMenu;
    }
}

const Ranking: React.FC<RankingProps> = ({ ranking }) => {

    const [palpitesAdversario, setPalpitesAdversario] = useState<IPalpite[]>([]);
    const [modalPalpitesAberto, setModalPalpitesAberto] = useState(false);
    const [modalPerfilUsuarioAberto, setModalPerfilUsuarioAberto] = useState(false);
    const [apelidoPerfilUsuario, setApelidoPerfilUsuario] = useState('');
    const [nomeImagemAvatarPerfilUsuario, setNomeImagemAvatarPerfilUsuario] = useState('');

    const pegarCorLighten = useCallback((posicao: number): string => {
        const TOTAL_PARTICIPANTES = ranking?.classificacao?.length;
        const COR_SUCESSO = '#54fc47';
        const COR_PERIGO = '#f03c3c';

        if (TOTAL_PARTICIPANTES > 5) {
            if (posicao < 4) {
                const VALOR_LIGHTEN = posicao / 10;
                return lighten(VALOR_LIGHTEN, COR_SUCESSO);
            } else {
                const ANTEPENULTIMO = TOTAL_PARTICIPANTES - 2 === posicao;
                const PENULTIMO = TOTAL_PARTICIPANTES - 1 === posicao;
                const ULTIMO = TOTAL_PARTICIPANTES === posicao;
                if (ANTEPENULTIMO) return lighten(0.3, COR_PERIGO);
                if (PENULTIMO) return lighten(0.2, COR_PERIGO);
                if (ULTIMO) return lighten(0, COR_PERIGO);
            }
        }

        const VALOR_LIGHTEN = posicao / 10;
        return lighten(VALOR_LIGHTEN, COR_SUCESSO);


    }, [ranking?.classificacao?.length]);


    const obterPalpitesAdversario = useCallback(async (idAdversario: number) => {
        const { conteudo, sucesso } = await servicoPalpite.ObterPalpitesAdversario(
            idAdversario,
            ranking.idBolao);

        if (sucesso) {
            setPalpitesAdversario(conteudo);
            setModalPalpitesAberto(true);
        }
    }, [ranking]);

    const abrirPerfilUsuario = (apelido: string, nomeImagemAvatar: string) => {
        setApelidoPerfilUsuario(apelido);
        setNomeImagemAvatarPerfilUsuario(nomeImagemAvatar);
        setModalPerfilUsuarioAberto(true);
    }

    return (
        <Container>
            <AreaInfo>
                <TituloSecundario>{ranking.nomeBolao}</TituloSecundario>
                <Texto>Campeonato: </Texto>
                <TextoDestaque>{ranking.nomeCampeonato}</TextoDestaque>
            </AreaInfo>
            <AreaClassificacao>
                <CabecalhoClassificacao>
                    <BlocoColocacao>
                    </BlocoColocacao>
                    <BlocoEsquerda>
                        <TextoDestaque>Participante</TextoDestaque>
                    </BlocoEsquerda>
                    <BlocoCentro>
                        <TextoDestaque>Pontos</TextoDestaque>
                    </BlocoCentro>
                    <BlocoDireita>
                        <TextoDestaque>Palpites</TextoDestaque>
                    </BlocoDireita>
                </CabecalhoClassificacao>
                {ranking.classificacao?.map((item, index) => (
                    <ItemClassificacao key={index} corLighten={pegarCorLighten(index + 1)}>
                        <BlocoColocacao>
                            <TextoNumeroColocacao cor={corNumeroColocacao(index + 1)}>
                                {index + 1}
                            </TextoNumeroColocacao>
                        </BlocoColocacao>
                        <BlocoEsquerdaUsuario
                            onClick={() => abrirPerfilUsuario(
                                item.apelidoUsuario,
                                item.nomeImagemAvatarUsuario)}>
                            <AvatarUsuario nomeImagemAvatar={item.nomeImagemAvatarUsuario} />
                            <TextoSecundario>{item.apelidoUsuario}</TextoSecundario>
                        </BlocoEsquerdaUsuario>
                        <BlocoCentro>
                            <TextoSecundario>{item.pontos}</TextoSecundario>
                        </BlocoCentro>
                        <BlocoDireita>
                            <BotaoPrimario onClick={() => obterPalpitesAdversario(item.idUsuario)}>
                                {item.quantidadePalpites}
                            </BotaoPrimario>
                        </BlocoDireita>
                    </ItemClassificacao>
                ))}
            </AreaClassificacao>
            <Modal
                isOpen={modalPalpitesAberto}
                fechar={() => setModalPalpitesAberto(false)}
            >
                <ContainerPadrao>
                    <Titulo>
                        Palpites do adversário
                    </Titulo>
                    {palpitesAdversario.map(palpite =>
                        <ItemPalpite modoPublico key={palpite.id} palpite={palpite} />)}
                </ContainerPadrao>
            </Modal>
            <Modal
                isOpen={modalPerfilUsuarioAberto}
                fechar={() => setModalPerfilUsuarioAberto(false)}
            >
                <ContainerPadrao>
                    <PerfilUsuario
                        apelido={apelidoPerfilUsuario}
                        nomeImagemAvatar={nomeImagemAvatarPerfilUsuario} />
                </ContainerPadrao>
            </Modal>
        </Container>
    );
}

export default Ranking;
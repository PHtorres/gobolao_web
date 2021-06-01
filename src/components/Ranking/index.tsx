import React, { useCallback } from 'react';
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
    BlocoCentro,
    BlocoDireita,
    BlocoColocacao,
    TextoNumeroColocacao
} from './styles';

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
                        <BlocoEsquerda>
                            <TextoSecundario>{item.apelidoUsuario}</TextoSecundario>
                        </BlocoEsquerda>
                        <BlocoCentro>
                            <TextoSecundario>{item.pontos}</TextoSecundario>
                        </BlocoCentro>
                        <BlocoDireita>
                            <TextoSecundario>{item.quantidadePalpites}</TextoSecundario>
                        </BlocoDireita>
                    </ItemClassificacao>
                ))}
            </AreaClassificacao>
        </Container>
    );
}

export default Ranking;
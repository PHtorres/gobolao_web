import React, { useEffect, useState } from 'react';
import ContainerPadrao from '../../components/ContainerPadrao';
import Ranking from '../../components/Ranking';
import Titulo from '../../components/Titulo';
import IRanking from '../../models/IRanking';
import ServiceBolao from '../../services/ServiceBolao';

import { AreaRankings } from './styles';

const servicoBolao = new ServiceBolao();

const Rankings = () => {

    const [rankings, setRankings] = useState<IRanking[]>([]);

    useEffect(() => {
        const obterRankings = async () => {
            const { sucesso, conteudo } = await servicoBolao.ObterRankings();
            if (sucesso) {
                setRankings(conteudo);
            }
        }
        obterRankings();
    }, []);

    return (
        <ContainerPadrao>
            <Titulo>Rankings</Titulo>
            <AreaRankings>
                {rankings.map(ranking => <Ranking key={ranking.idBolao} ranking={ranking} />)}
            </AreaRankings>
        </ContainerPadrao>
    );
}

export default Rankings;
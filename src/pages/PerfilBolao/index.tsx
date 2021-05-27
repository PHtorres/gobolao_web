import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ContainerPadrao from '../../components/ContainerPadrao';
import ItemBolao from '../../components/ItemBolao';
import Ranking from '../../components/Ranking';
import Titulo from '../../components/Titulo';
import TituloSecundario from '../../components/TituloSecundario';
import IBolao from '../../models/IBolao';
import IRanking from '../../models/IRanking';
import ServiceBolao from '../../services/ServiceBolao';

// import { Container } from './styles';

const servicoBolao = new ServiceBolao();

interface PerfilBolaoParametros {
    idBolao: string;
}

const PerfilBolao = () => {

    const { params } = useRouteMatch<PerfilBolaoParametros>();
    const [bolao, setBolao] = useState<IBolao>({} as IBolao);
    const [ranking, setRanking] = useState<IRanking>({} as IRanking);

    useEffect(() => {
        const obterBolao = async () => {
            const { sucesso, conteudo } = await servicoBolao.ObterBolaoPorId(Number(params.idBolao));
            if (sucesso) {
                setBolao(conteudo);
            }
        }
        const obterRanking = async () => {
            const { sucesso, conteudo } = await servicoBolao.ObterRankingBolao(Number(params.idBolao));
            if (sucesso) {
                setRanking(conteudo);
            }
        }
        obterBolao();
        obterRanking();
    }, [params.idBolao]);

    return (
        <ContainerPadrao>
            <Titulo>{bolao.nome}</Titulo>
            <TituloSecundario>Perfil bolão</TituloSecundario>
            <ItemBolao bolao={bolao} />
            <TituloSecundario>Ranking</TituloSecundario>
            <Ranking ranking={ranking} />
        </ContainerPadrao>
    );
}

export default PerfilBolao;
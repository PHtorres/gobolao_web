import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import ItemSolicitacaoBolao from '../../components/ItemSolicitacaoBolao';
import Titulo from '../../components/Titulo';
import { IBolaoSolicitacao } from '../../models/IBolaoSolicitacao';
import ServiceBolaoSolicitacao from '../../services/ServiceBolaoSolicitacao';

//import { Container } from './styles';

const servicoBolaoSolicitacao = new ServiceBolaoSolicitacao();

interface SolicitacoesBolaoParametros {
    idBolao: string;
}

const SolicitacoesBolao = () => {

    const { params } = useRouteMatch<SolicitacoesBolaoParametros>();
    const [solicitacoes, setSolicitacoes] = useState<IBolaoSolicitacao[]>([]);

    useEffect(() => {
        const obterSolicitacoes = async () => {
            const { sucesso, conteudo } = await servicoBolaoSolicitacao.ObterSolicitacoesBolao(Number(params.idBolao));
            if (sucesso) {
                setSolicitacoes(conteudo);
            }
        }
        obterSolicitacoes();
    }, [params.idBolao]);

    return (
        <ContainerPadraoCentralizado>
            <Titulo>Solicitações do Bolão</Titulo>
            {solicitacoes.map(item => <ItemSolicitacaoBolao key={item.idSolicitacao} solicitacao={item} />)}
        </ContainerPadraoCentralizado>
    );
}

export default SolicitacoesBolao;
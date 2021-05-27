import React, { useEffect, useState } from 'react';
import BotaoLink from '../../components/BotaoLink';
import BotaoPrimarioLink from '../../components/BotaoPrimarioLink';
import CardBolao from '../../components/CardBolao';
import ContainerPadrao from '../../components/ContainerPadrao';
import Titulo from '../../components/Titulo';
import IBolao from '../../models/IBolao';
import ServiceBolao from '../../services/ServiceBolao';

import { Cabecalho, AreaBotoes, AreaBoloes } from './styles';

const servicoBolao = new ServiceBolao();

const Boloes = () => {

    const [boloes, setBoloes] = useState<IBolao[]>([]);

    useEffect(() => {
        const obterMeusBoloes = async () => {
            const { sucesso, conteudo } = await servicoBolao.ObterBoloesUsuario();
            if (sucesso) {
                setBoloes(conteudo);
            }
        }
        obterMeusBoloes();
    }, []);

    return (
        <ContainerPadrao>
            <Cabecalho>
                <Titulo>Meus Bolões</Titulo>
                <AreaBotoes>
                    <BotaoLink to="/boloes/pesquisa">Pesquisar bolões</BotaoLink>
                    <BotaoPrimarioLink to="/boloes/criar">Novo Bolão</BotaoPrimarioLink>
                </AreaBotoes>
            </Cabecalho>
            <AreaBoloes>
                {boloes.map(bolao => <CardBolao bolao={bolao} key={bolao.idBolao} />)}
            </AreaBoloes>
        </ContainerPadrao>
    );
}

export default Boloes;
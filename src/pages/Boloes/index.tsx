import React from 'react';
import BotaoLink from '../../components/BotaoLink';
import BotaoPrimario from '../../components/BotaoPrimario';
import ContainerPadrao from '../../components/ContainerPadrao';
import Titulo from '../../components/Titulo';

import { Cabecalho, AreaBotoes } from './styles';

const Boloes = () => {
    return (
        <ContainerPadrao>
            <Cabecalho>
                <Titulo>Meus Bolões</Titulo>
                <AreaBotoes>
                    <BotaoLink to="/boloes/pesquisa">Pesquisar bolões</BotaoLink>
                    <BotaoPrimario>Novo Bolão</BotaoPrimario>
                </AreaBotoes>
            </Cabecalho>
        </ContainerPadrao>
    );
}

export default Boloes;
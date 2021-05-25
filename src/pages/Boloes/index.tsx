import React from 'react';
import BotaoPrimario from '../../components/BotaoPrimario';
import ContainerPadrao from '../../components/ContainerPadrao';
import Titulo from '../../components/Titulo';

import { Cabecalho, AreaBotaoNovoBolao } from './styles';

const Boloes: React.FC = () => {
    return (
        <ContainerPadrao>
            <Cabecalho>
                <Titulo>Meus Bolões</Titulo>
                <AreaBotaoNovoBolao>
                    <BotaoPrimario>Novo Bolão</BotaoPrimario>
                </AreaBotaoNovoBolao>
            </Cabecalho>
        </ContainerPadrao>
    );
}

export default Boloes;
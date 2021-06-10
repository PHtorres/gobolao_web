import React from 'react';
import CardPadrao from '../../components/CardPadrao';
import ContainerPadrao from '../../components/ContainerPadrao';
import Texto from '../../components/Texto';
import Titulo from '../../components/Titulo';
import TituloSecundario from '../../components/TituloSecundario';

import { BlocoInfos } from './styles';

const Regulamento = () => {
    return (
        <ContainerPadrao>
            <Titulo>Regulamento</Titulo>
            <CardPadrao>
                <TituloSecundario>Conta</TituloSecundario>
                <BlocoInfos>
                    <Texto>- Sua conta é única e protegida.</Texto>
                    <Texto>- A qualquer momento você poderá alterar seu apelido ou e-mail.</Texto>
                </BlocoInfos>
            </CardPadrao>
            <CardPadrao>
                <TituloSecundario>Palpite</TituloSecundario>
                <BlocoInfos>
                    <Texto>- O seu palpite é único por jogo.</Texto>
                    <Texto>- Você pode fazer ou desfazer o seu palpite a qualquer momento até 2 minutos antes do início do jogo.</Texto>
                    <Texto>- A pontuação do seu palpite será calculada automaticamente de acordo com o resultado real do jogo.</Texto>
                </BlocoInfos>
            </CardPadrao>
            <CardPadrao>
                <TituloSecundario>Pontuação</TituloSecundario>
                <BlocoInfos>
                    <Texto>- O seu palpite pode resultar em 1 de 4 pontuações possíveis: 8, 4, 1 ou 0 pontos.</Texto>
                    <Texto>- Caso o seu palpite acerte o placar do jogo, você terá a conquista máxima de 8 pontos.</Texto>
                    <Texto>- Caso o seu palpite acerte o resultado do jogo, você conquistará 4 pontos.</Texto>
                    <Texto>- Caso o seu palpite não acerte o placar nem o resultado do jogo mas ficou apenas 1 gol do placar exato de um dos times, você conquistará 1 ponto.</Texto>
                    <Texto>- Caso o seu palpite não resulte em nenhum dos casos acima, não haverá pontuação.</Texto>
                </BlocoInfos>
            </CardPadrao>
        </ContainerPadrao>
    );
}

export default Regulamento;
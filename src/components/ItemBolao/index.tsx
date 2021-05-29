import React, { useState } from 'react';
import { useAlerta } from '../../hooks/HAlerta';
import {BiLock, BiGlobe} from 'react-icons/bi';
import IBolao from '../../models/IBolao';
import ServiceBolao from '../../services/ServiceBolao';
import ServiceBolaoSolicitacao from '../../services/ServiceBolaoSolicitacao';
import BotaoPrimario from '../BotaoPrimario';
import BotaoSecundario from '../BotaoSecundario';
import BotaoSucesso from '../BotaoSucesso';
import CardPadrao from '../CardPadrao';
import Texto from '../Texto';
import TextoDestaque from '../TextoDestaque';
import { Container, AreaBlocos, BlocoEsquerda, BlocoCentro, BlocoDireita, AreaBotoes } from './styles';
import Tema from '../../theme';

interface ItemBolaoProps {
    bolao: IBolao;
}

const servicoBolao = new ServiceBolao();
const servicoBolaoSolicitacao = new ServiceBolaoSolicitacao();

const ItemBolao: React.FC<ItemBolaoProps> = ({ bolao }) => {

    const { exibirMensagem, exibirMensagens } = useAlerta();
    const [solicitacaoEnviada, setSolicitacaoEnviada] = useState(false);
    const [participarEnviada, setParticiparEnviada] = useState(false);

    const participarBolao = async () => {
        const { sucesso, notificacoes } = await servicoBolao.ParticiparBolao(bolao.idBolao);
        if (sucesso) {
            setParticiparEnviada(true);
            exibirMensagem(`Bem-vindo ao Bolão ${bolao.nome}!`, 'sucesso');
            return;
        }

        exibirMensagens(notificacoes || [], 'erro');
    }

    const solicitarParticipar = async () => {
        const { sucesso, notificacoes } = await servicoBolaoSolicitacao.CriarSolicitacao(bolao.idBolao);
        if (sucesso) {
            setSolicitacaoEnviada(true);
            exibirMensagem(`Solicitação enviada!`, 'sucesso');
            return;
        }

        exibirMensagens(notificacoes || [], 'erro');
    }

    return (
        <CardPadrao>
            <Container>
                <AreaBlocos to={`/boloes/perfil/${bolao.idBolao}`}>
                    <BlocoEsquerda>
                        <Texto>Nome</Texto>
                        <TextoDestaque>{bolao.nome}</TextoDestaque>
                        {bolao.privacidade === 'Privado'?
                        <BiLock size={25} color={Tema.corTextoSubTitulo}/>:
                        <BiGlobe size={25} color={Tema.corTextoSubTitulo}/>}
                    </BlocoEsquerda>
                    <BlocoCentro>
                        <Texto>Campeonato</Texto>
                        <TextoDestaque>{bolao.nomeCampeonato}</TextoDestaque>
                    </BlocoCentro>
                    <BlocoDireita>
                        <Texto>Criador</Texto>
                        <TextoDestaque>{bolao.nomeCriador}</TextoDestaque>
                    </BlocoDireita>
                </AreaBlocos>
                <AreaBotoes>
                    {bolao.souCriadorBolao && <BotaoSucesso>Meu</BotaoSucesso>}
                    {bolao.paticipoBolao && !bolao.souCriadorBolao && <BotaoSucesso>Já participo</BotaoSucesso>}
                    {solicitacaoEnviada && <BotaoSucesso>Solicitação enviada!</BotaoSucesso>}
                    {participarEnviada && <BotaoSucesso>Bem-vindo!</BotaoSucesso>}
                    {!participarEnviada &&
                        !bolao.souCriadorBolao && !bolao.paticipoBolao &&
                        bolao.privacidade === 'Publico'
                        && <BotaoPrimario onClick={participarBolao}>Participar</BotaoPrimario>}
                    {!solicitacaoEnviada &&
                        !bolao.souCriadorBolao && !bolao.paticipoBolao &&
                        bolao.privacidade === 'Privado'
                        && <BotaoSecundario onClick={solicitarParticipar}>Solicitar participar</BotaoSecundario>}
                </AreaBotoes>
            </Container>
        </CardPadrao>
    );
}

export default ItemBolao;
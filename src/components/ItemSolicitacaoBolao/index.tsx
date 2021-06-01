import React, { useState } from 'react';
import { useAlerta } from '../../hooks/HAlerta';
import {
    Container,
    LinhaSolicitacao,
    AreaEsquerda,
    AreaDireita,
    LinhaBotoes
} from './styles';
import BotaoAlerta from '../BotaoAlerta';
import TextoDestaque from '../TextoDestaque';
import { IBolaoSolicitacao } from '../../models/IBolaoSolicitacao';
import ServiceBolaoSolicitacao from '../../services/ServiceBolaoSolicitacao';
import BotaoSucesso from '../BotaoSucesso';

const servicoBolaoSolicitacao = new ServiceBolaoSolicitacao();

interface IItemSolicitacaoBolaoProps {
    solicitacao: IBolaoSolicitacao;
}

const ItemSolicitacaoBolao: React.FC<IItemSolicitacaoBolaoProps> = ({ solicitacao }) => {

    const { exibirMensagem, exibirMensagens } = useAlerta();
    const [status, setStatus] = useState<'Aceita' | 'Recusada' | 'Aberta'>(solicitacao.status);

    const aceitarSolicitacao = async () => {
        const { sucesso, notificacoes } = await servicoBolaoSolicitacao.AceitarSolicitacao(solicitacao.idSolicitacao);

        if (sucesso) {
            setStatus('Aceita');
            exibirMensagem('Solicitaçao aceita com sucesso!', 'sucesso');
            return;
        }

        exibirMensagens(notificacoes || [], 'erro');
    }

    const recusarSolicitacao = async () => {
        const { sucesso, notificacoes } = await servicoBolaoSolicitacao.RecusarSolicitacao(solicitacao.idSolicitacao);

        if (sucesso) {
            setStatus('Recusada');
            exibirMensagem('Solicitaçao recusada com sucesso!', 'sucesso');
            return;
        }

        exibirMensagens(notificacoes || [], 'erro');
    }

    return (
        <Container>
            <LinhaSolicitacao>
                <AreaEsquerda>
                    <TextoDestaque>{solicitacao.apelidoUsuarioSolicitante}</TextoDestaque>
                </AreaEsquerda>
                <AreaDireita>
                    {status === 'Aceita' && <BotaoSucesso>{status}</BotaoSucesso>}
                    {status === 'Recusada' && <BotaoAlerta>{status}</BotaoAlerta>}
                </AreaDireita>
            </LinhaSolicitacao>
            {status === 'Aberta' &&
                <LinhaBotoes>
                    <BotaoSucesso onClick={aceitarSolicitacao}>Aceitar</BotaoSucesso>
                    <BotaoAlerta onClick={recusarSolicitacao}>Recusar</BotaoAlerta>
                </LinhaBotoes>
            }
        </Container>
    );
}

export default ItemSolicitacaoBolao;
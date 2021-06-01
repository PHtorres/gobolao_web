import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoSecundarioLink from '../../components/BotaoSecundarioLink';
import BotaoTerciario from '../../components/BotaoTerciario';
import ContainerPadrao from '../../components/ContainerPadrao';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import ItemBolao from '../../components/ItemBolao';
import Modal from '../../components/Modal';
import Ranking from '../../components/Ranking';
import Texto from '../../components/Texto';
import Titulo from '../../components/Titulo';
import TituloSecundario from '../../components/TituloSecundario';
import IBolao from '../../models/IBolao';
import IRanking from '../../models/IRanking';
import ServiceBolao from '../../services/ServiceBolao';

import { Cabecalho, AreaBotoesCabecalho } from './styles';

const servicoBolao = new ServiceBolao();

interface PerfilBolaoParametros {
    idBolao: string;
}

const PerfilBolao = () => {

    const { params } = useRouteMatch<PerfilBolaoParametros>();
    const [bolao, setBolao] = useState<IBolao>({} as IBolao);
    const [ranking, setRanking] = useState<IRanking>({} as IRanking);
    const [modalLinkCopiadoAberto, setModalLinkCopiadoAberto] = useState(false);

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

    const linkParaCompartilhar = () => {
        navigator.clipboard.writeText(`${process.env.REACT_APP_URL_SITE}/boloes/perfil/${bolao.idBolao}`);
        setModalLinkCopiadoAberto(true);
    }

    return (
        <ContainerPadrao>
            <Titulo>{bolao.nome}</Titulo>
            <Cabecalho>
                <TituloSecundario>Perfil bolão</TituloSecundario>
                <AreaBotoesCabecalho>
                    {
                        bolao.souCriadorBolao &&
                        <BotaoSecundarioLink to={`/boloes/solicitacoes/${bolao.idBolao}`}>
                            Solicitações
                        </BotaoSecundarioLink>
                    }
                    <BotaoTerciario onClick={linkParaCompartilhar}>Link para compartilhar</BotaoTerciario>
                </AreaBotoesCabecalho>
            </Cabecalho>
            <ItemBolao bolao={bolao} />
            <TituloSecundario>Ranking</TituloSecundario>
            <Ranking ranking={ranking} />
            <Modal
                fechar={() => setModalLinkCopiadoAberto(false)}
                isOpen={modalLinkCopiadoAberto}>
                <ContainerPadraoCentralizado>
                    <Titulo>Pronto!</Titulo>
                    <Texto>Link para compartilhar copiado.</Texto>
                    <Texto>Agora é só colar e enviar para a galera!</Texto>
                    <BotaoPrimario onClick={() => setModalLinkCopiadoAberto(false)}>Entendido</BotaoPrimario>
                </ContainerPadraoCentralizado>
            </Modal>
        </ContainerPadrao>
    );
}

export default PerfilBolao;
import React, { useState } from 'react';
import ServicePalpite from '../../services/ServicePalpite';
import AvatarTime from '../AvatarTime';
import { useAlerta } from '../../hooks/HAlerta';
import IPalpite from '../../models/IPalpite';
import Texto from '../Texto';
import {
    Container,
    LinhaResultado,
    LinhaPalpite,
    AreaEsquerda,
    AreaPlacar,
    AreaDireita,
    LinhaBotaoDesfazerPalpite
} from './styles';
import BotaoAlerta from '../BotaoAlerta';
import TextoDestaque from '../TextoDestaque';
import TituloSecundario from '../TituloSecundario';

const servicoPalpite = new ServicePalpite();

interface ItemPalpiteProps {
    palpite: IPalpite;
    modoPublico?:boolean;
}

const ItemPalpite: React.FC<ItemPalpiteProps> = ({ palpite, modoPublico }) => {

    const { exibirMensagem, exibirMensagens } = useAlerta();
    const [escondePalpite, setEscondePalpite] = useState(false);

    const desfazerPalpite = async () => {
        const { sucesso, notificacoes } = await servicoPalpite.ExcluirPalpite(palpite.id);

        if (sucesso) {
            esconderPalpite();
            exibirMensagem('Palpite desfeito com sucesso!', 'sucesso');
            return;
        }

        exibirMensagens(notificacoes || [], 'erro');
    }

    const esconderPalpite = () =>{
        setEscondePalpite(true);
    }

    if(escondePalpite) return <></>;

    return (
        <Container>
            {modoPublico && <TituloSecundario>{palpite.nomeUsuarioPalpite}</TituloSecundario>}
            <LinhaPalpite>
                <AreaEsquerda>
                    <AvatarTime nomeImagem={palpite.nomeImagemAvatarMandante} />
                    <Texto>{palpite.mandante}</Texto>
                </AreaEsquerda>
                <AreaPlacar>
                    <Texto>{palpite.placarMandantePalpite}</Texto>
                    <Texto>X</Texto>
                    <Texto>{palpite.placarVisitantePalpite}</Texto>
                </AreaPlacar>
                <AreaDireita>
                    <Texto>{palpite.visitante}</Texto>
                    <AvatarTime nomeImagem={palpite.nomeImagemAvatarVisitante} />
                </AreaDireita>
            </LinhaPalpite>
            <LinhaBotaoDesfazerPalpite>
                {!palpite.finalizado && !modoPublico &&
                    <BotaoAlerta onClick={desfazerPalpite}>Desfazer palpite</BotaoAlerta>}
            </LinhaBotaoDesfazerPalpite>
            {palpite.finalizado &&
                <LinhaResultado>
                    <TextoDestaque>
                        Placar real: {palpite.placarMandanteReal} x {palpite.placarVisitanteReal}
                    </TextoDestaque>
                    <TextoDestaque>
                        Pontos: {palpite.pontos}
                    </TextoDestaque>
                </LinhaResultado>}
        </Container>
    );
}

export default ItemPalpite;
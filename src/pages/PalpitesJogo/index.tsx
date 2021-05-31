import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import ItemPalpite from '../../components/ItemPalpite';
import Titulo from '../../components/Titulo';
import IPalpite from '../../models/IPalpite';
import ServicePalpite from '../../services/ServicePalpite';

import { ListaPalpites } from './styles';

const servicoPalpite = new ServicePalpite();

interface PalpitesJogoParametros {
    idJogo: string;
}

const PalpitesJogo = () => {

    const { params } = useRouteMatch<PalpitesJogoParametros>();
    const [palpitesJogo, setPalpitesJogo] = useState<IPalpite[]>([]);

    useEffect(() => {
        const obterPalpitesJogo = async () => {
            const { sucesso, conteudo } = await servicoPalpite.ObterPalpitesJogo(Number(params.idJogo));
            if (sucesso) setPalpitesJogo(conteudo);
        }
        obterPalpitesJogo();
    }, [params.idJogo]);

    return (
        <ContainerPadraoCentralizado>
            <Titulo>Palpites do jogo</Titulo>
            <ListaPalpites>
                {palpitesJogo.map(palpite => (
                    <ItemPalpite modoPublico key={palpite.id} palpite={palpite} />
                ))}
            </ListaPalpites>
        </ContainerPadraoCentralizado>
    );
}

export default PalpitesJogo;
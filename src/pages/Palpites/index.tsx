import React, { useEffect, useState } from 'react';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import ItemPalpite from '../../components/ItemPalpite';
import Titulo from '../../components/Titulo';
import IPalpite from '../../models/IPalpite';
import ServicePalpite from '../../services/ServicePalpite';

import { ListaPalpites } from './styles';

const servicoPalpite = new ServicePalpite();

const Palpites = () => {

    const [palpitesAbertos, setPalpitesAbertos] = useState<IPalpite[]>([]);
    const [palpitesFinalizados, setPalpitesFinalizados] = useState<IPalpite[]>([]);

    useEffect(() => {
        const obterPalpitesAbertos = async () => {
            const { sucesso, conteudo } = await servicoPalpite.ObterPalpitesAbertos();
            if (sucesso) setPalpitesAbertos(conteudo);
        }

        const obterPalpitesFinalizados = async () => {
            const { sucesso, conteudo } = await servicoPalpite.ObterPalpitesFinalizados();
            if (sucesso) setPalpitesFinalizados(conteudo);
        }

        obterPalpitesAbertos();
        obterPalpitesFinalizados();
    }, []);

    return (
        <ContainerPadraoCentralizado>
            {palpitesAbertos.length > 0 && <Titulo>Palpites abertos</Titulo>}        
            <ListaPalpites>
                {palpitesAbertos.map(palpite => <ItemPalpite key={palpite.id} palpite={palpite} />)}
            </ListaPalpites>
            {palpitesFinalizados.length > 0 && <Titulo>Palpites finalizados</Titulo>}
            <ListaPalpites>
                {palpitesFinalizados.map(palpite => <ItemPalpite key={palpite.id} palpite={palpite} />)}
            </ListaPalpites>
        </ContainerPadraoCentralizado>
    );
}

export default Palpites;
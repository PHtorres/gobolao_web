import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import CaixaTexto from '../../components/CaixaTexto';
import ContainerPadrao from '../../components/ContainerPadrao';
import ItemBolao from '../../components/ItemBolao';
import Titulo from '../../components/Titulo';
import TituloSecundario from '../../components/TituloSecundario';
import IBolao from '../../models/IBolao';
import ServiceBolao from '../../services/ServiceBolao';

import { ListaBoloes } from './styles';

const servicoBolao = new ServiceBolao();

const PesquisaBolao = () => {

    const [pesquisa, setPesquisa] = useState('');
    const [boloes, setBoloes] = useState<IBolao[]>([]);

    useEffect(() => {
        const pesquisarBoloes = async () => {
            if (pesquisa.length > 2) {
                const { conteudo, sucesso } = await servicoBolao.PesquisarBoloes(pesquisa);
                if (sucesso) {
                    setBoloes(conteudo);
                }
            }
        }
        pesquisarBoloes();
    }, [pesquisa]);

    return (
        <ContainerPadrao>
            <Titulo>Pesquisar bolões</Titulo>
            <CaixaTexto
                Icone={BiSearch}
                valor={pesquisa}
                label=""
                onChange={(e) => setPesquisa(e.target.value)} />
            <ListaBoloes>
                <TituloSecundario>Resultado:</TituloSecundario>
                {boloes.map(bolao => <ItemBolao key={bolao.idBolao} bolao={bolao} />)}
            </ListaBoloes>
        </ContainerPadrao>
    );
}

export default PesquisaBolao;
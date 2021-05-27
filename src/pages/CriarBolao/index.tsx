import React, { FormEvent, useEffect, useState } from 'react';
import { BiRun, BiNoEntry } from 'react-icons/bi';
import {GiSoccerBall} from 'react-icons/gi';
import BotaoPrimario from '../../components/BotaoPrimario';
import CaixaTexto from '../../components/CaixaTexto';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import Selecao from '../../components/Selecao';
import Titulo from '../../components/Titulo';
import { useAlerta } from '../../hooks/HAlerta';
import ICampeonato from '../../models/ICampeonato';
import ServiceBolao from '../../services/ServiceBolao';
import ServiceCampeonato from '../../services/ServiceCampeonato';

import { Formulario } from './styles';

const servicoCampeonato = new ServiceCampeonato();
const servicoBolao = new ServiceBolao();

const opcoesPrivacidade = [
    {
        id:1,
        texto:'Privado'
    },
    {
        id:2,
        texto:'Publico'
    }
]

const CriarBolao = () => {

    const { exibirMensagem, exibirMensagens } = useAlerta();
    const [campeonatos, setCampeonatos] = useState<ICampeonato[]>([]);
    const [nome, setNome] = useState('');
    const [idCampeonato, setIdCampeonato] = useState(0);
    const [privacidade, setPrivacidade] = useState<1 | 2>(1);

    const obterCampeonatos = async () => {
        const { conteudo, sucesso } = await servicoCampeonato.ObterCampeonatos();
        if (sucesso) {
            setCampeonatos(conteudo);
            setIdCampeonato(conteudo[0].id);
        }
    }
    useEffect(() => {
        obterCampeonatos();
    }, []);

    const criarBolao = async (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        const { notificacoes, sucesso } = await servicoBolao.CriarBolao({
            nome,
            idCampeonato,
            privacidade
        });

        if (sucesso) {
            exibirMensagem('Bolão criado com sucesso.', 'sucesso');
            return;
        }

        exibirMensagens(notificacoes || [], 'erro');
    }

    return (
        <ContainerPadraoCentralizado>
            <Titulo>Criar bolão</Titulo>
            <Formulario onSubmit={criarBolao}>
                <CaixaTexto
                    Icone={GiSoccerBall}
                    label="Nome"
                    valor={nome}
                    onChange={(e) => setNome(e.target.value)} />
                    
                <Selecao
                    Icone={BiRun}
                    label="Campeonato"
                    selecionado={idCampeonato}
                    selecionarOpcao={setIdCampeonato}
                    opcoes={campeonatos.map(item => {
                        return {
                            id: item.id,
                            texto: item.nome
                        }
                    })} />

                <Selecao
                    Icone={BiNoEntry}
                    label="Privacidade"
                    selecionado={privacidade}
                    selecionarOpcao={(selecionado) => setPrivacidade(selecionado as 1|2)}
                    opcoes={opcoesPrivacidade} />

                <BotaoPrimario>Criar bolão</BotaoPrimario>
            </Formulario>
        </ContainerPadraoCentralizado>
    );
}

export default CriarBolao;
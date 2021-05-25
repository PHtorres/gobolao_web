import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { BiAward, BiFile, BiFlag, BiRun, BiTime } from 'react-icons/bi';
import BotaoPrimario from '../../components/BotaoPrimario';
import CaixaArquivo from '../../components/CaixaArquivo';
import CaixaTexto from '../../components/CaixaTexto';
import ContainerPadrao from '../../components/ContainerPadrao';
import Selecao from '../../components/Selecao';
import Titulo from '../../components/Titulo';
import { useAlerta } from '../../hooks/HAlerta';
import ICampeonato from '../../models/ICampeonato';
import ITime from '../../models/ITime';
import apiNowIMG from '../../services/ApiNowIMG';
import ServiceCampeonato from '../../services/ServiceCampeonato';
import ServiceJogo from '../../services/ServiceJogo';
import ServiceTime from '../../services/ServiceTime';

import { Formulario } from './styles';

interface RespostaAPINowIMG {
  notificacoes: string[];
  sucesso: boolean;
  nomeImagem: string;
}

const servicoTime = new ServiceTime();
const servicoJogo = new ServiceJogo();
const servicoCampeonato = new ServiceCampeonato();

const PainelAdministrativo: React.FC = () => {

  const { exibirMensagem, exibirMensagens } = useAlerta();
  const [arquivo, setArquivo] = useState<File | null>();
  const [nome, setNome] = useState('');
  const [times, setTimes] = useState<ITime[]>([]);
  const [campeonatos, setCampeonatos] = useState<ICampeonato[]>([]);
  const [idMandante, setIdMandante] = useState(0);
  const [idVisitante, setIdVisitante] = useState(0);
  const [dataHora, setDataHora] = useState('');
  const [idCampeonato, setIdCampeonato] = useState(0);
  const [fase, setFase] = useState('');

  const criarTime = async (evento: FormEvent<HTMLFormElement>) => {

    evento.preventDefault();

    if (arquivo) {
      const formData = new FormData();
      formData.append('imagem', arquivo);
      const { data } = await apiNowIMG.post<RespostaAPINowIMG>('imagem/upload', formData);
      if (data) {
        if (data.sucesso) {
          const { sucesso, notificacoes } = await servicoTime.CriarTime(nome, data.nomeImagem);
          if (sucesso) {
            exibirMensagem('Time criado com sucesso!', 'sucesso');
            return;
          }

          exibirMensagens(notificacoes || [], 'erro');
        }
      }
    }
  }

  const aoSelecionarArquivo = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setArquivo(e.target.files[0]);
    }
  }

  const obterTimes = async () => {
    const { conteudo, sucesso } = await servicoTime.ObterTimes();
    if (sucesso) {
      setTimes(conteudo);
    }
  }

  const obterCampeonatos = async () => {
    const { conteudo, sucesso } = await servicoCampeonato.ObterCampeonatos();
    if (sucesso) {
      setCampeonatos(conteudo);
    }
  }

  useEffect(() => {
    obterTimes();
    obterCampeonatos();
  }, []);

  const criarJogo = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const { notificacoes, sucesso } = await servicoJogo.CriarJogo({
      dataHora,
      fase,
      idCampeonato,
      idMandante,
      idVisitante
    });

    if (sucesso) {
      exibirMensagem('Jogo criado com sucesso.', 'sucesso');
      return;
    }

    exibirMensagens(notificacoes, 'erro');
  }

  return (
    <ContainerPadrao>
      <Titulo>Criar novo time</Titulo>
      <Formulario onSubmit={criarTime}>
        <CaixaTexto Icone={BiFlag} label="Time" valor={nome} onChange={(e) => setNome(e.target.value)} />
        <CaixaArquivo Icone={BiFile} type="file" label="Avatar" onChange={aoSelecionarArquivo} />
        <BotaoPrimario>Criar time</BotaoPrimario>
      </Formulario>
      <Titulo>Criar jogo</Titulo>
      <Formulario onSubmit={criarJogo}>
        <Selecao
          Icone={BiRun}
          label="Campeonato"
          selecionado={0}
          selecionarOpcao={setIdCampeonato}
          opcoes={campeonatos.map(item => {
            return {
              id: item.id,
              texto: item.nome
            }
          })} />
        <Selecao
          Icone={BiFlag}
          label="Mandante"
          selecionado={0}
          selecionarOpcao={setIdMandante}
          opcoes={times.map(item => {
            return {
              id: item.id,
              texto: item.nome
            }
          })} />
        <Selecao
          Icone={BiFlag}
          label="Visitante"
          selecionado={0}
          selecionarOpcao={setIdVisitante}
          opcoes={times.map(item => {
            return {
              id: item.id,
              texto: item.nome
            }
          })} />
        <CaixaTexto
          Icone={BiTime}
          label="Data e hora"
          valor={dataHora}
          onChange={(e) => setDataHora(e.target.value)}
          type="datetime-local" />

        <CaixaTexto
          Icone={BiAward}
          label="Fase"
          valor={fase}
          onChange={(e) => setFase(e.target.value)} />
        <BotaoPrimario>Criar jogo</BotaoPrimario>
      </Formulario>
    </ContainerPadrao>
  );
}

export default PainelAdministrativo;
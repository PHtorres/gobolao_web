import React, { useEffect, useState } from 'react';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import ListaJogos from '../../components/ListaJogos';
import Titulo from '../../components/Titulo';
import IJogo from '../../models/IJogo';
import ServiceJogo from '../../services/ServiceJogo';


const servicoJogo = new ServiceJogo();

const Home: React.FC = () => {

  const [jogosDeHoje, setJogosDeHoje] = useState<IJogo[]>([]);
  const [jogosDeAmanha, setJogosDeAmanha] = useState<IJogo[]>([]);
  const [todosJogos, setTodosJogos] = useState<IJogo[]>([]);

  useEffect(() => {
    const obterJogos = async () => {
      const resultadoJogosDeHoje = await servicoJogo.ObterJogosDeHoje();
      const resultadoJogosDeAmanha = await servicoJogo.ObterJogosDeAmanha();
      const resultadoTodosJogos = await servicoJogo.ObterJogos();

      if (resultadoJogosDeHoje.sucesso) {
        setJogosDeHoje(resultadoJogosDeHoje.conteudo);
      }

      if (resultadoJogosDeAmanha.sucesso) {
        setJogosDeAmanha(resultadoJogosDeAmanha.conteudo);
      }

      if (resultadoTodosJogos.sucesso) {
        setTodosJogos(resultadoTodosJogos.conteudo);
      }
    }
    obterJogos();
  }, []);

  return (
    <ContainerPadraoCentralizado>
      <Titulo>Jogos para palpitar</Titulo>
      {jogosDeHoje.length > 0 &&
        <Titulo>Jogos de hoje</Titulo>}
      <ListaJogos jogos={jogosDeHoje} />
      {jogosDeAmanha.length > 0 &&
        <Titulo>Jogos de amanhã</Titulo>}
      <ListaJogos jogos={jogosDeAmanha} />
      <Titulo>Todos</Titulo>
      <ListaJogos jogos={todosJogos} />
    </ContainerPadraoCentralizado>
  );
}

export default Home;
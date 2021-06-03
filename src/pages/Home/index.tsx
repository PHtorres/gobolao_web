import React, { useEffect, useState } from 'react';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import ListaJogos from '../../components/ListaJogos';
import Titulo from '../../components/Titulo';
import { useSugestao } from '../../hooks/HSugestao';
import { useUsuario } from '../../hooks/HUsuario';
import IJogo from '../../models/IJogo';
import ServiceBolao from '../../services/ServiceBolao';
import ServiceJogo from '../../services/ServiceJogo';


const servicoJogo = new ServiceJogo();
const servicoBolao = new ServiceBolao();

const Home = () => {

  const { enviarSugestao } = useSugestao();
  const {usuario} = useUsuario();
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

    const checarAvatar = () => {
      if(usuario.nomeImagemAvatar.length === 0){
        enviarSugestao({
          titulo: `Tá sem foto? Aí não, ${usuario.apelido}!`,
          descricao: 'Escolha uma foto pro seu avatar!',
          rotaConfirma: '/me/avatar',
          textoConfirma: 'Escolher avatar',
          textoCancela: 'Depois'
        });
      }
    }

    const checarBoloes = async () => {
      const { sucesso, conteudo } = await servicoBolao.ObterBoloesUsuario();
      if (sucesso) {
        if (conteudo.length === 0) {
          enviarSugestao({
            titulo: 'Você ainda nao possui bolões :(',
            descricao: 'Pesquise ou crie seu próprio bolão e compartilhe com amigos!',
            rotaConfirma: '/boloes',
            textoConfirma: 'Pesquisar ou criar bolão',
            textoCancela: 'Depois'
          });

          return;
        }

        checarAvatar();
      }
    };

    obterJogos();
    checarBoloes();
  }, [enviarSugestao, usuario]);

  return (
    <ContainerPadraoCentralizado>
      {jogosDeHoje.length > 0 &&
        <Titulo>Jogos de hoje</Titulo>}
      <ListaJogos jogos={jogosDeHoje} />
      {jogosDeAmanha.length > 0 &&
        <Titulo>Jogos de amanhã</Titulo>}
      <ListaJogos jogos={jogosDeAmanha} />
      <Titulo>Todos os jogos</Titulo>
      <ListaJogos jogos={todosJogos} />
    </ContainerPadraoCentralizado>
  );
}

export default Home;
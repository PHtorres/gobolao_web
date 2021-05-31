import React, { useEffect, useState } from 'react';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import ListaJogos from '../../components/ListaJogos';
import Titulo from '../../components/Titulo';
import IJogo from '../../models/IJogo';
import ServiceJogo from '../../services/ServiceJogo';


const servicoJogo = new ServiceJogo();

const Jogos = () => {

  const [todosJogos, setTodosJogos] = useState<IJogo[]>([]);

  useEffect(() => {
    const obterJogos = async () => {
      const {sucesso, conteudo} = await servicoJogo.ObterJogos();
      if (sucesso) {
        setTodosJogos(conteudo);
      }
    }
    obterJogos();
  }, []);

  return (
    <ContainerPadraoCentralizado>
      <Titulo>Jogos</Titulo>
      <ListaJogos jogos={todosJogos} />
    </ContainerPadraoCentralizado>
  );
}

export default Jogos;
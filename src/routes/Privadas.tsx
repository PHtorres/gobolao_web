import React from "react";
import { Switch, Route } from "react-router-dom";
import Boloes from "../pages/Boloes";
import ContaUsuario from "../pages/ContaUsuario";
import CriarBolao from "../pages/CriarBolao";
import EnviarAvatarUsuario from "../pages/EnviarAvatarUsuario";
import Home from "../pages/Home";
import Jogos from "../pages/Jogos";
import Palpites from "../pages/Palpites";
import PalpitesJogo from "../pages/PalpitesJogo";
import PerfilBolao from "../pages/PerfilBolao";
import PesquisaBolao from "../pages/PesquisaBolao";
import Rankings from "../pages/Rankings";
import Regulamento from "../pages/Regulamento";
import SolicitacoesBolao from "../pages/SolicitacoesBolao";

export const privateRoutes = [
  <Route path="/" exact component={Home} />,
  <Route path="/jogos" component={Jogos} />,
  <Route path="/me/boloes" exact component={Boloes} />,
  <Route path="/boloes/pesquisa" component={PesquisaBolao} />,
  <Route path="/boloes/criar" component={CriarBolao} />,
  <Route path="/boloes/perfil/:idBolao+" component={PerfilBolao} />,
  <Route path="/boloes/solicitacoes/:idBolao+" component={SolicitacoesBolao} />,
  <Route path="/me/palpites" exact component={Palpites} />,
  <Route path="/palpites/jogo/:idJogo+" component={PalpitesJogo} />,
  <Route path="/me/rankings" component={Rankings} />,
  <Route path="/me/avatar" component={EnviarAvatarUsuario} />,
  <Route path="/me/conta" component={ContaUsuario} />,
  <Route path="/regulamento" component={Regulamento} />,
  <Route path="*" component={Home} />,
];

const Privadas: React.FC = () => {
  return <Switch>{privateRoutes.map((route) => route)}</Switch>;
};

export default Privadas;

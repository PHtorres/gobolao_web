import React from "react";
import { Switch, Route } from "react-router-dom";
import PainelAdministrativo from "../pages/PainelAdministrativo";
import { privateRoutes } from "./Privadas";

const adminRoutes = [
  <Route path="/admin" exact component={PainelAdministrativo} />,
];

const Admin: React.FC = () => {
  const routesToRender = [...adminRoutes, ...privateRoutes];
  return <Switch>{routesToRender.map((route) => route)}</Switch>;
};

export default Admin;

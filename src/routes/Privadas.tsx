import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Boloes from '../pages/Boloes';
import CriarBolao from '../pages/CriarBolao';
import Home from '../pages/Home';
import PerfilBolao from '../pages/PerfilBolao';
import PesquisaBolao from '../pages/PesquisaBolao';

const Privadas: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/boloes" exact component={Boloes} />
            <Route path="/boloes/pesquisa" component={PesquisaBolao} />
            <Route path="/boloes/criar" component={CriarBolao} />
            <Route path="/boloes/perfil/:idBolao+" component={PerfilBolao}/>
            <Route path="*" component={Home}/>
        </Switch>
    )
}

export default Privadas;
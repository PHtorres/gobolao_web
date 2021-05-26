import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Boloes from '../pages/Boloes';
import Home from '../pages/Home';
import PesquisaBolao from '../pages/PesquisaBolao';

const Privadas: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/boloes" exact component={Boloes} />
            <Route path="/boloes/pesquisa" component={PesquisaBolao} />
            <Route path="*" component={Home}/>
        </Switch>
    )
}

export default Privadas;
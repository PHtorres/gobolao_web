import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Boloes from '../pages/Boloes';
import CriarBolao from '../pages/CriarBolao';
import Home from '../pages/Home';
import Jogos from '../pages/Jogos';
import Palpites from '../pages/Palpites';
import PalpitesJogo from '../pages/PalpitesJogo';
import PerfilBolao from '../pages/PerfilBolao';
import PesquisaBolao from '../pages/PesquisaBolao';
import Rankings from '../pages/Rankings';

const Privadas: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/jogos" component={Jogos} />
            <Route path="/boloes" exact component={Boloes} />
            <Route path="/boloes/pesquisa" component={PesquisaBolao} />
            <Route path="/boloes/criar" component={CriarBolao} />
            <Route path="/boloes/perfil/:idBolao+" component={PerfilBolao}/>
            <Route path="/palpites" exact component={Palpites} />
            <Route path="/palpites/jogo/:idJogo+" component={PalpitesJogo}/>
            <Route path="/rankings" component={Rankings} />
            <Route path="*" component={Home}/>
        </Switch>
    )
}

export default Privadas;
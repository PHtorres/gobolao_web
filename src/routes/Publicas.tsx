import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CriarConta from '../pages/CriarConta';
import Login from '../pages/Login';

const Publicas: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/conta/criar" exact component={CriarConta} />
            <Route path="*" component={Login}/>
        </Switch>
    )
}

export default Publicas;
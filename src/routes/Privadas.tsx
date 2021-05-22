import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

const Privadas: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={Home}/>
        </Switch>
    )
}

export default Privadas;
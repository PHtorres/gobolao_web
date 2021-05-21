import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

const Publicas: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="*" component={Login}/>
        </Switch>
    )
}

export default Publicas;
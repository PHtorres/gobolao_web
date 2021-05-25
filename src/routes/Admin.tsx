import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PainelAdministrativo from '../pages/PainelAdministrativo';

const Admin: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={PainelAdministrativo} />
            <Route path="*" component={PainelAdministrativo}/>
        </Switch>
    )
}

export default Admin;
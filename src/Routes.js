import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Body/Login/Login';

import Layout from './Layout';

export default function Routes() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/home" component={Layout} />
            </Switch>
        </main>
    )
}
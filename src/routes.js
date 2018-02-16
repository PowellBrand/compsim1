import React from 'react';
import { Switch, Route } from 'react-router-dom';


export default (
    <Switch>       
        <Route exact path = '/' component={home} />
        <Route path = '/binlist' component={binlist} />
        <Route path = '/inventory' component={inventory} />
        <Route path = '/addToBin' component={inventory} />
    </Switch>
)
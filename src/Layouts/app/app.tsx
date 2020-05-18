import React from "react";
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../components/dashboard/dashboard';
import Users from '../../components/users/users';
import Header from '../../components/header/header';
import Shops from '../../components/shops';
import NotFound from '../../components/NotFound'

function AppLayout() {
   
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/dashboard' component={Dashboard} />
                <Route  path='/dashboard/users' component={Users} />
                <Route  path='/dashboard/shops' component={Shops} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>

    )
}

export default AppLayout

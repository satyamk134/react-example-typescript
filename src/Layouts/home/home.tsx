import React from "react";
import Login from '../../components/login/Login'
import Header from '../../components/header/header'
import {RegisterComp} from '../../components/Register'
import { Route, Switch } from 'react-router-dom';
function HomeLayout() {
   
   
    return (
        <div>
            
            <Header />
            <Switch>
                {/* <Route exact path='/' component={login} /> */}
                <Route exact path='/' component={Login} />
                <Route exact path='/login' component={Login} />
                <Route path="/login/?id" component={Login} />
                <Route path='/login/register'  component={RegisterComp} />
            </Switch>
        </div>
        

    )
}

export default HomeLayout;

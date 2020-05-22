import React ,{useEffect}from "react";
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../../components/dashboard/dashboard';
import Users from '../../components/users/users';
import Header from '../../components/header/header';
import Shops from '../../components/shops';
import NotFound from '../../components/NotFound'
import { TloginStatus } from '../../actions'

function AppLayout({loggedIn}:any) {

    useEffect( ()=>{
    },[])
   
    if(loggedIn === true){
        console.log("logged in is true######")
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
    }else{
        return <Redirect to="/"></Redirect>
    }
    
}

interface IUserStatus{
    userStatus:TloginStatus
}

const mapStateToprops = (state:IUserStatus) => {
    console.log("inside app layout -----------======>",state.userStatus)
    return ({loggedIn:state.userStatus.loginStatus })
}

export default connect(mapStateToprops,null)(AppLayout)



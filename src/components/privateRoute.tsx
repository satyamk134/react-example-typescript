import React  from 'react'
import { connect } from 'react-redux'
import { setUserLoginStatus } from '../actions/index'
import {Route,Redirect} from "react-router-dom";


const checkIfTokenValid = () => {
    console.log("came to check token",localStorage.getItem('token'))
    if(localStorage.getItem('token') === 'undefined' || !localStorage.getItem('token') )
    {
      
      return false;
    }else{
      
      return true;
    }
}
const PrivateRoute = ({component:Component,bordcastLogin, ...rest}:any)=>{
   
    if(checkIfTokenValid() === true){
      console.log("token is valid")
        bordcastLogin(false);
    } else{
      console.log("toekn is invalid")
    }
    return <Route
    {...rest}
    render={({ location,props }:any) =>
    checkIfTokenValid() === true? (

        <Component props={props}/>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />
      )
    }
  />
}





const mapDispatchToProps = (dispatch:any) => {
    
    return ({
        bordcastLogin: (status:boolean) => dispatch(setUserLoginStatus({loginStatus:status}))
})}

export default connect(
   null,mapDispatchToProps
)(PrivateRoute)

import React  from 'react'
import {Route,Redirect} from "react-router-dom";

const checkIfRoleIsCustomer = ()=>{
    console.log("came to check role")
    //let userInfo = JSON.parse(localStorage.getItem('userInfo') === null?"":localStorage.getItem('userInfo'));
    let userInfoCopy = (localStorage.getItem('userInfo'));
    let userInfo = JSON.parse(userInfoCopy === null?"":userInfoCopy);
    if(userInfo.role === 'customer'){
        return true
    }
    localStorage.removeItem('token');

    return false
}

const ProductRouteProtector = ({children,...rest}:any)=>{
   
   return (
    <Route
      {...rest}
      render={({ location }) =>
      checkIfRoleIsCustomer() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}




export default ProductRouteProtector

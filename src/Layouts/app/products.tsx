import React ,{ useEffect}from "react";
import { Route, Switch,Redirect, } from 'react-router-dom';
import { connect } from 'react-redux'
import ProductList from '../../components/ProductList'
import Header from '../../components/header/header';
import  ProductRouteProtecter from '../../components/ProductRouteProtecter'
import ProductsContainer from '../../containers/products'
import { TloginStatus } from '../../actions'
function Products({loggedIn}:any) {

    useEffect( ()=>{
    },[])

    if(loggedIn == true){
        return (
            <div style={{flexGrow: 1}}>
                <Header />
               
                <Switch>
                    <ProductRouteProtecter>
                        <Route exact path='/products' component={ProductsContainer} />
                        <Route exact path='/products/1' component={ProductsContainer} />
                        <Route exact path='/products/2' component={ProductsContainer} />
                    </ProductRouteProtecter>
                   
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
    console.log("inside products -----------======>",state.userStatus)
    return ({loggedIn:state.userStatus.loginStatus })
}



export default connect(mapStateToprops,null)(Products)

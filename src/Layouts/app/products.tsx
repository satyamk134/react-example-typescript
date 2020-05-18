import React from "react";
import { Route, Switch } from 'react-router-dom';

import ProductList from '../../components/ProductList'
import Header from '../../components/header/header';
import  ProductRouteProtecter from '../../components/ProductRouteProtecter'
import product from '../../components/product'

function Products() {
   
    return (
        <div style={{flexGrow: 1}}>
            <Header />
           
            <Switch>
                <ProductRouteProtecter>
                    <Route exact path='/products' component={ProductList} />
                    <Route exact path='/products/1' component={product} />
                    <Route exact path='/products/2' component={product} />
                </ProductRouteProtecter>
               
            </Switch>
        </div>

    )
}



export default Products

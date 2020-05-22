import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import  ProductList from'../components/ProductList';
import {fetchProductApiAction} from '../reducers/models'
import {getProdcuts,  } from '../actions';

export type Tproducts = {
    products:{data:Array<any>}
} 

const ProductsContainer = ({products,fetchProds}:any)=>{
    return <ProductList fetchedProducts={products} fetchProds={fetchProds}/>
}

const mapStateToProps = (state:Tproducts) => {
    console.log("products are",state.products)
    return ({products:state.products.data})
} 

const mapDispatchToProps =(dispatch:Dispatch<fetchProductApiAction>) => {
    
    return ({fetchProds:()=>dispatch(getProdcuts())})
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);


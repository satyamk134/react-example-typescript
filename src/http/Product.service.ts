import {Api} from './axios';


const ProductService = {
    
    getProducts : ()=>{
        const api  = new Api();
        return  api.getRequest({path:'/product/',data:{}})
    },


}



export default ProductService

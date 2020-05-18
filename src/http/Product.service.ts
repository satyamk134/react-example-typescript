import Api from './axios';

const api = new Api();
const ProductService = {
    getProducts : ()=>{
        return  api.getRequest({path:'/product/',data:{}})
    },


}



export default ProductService

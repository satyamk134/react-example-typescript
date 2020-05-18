export interface IProduct {
    category: string,
    productName: string,
    sellerId: string,
    images:Array<{link:String}>,
    sellingPrice:number
}

export interface IProducts {
    /**axios @response is inside data */
    data:{
        data:Array<IProduct>
    }
    
}

export interface ILoginRes{
    data:{
        role:String,
        lastName:String,
        emailId:String,
        token:String
        
    }
}


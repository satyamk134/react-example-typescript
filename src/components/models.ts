export interface IProduct {
    category: string,
    productName: string
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


export interface IUserInfo{
    role:String
    lastName:String
    emailId:String
    token:string
}

export interface ILoginRes{
    data:IUserInfo
}


export interface feature {
    name: string;
    _id: string;
    imageUrl: string
    price? : number,
    slug : string,
    quantity? : number,
    stock : number
}

export interface product{
    name: string;
    _id: string;
    images?: any;
    price : number;
    description: string;
    slug: string;
    category: string;
    stock: number
}

export interface searchparams{
    price?:string;
    date?:string;
    category?:string;
    search?:string
}

export interface cart{
    cartItems: Array<feature>;
    totalCartItems: number;
    subTotal: number;
}

export interface inputProps{
    email: string;
    password: string;
    username?: string;
}

export interface user{
    username: string;
    uid: string;
    email: string;
    contactShippingInfo: infoData;
    notify: boolean;
    toastContent: {header?: string, text: string, imageUrl?: string};
    wishlist: feature[]
}

export interface infoData{
    contact: string;
    alternative: string;
    firstName: string;
    lastName: string;
    state: string;
    address: string;
}

export interface orderInfo{
    orderId: string;
    uid: string;
    orderDate: string;
    order: feature[];
    shippingInformation: infoData;
    total?: number;
    subTotal?: number;
    deliveryFee?: number;
    deliveryMethod?: string;
}
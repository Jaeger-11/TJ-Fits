export interface feature {
    name: string;
    _id: string;
    imageUrl: string
    price? : number,
    slug? : string,
    quantity? : number
}

export interface product{
    name: string;
    _id: string;
    images?: any;
    price : number;
    description: string;
    slug: string;
    category: string;
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
    toastContent: {header?: string, text: string, imageUrl?: string}
}

export interface infoData{
    contact: string;
    alternative: string;
    firstName: string;
    lastName: string;
    state: string;
    address: string;
}
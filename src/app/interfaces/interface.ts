export interface feature {
    name: string;
    _id: string;
    imageUrl: string
    price? : number,
    slug? : string
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
}

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


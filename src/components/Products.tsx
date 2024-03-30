import { feature } from "../app/interfaces/interface";
import Product from "./Product";
const ProductsData = (data:{data:feature[]}) => {
    return (
        data.data.map((product:feature)=> {
            const {name, _id, imageUrl, price, slug} = product;
            return <Product key={_id} name={name} _id={_id} imageUrl={imageUrl} price={price} slug={slug}/>
        })
    )
}

export default ProductsData;
import { feature } from "../app/interfaces/interface";
import Product from "./Product";
const ProductsData = (data:{data:feature[]}) => {
    return (
        data.data.length > 0 ? 
        data.data.map((product:feature)=> {
            const {name, _id, imageUrl, price, slug} = product;
            return <Product key={_id} name={name} _id={_id} imageUrl={imageUrl} price={price} slug={slug}/>
        }) : 
        <div className="styrene400 my-8 px-4 w-full">
            <p className=" mx-auto w-max md:px-8">No Product Matches Your Search and Filter.</p>
        </div>
    )
}

export default ProductsData;
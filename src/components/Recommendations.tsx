import { feature } from "@/app/interfaces/interface";
import { getAllProducts } from "@/app/sanity-utils";
import Product from "./Product";

const Recommendations = async () => {
    function selectRandomProducts(array:feature[], count:number) {
        // const filteredArray = array
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
        }
        return shuffled.slice(0, count); 
    }
    
    const products = await getAllProducts({});
    const random = selectRandomProducts(products, 4)
      
  return (
    <div className="lg:w-4/5 mx-auto mt-4 lg:mt-12">
        <h2 className="my-4 font-semibold font-lg uppercase styreneBold">Related products</h2>
        <section className="smd:grid-cols-3 lg:grid-cols-4 grid grid-cols-2 gap-4">
            {random && random.map((item:feature) => {
                const { imageUrl, name, price, _id, slug } = item
                return <Product key={_id} imageUrl={imageUrl} name={name} price={price} _id={_id} slug={slug} />
            })}
        </section>
    </div>
  )
}

export default Recommendations
import { getNewArrivals } from "@/app/sanity-utils";
import { feature } from "@/app/interfaces/interface";
import Product from "@/components/Product";
import Back from "@/components/Back";

export default async function NewArrivals() {
    const newArrivals = await getNewArrivals();
    return (
    <div className="p-4">
        <section className="lg:w-4/5 mx-auto">
            <h1 className="text-center w-full uppercase lg:text-xl styrene400 mb-4 ">New Arrivals</h1>
            
            <section className="flex gap-2">
                <main className="flex-1">
                    <section className="lg:grid-cols-5 grid grid-cols-2 gap-4 ">
                        {newArrivals.map((product:feature)=> {
                            const {name, _id, imageUrl, price, slug} = product;
                            return <Product key={_id} name={name} _id={_id} imageUrl={imageUrl} price={price} slug={slug}/>
                        })}
                    </section>
                </main>
            </section>
        </section>
    </div>
    )
}
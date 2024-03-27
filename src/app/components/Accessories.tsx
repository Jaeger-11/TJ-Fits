import { getAccessories } from "../sanity-utils";
import { feature } from "../interfaces/interface";
import Image from "next/image";
const Accessories = async () => {
    const data = await getAccessories();
    console.log(data)
  return (
    <section className="p-4 lg:py-8">
        <div className="md:w-4/5 mx-auto">
            <h3 className="capitalize styreneBold">Check out our Accessories</h3>
            <section className="grid lg:grid-cols-5 gap-8">
                {data.slice(0,5).map((accessory: feature) => {
                    const {name, price, imageUrl, _id} = accessory;
                    return (
                        <div key={_id} className="my-8 opacity-80 lg:max-w-xs hover:opacity-100 cursor-pointer">
                            <Image 
                            src={imageUrl}
                            alt={name}
                            width={300}
                            height={300}
                            className="w-full aspect-square object-cover object-center"
                            />
                            <div className="mt-2">
                                <p className="capitalize text-sm">{name}</p>
                                <h4 className=" font-bold text-sm">N{price}</h4>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    </section>
  )
}

export default Accessories;
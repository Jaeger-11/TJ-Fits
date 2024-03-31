import { getAccessories, getFeatured, currencyFormat } from "../app/sanity-utils";
import { feature } from "../app/interfaces/interface";
import Image from "next/image";
import Link from "next/link";
const Accessories = async () => {
    const data = await getAccessories();
    const extra = await getFeatured();
  return (
    <>
     <section className="p-4 mt-8 lg:mt-0 lg:py-8">
        <div className="md:w-4/5 mx-auto">
            <h3 className="capitalize styreneBold">Check out our Accessories</h3>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 my-8">
                {data.slice(0,5).map((accessory: feature) => {
                    const {name, price, imageUrl, _id, slug} = accessory;
                    return (
                        <Link href={`/product/${slug}`} key={_id} className="opacity-100 lg:opacity-80 lg:max-w-xs hover:opacity-100 cursor-pointer">
                            <Image 
                            src={imageUrl}
                            alt={name} 
                            width={300}
                            height={300}
                            className="w-full aspect-square object-cover object-center"
                            />
                            <div className="mt-2">
                                <p className="capitalize text-sm">{name}</p>
                                <h4 className=" font-bold text-sm">&#8358;{currencyFormat(price)}</h4>
                            </div>
                        </Link>
                    )
                })}
            </section>
        </div>
    </section>
    
    <section className="p-4 lg:py-8 bg-white">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {extra.slice(3,5).map((ext:feature) => {
                const {name, imageUrl, _id} = ext;
                return (
                    <div key={_id} className="relative aspect-square cursor-pointer overflow-hidden">
                        <Image
                        src={imageUrl}
                        alt={name}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-center hover:scale-110 transition-all"
                        />
                        <p className="absolute bottom-5 left-5 styreneBold text-[#F5F4F4] capitalize text-base lg:text-lg text-shadow font-bold">{name}</p>
                    </div>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default Accessories;
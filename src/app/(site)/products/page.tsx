import { feature } from "@/app/interfaces/interface";
import { getAllProducts } from "@/app/sanity-utils";
import Image from "next/image";
import Link from "next/link";
export default async function Products(){
    const products = await getAllProducts();
  return (
    <div className="p-4">
        <section className="lg:w-4/5 mx-auto ">
            <h1 className="text-center w-full uppercase lg:text-xl styrene400 mb-4">Products</h1>
            <aside className="">

            </aside>
            <main className="flex-1">
                <section className="grid-cols-4 grid gap-4 my-4">
                    {products.map((product:feature)=> {
                        const {name, _id, imageUrl, price, slug} = product;
                        return (
                            <Link href={`product/${slug}`} key={_id} className="opacity-80 lg:max-w-xs hover:opacity-100 cursor-pointer overflow-hidden">
                                <div className="overflow-hidden">
                                <Image 
                                src={imageUrl}
                                alt={name}
                                width={300}
                                height={300}
                                className="w-full aspect-square object-cover object-center hover:scale-110 transition-all"
                                />
                                </div>
                                <div className="mt-2">
                                    <p className="capitalize text-sm">{name}</p>
                                    <h4 className=" font-bold text-sm">N{price}</h4>
                                </div>
                            </Link>
                        )
                    })}
                </section>
            </main>
        </section>
    </div>
  )
}
// "use client";
import Image from "next/image";
import Link from "next/link";
import { feature } from "@/app/interfaces/interface";
import { currencyFormat } from "@/app/sanity-utils";
import AddButton from "./AddButton";
import { RemoveFromWishlist } from "./WishlistData";

const WishlistItem = (data:{item:feature}) => {
    const {_id, name, slug, price, imageUrl} = data.item
  return (
    <section key={_id} className="flex justify-between styrene400 text-[10px] md:text-xs lg:text-sm pb-4 border-b">
        <div className='flex gap-2 md:gap-4 flex-1'>
            <Link href={`/product/${slug}`} className='w-10 lg:w-1/6 overflow-hidden aspect-square rounded-sm md:rounded-md bg-white'>
                <Image
                src={imageUrl}
                alt={name}
                width={100}
                height={100}
                className='cursor-pointer w-full aspect-square object-cover object-center'
                />
            </Link>
            <div className='flex-1 py-2 lg:flex-auto flex flex-col justify-between'>
                <h1 className="styrene400 capitalize cursor-pointer">{name}</h1>
                <p className=''>&#8358;{currencyFormat(price)}</p>
            </div>
        </div>
        <section className=' w-max flex flex-col justify-between gap-2 items-end'>
          <RemoveFromWishlist product={data.item}/>
          <AddButton product={data.item} style="bg-green-400 text-white p-2 rounded-md text-xs hover:scale-95 hover:opacity-80"/>
        </section>
    </section>
  )
}

export default WishlistItem;
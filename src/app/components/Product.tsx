import { feature } from "../interfaces/interface";
import Link from "next/link";
import Image from "next/image";
import { currencyFormat } from "../sanity-utils";

export default function Product(product:feature) {
    const {name, _id, imageUrl, price, slug} = product;
    return(
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
                <h4 className=" font-bold text-sm">&#8358;{currencyFormat(price)}</h4>
            </div>
        </Link>
    )
}
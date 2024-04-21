"use client"
import dynamic from 'next/dynamic'
import WishlistItem from "@/components/WishlistItem";
import { feature } from "@/app/interfaces/interface";
import {useGetData} from "@/components/WishlistData";
import Back from '@/components/Back';

// const DynamicHeader = dynamic(() => import('../components/header'), {
//     ssr: false,
//   })

export default function Wishlist() {
    const {wishlist} = useGetData();

    return (
        <div className="p-4">
            <Back/>
            <section className="lg:w-4/5 mx-auto">
                <h2 className="text-center styreneBold uppercase lg:text-lg">Your Wishlist</h2>
                <section className="w-full md:w-4/5 lg:w-3/5 mx-auto flex flex-col gap-3 my-4">
                    {wishlist ?
                        wishlist.map((item: feature) => {
                            return <WishlistItem item={item} key={item._id}/>
                        }) : 
                        <div className='text-center my-8 capitalize'>No item in wishlist</div>
                    }
                </section>
            </section>
        </div>
    )
}
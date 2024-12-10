"use client"
import WishlistItem from "@/components/WishlistItem";
import { feature } from "@/app/interfaces/interface";
import {useGetData} from "@/components/WishlistData";
import Back from '@/components/Back';
import Empty from "@/components/Empty";


export default function Wishlist() {
    const {wishlist} = useGetData();

    return (
        <div className="p-4 bg-white lg:bg-inherit">
            <Back/>
            <section className="lg:w-4/5 mx-auto lg:bg-white lg:shadow-sm py-4 lg:rounded-sm">
                <h2 className="text-center styreneBold uppercase lg:text-lg">Your Wishlist</h2>
                <section className="w-full md:w-4/5 lg:w-3/5 mx-auto flex flex-col gap-3 my-4">
                    {wishlist.length > 0 ?
                        wishlist.map((item: feature) => {
                            return <WishlistItem item={item} key={item._id}/>
                        }) : 
                        <Empty/>
                    }
                </section>
            </section>
        </div>
    )
}
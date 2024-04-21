"use client";
import WishlistItem from "@/components/WishlistItem";
import { feature } from "@/app/interfaces/interface";
import {useGetData} from "@/components/WishlistData";

export default function Wishlist() {
    const {wishlist} = useGetData();

    return (
        <div className="p-4">
            <section className="lg:w-4/5 mx-auto">
                <h2 className="text-center styreneBold uppercase lg:text-lg">Your Wishlist</h2>
                <section className="w-full md:w-4/5 lg:w-3/5 mx-auto flex flex-col gap-3 my-4">
                    {wishlist ?
                        wishlist.map((item: feature) => {
                            return <WishlistItem item={item} key={item._id}/>
                        }) : 
                        <div>NO PRODUCT IN WISHLIST</div>
                    }
                </section>
            </section>
        </div>
    )
}
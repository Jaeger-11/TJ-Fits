"use client";
import { useState, useEffect } from "react";
import { onSnapshot, collection, query, doc } from "firebase/firestore";
import { db } from "@/database/config";
import { useAppSelector } from "@/lib/hooks";
import WishlistItem from "@/components/WishlistItem";
import { feature } from "@/app/interfaces/interface";

export default function Wishlist() {
    const { uid } = useAppSelector((state) => state.user);
    const [wishlist, setWishlist] = useState<any>([]);
    // const collectionRef = collection(db, 'users', uid);

    // const unsub = onSnapshot(doc(db, "users", uid), (doc) => {
    //     console.log("Current data: ", doc.data());
    // });
    // unsub()

    const getData = () => {
        // onSnapshot(collectionRef, (snap) => {
        //     let documents:object[] = []
        //     snap.forEach(doc => {
        //         documents.push({...doc.data(), id:doc.id})
        //     });
        //     setWishlist(documents);
        //     console.log(documents)
        // })
    }

    useEffect(() => {
        // getData();
        
    }, [])
    console.log(wishlist)

    return (
        <div className="p-4">
            <section className="lg:w-4/5 mx-auto">
                <h2 className="text-center styreneBold uppercase lg:text-lg">Your Wishlist</h2>
                <section className="">
                    {/* {wishlist ?
                        wishlist.wishlist?.map((item: feature) => {
                            return <WishlistItem item={item}/>
                        }) : 
                        <div>NO PRODUCT IN WISHLIST</div>
                    } */}
                </section>
            </section>
        </div>
    )
}
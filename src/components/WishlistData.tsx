"use client";
import { useState, useEffect } from "react";
import { onSnapshot, doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "@/database/config";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { updateWishlist } from "@/lib/features/userSlice";
import { closeNotification, updateNotification } from "@/lib/features/userSlice";
import { feature } from "@/app/interfaces/interface";
import {useRouter} from "next/navigation";

export const useGetData = () => {
    const { uid } = useAppSelector((state) => state.user);
    const [wishlist, setWishlist] = useState<any>([]);

    // const unsub = onSnapshot(doc(db, "users", uid), (doc) => {
    //     setWishlist(doc.data()?.wishlist);
    // });

    const unsub = () => {
        if(uid.length > 0){
            onSnapshot(doc(db, "users", uid), (doc) => {
                setWishlist(doc.data()?.wishlist);
            });
        }
    }
    
    useEffect(() => {
        // if(uid){
            unsub();
        // }
    }, [uid])

    return {wishlist}
}

export const RemoveFromWishlist = (data:{product:feature}) => {
    const router = useRouter();
    const { uid } = useAppSelector((state) => state.user);
    const userRef = doc(db, 'users', uid)
    const dispatch = useAppDispatch();
    const {name, price, imageUrl, _id, slug} = data.product

    const deleteItem = async () => {
        try {
            await updateDoc(userRef, {
                wishlist: arrayRemove({name, price, imageUrl, _id, slug})
            });
            router.push('/wishlist')
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
        dispatch(updateNotification({header:name, text: "Removed From Wishlist", imageUrl}))
        setTimeout(() => {
            dispatch(closeNotification())
        }, 2000);
    }
   

    return (
        <svg onClick={deleteItem}  fill="#000" className="w-4 cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#dddddd"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path></g></svg>
    )
}


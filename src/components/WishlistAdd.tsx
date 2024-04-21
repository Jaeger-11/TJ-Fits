"use client"
import { feature } from "@/app/interfaces/interface";
import { useAppDispatch } from "@/lib/hooks";
import { updateNotification, closeNotification } from "@/lib/features/userSlice";
import { db } from "@/database/config";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useAppSelector } from "@/lib/hooks";

const WishlistAdd = (data:{product:feature}) => {
    const { uid, wishlist } = useAppSelector((state) => state.user);
    const {name, price, imageUrl, _id, slug} = data.product;
    const userRef = doc(db, 'users', uid)
    const dispatch = useAppDispatch();
    const addToWishlist = async () => {
        if(wishlist.filter((item) => item._id === _id).length > 0){
            dispatch(updateNotification({header:name, text: "Already Added To Wishlist", imageUrl}))
            setTimeout(() => {
                dispatch(closeNotification())
            }, 2000);
        } else {
            try {
                await updateDoc(userRef, {
                    wishlist: arrayUnion({name, price, imageUrl, _id, slug})
                });
              } catch (e) {
                console.error("Error adding document: ", e);
              }
            dispatch(updateNotification({header:name, text: "Added To Wishlist", imageUrl}))
            setTimeout(() => {
                dispatch(closeNotification())
            }, 2000);
        }
    }
  return (
    <div className="flex gap-1 items-center border py-1 px-2 w-max font-medium hover:bg-gray-100 hover:scale-105 hover:font-semibold">
        <svg viewBox="0 0 24 24" className="w-4" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="rgb(22 163 74)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> ;fill:none;stroke:#000000;stroke-width:5.000000e-02;stroke-miterlimit:10; </style> <g  id="grid_system"></g> <g id="_icons"> <path d="M14,10h-1V9c0-0.6-0.4-1-1-1s-1,0.4-1,1v1h-1c-0.6,0-1,0.4-1,1s0.4,1,1,1h1v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1h1 c0.6,0,1-0.4,1-1S14.6,10,14,10z"></path> <path d="M19,3h-1H6H5C4.4,3,4,3.4,4,4s0.4,1,1,1v14.1c0,0.7,0.4,1.4,1.1,1.8c0.3,0.2,0.6,0.2,0.9,0.2c0.4,0,0.8-0.1,1.1-0.3 l3.9-2.6l3.9,2.6c0.6,0.4,1.4,0.5,2.1,0.1c0.7-0.3,1.1-1,1.1-1.8V5c0.6,0,1-0.4,1-1S19.6,3,19,3z M17,19.1C17,19.1,17,19.1,17,19.1 l-3.9-2.6c-0.3-0.2-0.7-0.3-1.1-0.3s-0.8,0.1-1.1,0.3L7,19.1V5h10L17,19.1L17,19.1z"></path> </g> </g></svg>
        <p className="text-xs text-green-600 cursor-pointer" onClick={addToWishlist}>Add to Wishlist</p>
    </div>
  )
}

export default WishlistAdd;
"use client";
import { feature, product } from "@/app/interfaces/interface";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/features/cartSlice";
import { forUrl } from "../../sanity/lib/client";
import { useRouter } from "next/navigation";
import { updateNotification, closeNotification } from "@/lib/features/userSlice";

const AddButton = (data:{product:feature, style: string}) => {
  const router = useRouter();
    const dispatch = useAppDispatch();
    const { uid } = useAppSelector((state) => state.user)
    const { cartItems } = useAppSelector((state) => state.cart);
    const add = () => {
        const {name, price, imageUrl, _id} = data.product;
        if(cartItems.filter((item) => item._id === _id).length === 0){
              if (uid.length > 0){
                dispatch(addToCart({_id,name,price,imageUrl,quantity:1}))
                dispatch(updateNotification({header:name, text: "Added To Cart", imageUrl}))
                setTimeout(() => {
                  dispatch(closeNotification())
              }, 2000);
              }  else { 
                dispatch(updateNotification({text:"Sign In / Create Account To Add to Cart!"}))
                setTimeout(() => {
                    dispatch(closeNotification())
                }, 2000);
                router.push('/authentication') 
              } 
        } else {
          dispatch(updateNotification({text:"Already In Cart!"}))
          setTimeout(() => {
              dispatch(closeNotification())
          }, 2000);
        }
    }
  return (
    <button onClick={add} className={data.style}>Add to cart</button>
  )
}

export default AddButton;
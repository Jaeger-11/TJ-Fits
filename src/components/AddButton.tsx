"use client";
import { product } from "@/app/interfaces/interface";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart, showCart } from "@/lib/features/cartSlice";
import { forUrl } from "../../sanity/lib/client";
import { useRouter } from "next/navigation";

const AddButton = (data:{product:product}) => {
  const router = useRouter();
    const dispatch = useAppDispatch();
    const { uid } = useAppSelector((state) => state.user)
    const { cartItems, totalCartItems } = useAppSelector((state) => state.cart);
    const add = () => {
        const {name, price, images, _id} = data.product;
        if(cartItems.filter((item) => item._id === _id).length === 0){
            let imageUrl = forUrl(images[0]).url();
            if(imageUrl){
              if (uid.length > 0){
                dispatch(addToCart({_id,name,price,imageUrl,quantity:1}))
                console.log(cartItems, totalCartItems)
              }  else { 
                  alert("Sign In / Create Account To Add to Cart!")
                  router.push('/authentication')
              } 
            }
        }
    }
  return (
    <button onClick={add} className="px-4 py-2.5 text-xs capitalize bg-black text-white rounded-md transition-all hover:scale-90">Add to cart</button>
  )
}

export default AddButton;
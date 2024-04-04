"use client"
import { useAppSelector } from "@/lib/hooks";
import CartItem from "./CartItem";

const CartItems = () => {
    const { cartItems } = useAppSelector((state) => state.cart)
    console.log(cartItems)
  return (
    <div>
        <section className="flex flex-col gap-4 mt-4">
            {cartItems.map((item) => {
                return (
                    <CartItem key={item._id} item={item}/>
                )
            })}
        </section>
        <div>
            
        </div>
    </div>
  )
}

export default CartItems;
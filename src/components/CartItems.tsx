"use client"
import { useAppSelector } from "@/lib/hooks";
import CartItem from "./CartItem";
import { currencyFormat } from "@/app/sanity-utils";
import Link from "next/link";

const CartItems = () => {
    const { cartItems, subTotal } = useAppSelector((state) => state.cart)
  return (
    <div>
        <section className="flex flex-col gap-4 mt-4">
            {cartItems.map((item) => {
                return (
                    <CartItem key={item._id} item={item}/>
                )
            })}
        </section>
        <div className="text-right my-4 mt-8">
            <h3 className="styrene400">SubTotal &nbsp; &#8358;{currencyFormat(subTotal)}</h3>
            <p className="text-xs my-2 text-gray-500">Taxes and Shipping calculated at Checkout</p>

            <div className="flex justify-between mt-2">
                <Link href='/products' className="underline text-xs">Back To Shopping</Link>
                <button className="text-sm bg-black text-white px-6 py-2 md:px-10 hover:scale-95">Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems;
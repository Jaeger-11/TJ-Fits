"use client";
import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const Provider = ({children}:{children:ReactNode}) => {
  return (
    <CartProvider 
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_KEY as string}
    successUrl="http://localhost:3000/success"
    cancelUrl="http://localhost:3000/error"
    currency="NGN"
    billingAddressCollection={true}
    shouldPersist= {false}
    >
        {children}
    </CartProvider>
  )
}

export default Provider
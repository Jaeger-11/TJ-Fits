"use client";
import { createSlice } from "@reduxjs/toolkit";
import { cart, feature } from "@/app/interfaces/interface";

let parsedCart = []

if(typeof window !== 'undefined'){
    // now access your localStorage
    const localCart = localStorage.getItem('cart');
    parsedCart = localCart ? JSON.parse(localCart) : [];
}

let total = 0;
if(parsedCart.length > 0) {
    parsedCart.map((item:feature) => {
        total += item.price ? item.price * (item.quantity ? item.quantity : 1) : 0
    })
}


const initialState:cart = {
    cartItems : parsedCart,
    totalCartItems : parsedCart.length || 0,
    subTotal: total
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => { 
            state.cartItems.push(action.payload);
            state.totalCartItems = state.cartItems.length;
            let total = 0;
            state.cartItems.map((item) => {
                total += item.price ? item.price * (item.quantity ? item.quantity : 1) : 0
            })
            state.subTotal = total;
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload)
            state.totalCartItems = state.cartItems.length;
            let total = 0;
            state.cartItems.map((item) => {
                total += item.price ? item.price * (item.quantity ? item.quantity : 1) : 0
            })
            state.subTotal = total;
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        clearCart: (state) => { 
            state.cartItems = [] 
            state.totalCartItems = 0;
            state.subTotal = 0;
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        increaseQuantity: (state,{payload}) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item._id === payload){
                    return {...item, quantity: item.quantity ? item.quantity + 1 : 0}
                } else {
                    return item
                }
            });
            let total = 0;
            state.cartItems.map((item) => {
                total += item.price ? item.price * (item.quantity ? item.quantity : 1) : 0
            })
            state.subTotal = total;
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        decreaseQuantity: (state,{payload}) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item._id === payload){
                    return {...item, quantity: item.quantity ? item.quantity > 1 ? item.quantity - 1 : 1 : 0}
                } else {
                    return item
                }
            });
            let total = 0;
            state.cartItems.map((item) => {
                total += item.price ? item.price * (item.quantity ? item.quantity : 1) : 0
            })
            state.subTotal = total;
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        }
    }
})

export const { addToCart, clearCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer
"use client";
import { createSlice } from "@reduxjs/toolkit";
import { cart } from "@/app/interfaces/interface";


const initialState:cart = {
    cartItems : [],
    isCartOpen: false,
    totalCartItems : 0,
    subTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showCart: (state) => { state.isCartOpen = true },
        addToCart: (state, action) => { 
            state.cartItems.push(action.payload);
            state.totalCartItems = state.cartItems.length;
            let total = 0;
            state.cartItems.map((item) => {
                total += item.price ? item.price * (item.quantity ? item.quantity : 1) : 0
            })
            state.subTotal = total;
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload)
            state.totalCartItems = state.cartItems.length;
            let total = 0;
            state.cartItems.map((item) => {
                total += item.price ? item.price * (item.quantity ? item.quantity : 1) : 0
            })
            state.subTotal = total;
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
        }
    }
})

export const {showCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer
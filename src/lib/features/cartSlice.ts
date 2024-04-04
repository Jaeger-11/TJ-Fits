"use client";
import { createSlice } from "@reduxjs/toolkit";
import { cart } from "@/app/interfaces/interface";


const initialState:cart = {
    cartItems : [],
    isCartOpen: false,
    totalCartItems : 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showCart: (state) => { state.isCartOpen = true },
        addToCart: (state, action) => { 
            state.cartItems.push(action.payload);
            state.totalCartItems = state.cartItems.length;
        }
    }
})

export const {showCart, addToCart} = cartSlice.actions;

export default cartSlice.reducer
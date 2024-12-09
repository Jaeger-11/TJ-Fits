"use client";
import { auth } from "@/database/config";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from "@/app/interfaces/interface";
import { infoData } from "@/app/interfaces/interface";

let parsedShippingAddress:infoData = {
    contact: '',
    alternative: '',
    firstName: '',
    lastName: '',
    address: '',
    state: ''
};

if(typeof window !== 'undefined'){
    // now access your localStorage
    const shippingAddress = localStorage.getItem('shippingAddress');
    parsedShippingAddress = shippingAddress ? JSON.parse(shippingAddress) : {};
}

const initialState:user = {
    username: auth.currentUser?.displayName || "",
    uid: auth.currentUser?.uid || "",
    email: auth.currentUser?.email || "",
    contactShippingInfo: parsedShippingAddress,
    notify: false,
    toastContent: {
        imageUrl: "",
        header: "",
        text: ""
    },
    wishlist: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload}) => { 
            state.username = payload.username;
            state.email = payload.email;
            state.uid = payload.uid;
        },
        logOut: (state) => { 
            state.username = '' 
            state.email = ''
            state.uid = ''
        }, 
        updateInfo: (state, {payload}: PayloadAction<{name: keyof infoData; value: string}>) => {
            const { name, value } = payload;
            state.contactShippingInfo[name] = value;
            localStorage.setItem("shippingAddress", JSON.stringify(state.contactShippingInfo));
        },
        clearNotification: (state) => {
            state.toastContent = {
                imageUrl: "",
                header: "",
                text: ""
            }
        },
        closeNotification: (state) => {
            state.notify = false;
        },
        updateNotification: (state, {payload}) => {
            state.notify = false;
            state.toastContent = payload;
            state.notify = true;
        }, 
        updateWishlist: (state, {payload}) => {
            state.wishlist = payload;
        }
    }
})

export const {setUser, logOut, updateInfo, closeNotification, updateNotification, clearNotification, updateWishlist} = userSlice.actions

export default userSlice.reducer;
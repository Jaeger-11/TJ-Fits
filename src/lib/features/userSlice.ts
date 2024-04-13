"use client";
import { auth } from "@/database/config";
import { onAuthStateChanged } from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";
import { user } from "@/app/interfaces/interface";

const initialState:user = {
    username: auth.currentUser?.displayName || "",
    uid: auth.currentUser?.uid || "",
    email: auth.currentUser?.email || "",
    contactShippingInfo: {
        contact: "",
        alternative: "",
        firstName: "",
        lastName: "",
        state: "",
        address: ""
    }
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
        updateInfo: (state, {payload}) => {
            console.log(payload)
            state.contactShippingInfo = payload
        }
    }
})

export const {setUser, logOut, updateInfo} = userSlice.actions

export default userSlice.reducer
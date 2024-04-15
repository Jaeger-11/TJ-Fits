"use client";
import { auth } from "@/database/config";
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
    },
    notify: false,
    toastContent: {
        imageUrl: "",
        header: "",
        text: ""
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
            state.contactShippingInfo = payload
        },
        closeNotification: (state) => {
            state.notify = false;
            state.toastContent = {
                imageUrl: "",
                header: "",
                text: ""
            }
        },
        updateNotification: (state, {payload}) => {
            state.notify = false;
            state.toastContent = {
                imageUrl: "",
                header: "",
                text: ""
            }
            state.toastContent = payload;
            state.notify = true;
        }
    }
})

export const {setUser, logOut, updateInfo, closeNotification, updateNotification} = userSlice.actions

export default userSlice.reducer
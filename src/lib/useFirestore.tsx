
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/database/config";

export const getWishlistItems = async () => {
    const userRef = collection(db, 'users')

    const getData = () => {
        onSnapshot(userRef, (snap) => {
            console.log("Current data: ", snap.docs);
        });
    }

    getData()

    return {}
}
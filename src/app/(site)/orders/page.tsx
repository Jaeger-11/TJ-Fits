"use client";
import Back from "@/components/Back";
import { useAppSelector } from "@/lib/hooks";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/database/config";
import { useState, useEffect } from "react";

const page = () => {
  const { uid } = useAppSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  const GetOrders = async () => {
    const data:any = [];
    const dataSnapshot = await getDocs(query(collection(db,'orders'), where("uid", '==', uid)));
    dataSnapshot.forEach((doc) => 
      data.push(doc.data())
    );
    setOrders(data);
    console.log(data);
  }

  useEffect(() => {
    GetOrders();
  }, [uid])

  return (
    <div className="p-4 bg-white lg:bg-inherit">
        <Back/>
        <section className="lg:w-4/5 mx-auto lg:bg-white lg:shadow-sm py-4 lg:rounded-sm">
        <h2 className=" styreneBold uppercase px-4 pb-2 border-b lg:text-lg">Your Orders</h2>
            <section className="w-full md:w-4/5 lg:w-3/5 mx-auto flex flex-col gap-3 my-4">
                {orders ? orders.map((order) => {
                  return <p>received</p>
                }): 'NO ORDER YET'}
            </section>
        </section>
    </div>
  )
}

export default page
"use client";
import Back from "@/components/Back";
import { useAppSelector } from "@/lib/hooks";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/database/config";
import { useState, useEffect } from "react";
import { orderInfo } from "@/app/interfaces/interface";

const Page = () => {
  const { uid } = useAppSelector((state) => state.user);
  const [orders, setOrders] = useState<orderInfo[]>([]);

  const GetOrders = async () => {
    const data:orderInfo[] = [];
    try {
      const dataSnapshot = await getDocs(query(collection(db,'orders'), where("uid", '==', uid)));
    dataSnapshot.forEach((doc) => 
      data.push({orderId: doc.id,...doc.data()} as orderInfo)
    );
    setOrders(data);
    console.log(data);
    } catch (error) {
      console.log(error);
    }
    
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
                {orders ? orders.map((Order) => {
                  const { orderId, orderDate, shippingInformation, order } = Order
                  return <section key={orderId}>
                    
                  </section>
                }): 'NO ORDER YET'}
            </section>
        </section>
    </div>
  )
}

export default Page
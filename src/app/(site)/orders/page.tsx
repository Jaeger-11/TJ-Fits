"use client";
import Back from "@/components/Back";
import { useAppSelector } from "@/lib/hooks";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/database/config";
import { useState, useEffect } from "react";
import { orderInfo } from "@/app/interfaces/interface";
import Order from "@/components/Order";
import Link from "next/link";

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
            <section className="w-full p-4 mx-auto flex flex-col gap-3 my-4">
                {orders ? orders.map((item) => {
                  const { orderId, orderDate, order } = item
                  return <section key={orderId} className="border p-2">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm leading-none flex flex-col gap-0">
                        <p className="">Order <span className="uppercase font-semibold text-gray-600">{orderId}</span></p>
                        <p className="font-semibold">{orderDate}</p>
                      </div>
                      
                      <p className="border bg-green-400 p-1 uppercase text-white text-sm rounded-sm">delivered</p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 mb-2">
                      {order.map((i) => {
                        return <Order order={i}/>
                      })}
                    </div>
                    <Link href={'/'} className="text-red-500 text-sm font-semibold hover:underline">SEE DETAILS</Link>
                  </section>
                }): 'NO ORDER YET'}
            </section>
        </section>
    </div>
  )
}

export default Page
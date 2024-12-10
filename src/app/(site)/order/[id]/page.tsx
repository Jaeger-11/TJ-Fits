"use client";
import Back from "@/components/Back";
import { GetOrder } from "@/app/sanity-utils";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { orderInfo } from "@/app/interfaces/interface";
const OrderPage = ({params} : {
    params: {id:string}
}) => {
    const {uid} = useAppSelector((state) => state.user)
    const [order, setOrder] = useState<orderInfo>({order:[], orderDate: '', shippingInformation:{contact:'', address:'', state:'', firstName: '', lastName: '', alternative:''}, orderId:'', uid:''});

    useEffect(() => {
        const fetchOrders = async () => {
            const data = await GetOrder(params.id);
            setOrder(data);
          };
        
          fetchOrders();
    }, [uid])

  return (
    <div className="p-4 bg-white lg:bg-inherit">
        <Back/>
        <section className="lg:w-4/5 mx-auto lg:bg-white lg:shadow-sm py-4 lg:rounded-sm">
        <h2 className=" styreneBold capitalize px-4 pb-2 border-b lg:text-lg">Order details</h2>
            <div className="text-sm leading-none flex flex-col gap-0 px-4 pt-2">
                <p className="">Order No - <span className="uppercase font-semibold text-gray-600">{order.orderId}</span></p>
                <p className="font-semibold">Order Date - {order.orderDate}</p>
            </div>
            <section className="w-full p-4 mx-auto flex flex-col gap-3 my-4">
                  <section key={order.orderId} className="border p-2">
                    <div className="flex justify-between items-center mb-2">
                      
                      
                      <p className="border bg-green-400 p-1 uppercase text-white text-sm rounded-sm">delivered</p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 mb-2">
                      
                    </div>
                  </section>
            </section>
        </section>
    </div>
  )
}

export default OrderPage
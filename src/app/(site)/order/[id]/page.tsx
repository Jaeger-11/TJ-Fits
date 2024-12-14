"use client";
import Back from "@/components/Back";
import { GetOrder } from "@/app/sanity-utils";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { feature, orderInfo } from "@/app/interfaces/interface";
import Order from "@/components/Order";
import { currencyFormat, getDate } from "@/app/sanity-utils";

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
    <div className="p-4 bg-white lg:bg-inherit styrene400">
        <Back/>
        <section className="lg:w-4/5 mx-auto lg:bg-white lg:shadow-sm lg:py-4 lg:rounded-sm">
        <h2 className=" styreneBold capitalize lg:px-4 pb-2 border-b lg:text-lg">Order details</h2>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2 lg:px-4 pt-2">
                <div className="text-sm leading-tight flex flex-col gap-0 [&_span]:font-semibold">
                    <p className="">Order No - <span className="uppercase font-semibold text-gray-600">{order.orderId}</span></p>
                    <p>Order Date - <span>{order.orderDate}</span></p>
                    <p>Sub Total - <span>&#8358;{currencyFormat(order.subTotal)}</span></p>
                    <p>Delivery Fee - <span>&#8358;{currencyFormat(order.deliveryFee)}</span></p>
                    <p className="font-semibold">Total - &#8358;{currencyFormat(order.total)}</p>
                </div>
                <p className="border bg-green-400 p-1 uppercase text-white text-sm rounded-sm">delivered</p>
            </div>
            
            <section className="w-full lg:p-4 mx-auto flex flex-col gap-3 my-4">
                  <section key={order.orderId} className="lg:border lg:p-2">
                    <div className="lg:grid lg:grid-cols-2 mb-2">
                      {order.order.map((item:feature) => {
                        return <Order key={item._id} order={item} full={true}/>
                      })}
                    </div>
                  </section>
                  <section className="text-sm styrene400">
                    <h2 className="styreneBold text-lg">Delivery Information</h2>
                    <p>Delivery Method - {order.deliveryMethod}</p>
                    <p>Delivery Date - {order.orderDate}</p>

                    <h3 className="font-semibold text-base mt-4">Shipping Address</h3>
                    <p>{order.shippingInformation.address} <br /> {order.shippingInformation.state} <br /> {order.shippingInformation.alternative} <br /> {order.shippingInformation.contact} </p>
                  </section>
            </section>
        </section>
    </div>
  )
}

export default OrderPage
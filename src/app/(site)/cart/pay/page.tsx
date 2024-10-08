"use client";
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { currencyFormat } from '@/app/sanity-utils';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { clearCart } from '@/lib/features/cartSlice';
import { useRouter } from 'next/navigation';
import { updateNotification, closeNotification } from '@/lib/features/userSlice';
import { useState } from 'react';

const Pay = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { contactShippingInfo, uid, email } = useAppSelector((state) => state.user);
    const { subTotal } = useAppSelector((state) => state.cart)
    const { contact, alternative, firstName, lastName, state, address } = contactShippingInfo;
    const shippingOptions = [
        {
            name: "Standard Delivery",
            info: "3 - 5 days",
            cost: 2500
        }, 
        {
            name: "Express Delivery",
            info: "1 - 2 day(s)",
            cost: 5000
        }
    ]
    const [option, setOption] = useState<{name:string, info:string, cost:number}>(shippingOptions[0])
    let total = subTotal + option.cost;

    const config = {
        public_key: process.env.NEXT_PUBLIC_TEST_FLUTTERWAVE || 'string',
        tx_ref: `${Date.now()}`,
        amount: total,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: email,
            phone_number: contact,
            name: `${firstName} ${lastName}`,
        },
        customizations: {
            title: 'TJ-Fits',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    }

    const handleFlutterPayment = useFlutterwave(config);

    const payNow = () => {
        handleFlutterPayment({
            callback: (response) => {
            //   console.log(response);
              if(response.status === "successful"){
                dispatch(updateNotification({text:"Payment Successful!", imageUrl: 'show'}))
                setTimeout(() => {
                    dispatch(closeNotification())
                }, 2000);
                router.push('/')
                dispatch(clearCart());
              }
              closePaymentModal();
            },
            onClose: () => {},
          })
    }

  return (
    <div className="lg:my-4 p-4">
        <div className="md:w-3/5 lg:w-1/2 mx-auto text-sm">
            <section className=' p-2 border border-black mb-4'>
                <article className='flex gap-4 items-center text-gray-600'>
                    <h1 className=" text-black text-sm capitalize">Contact</h1>
                    <div>
                        {contact + ' | ' + alternative}
                    </div>
                </article>
                <hr  className='my-2 bg-black h-[1px]'/>
                <article className="flex gap-4 items-center text-gray-600">
                    <h1 className="text-black  text-sm capitalize"> Ship To</h1>
                    <section>
                        {state + ', ' + address}
                    </section>
                </article>
            </section>

            <section>
                <h2>Shipping Method</h2>
                <section className='mt-2 p-2 border border-black mb-4 flex flex-col gap-3'>
                    {shippingOptions.map((item, index) => {
                        return (
                            <article key={index} className='flex gap-4 items-center text-gray-600'>
                                <div onClick={() => setOption(shippingOptions[index])} className={`${option.name === item.name ? 'bg-black flex items-center justify-center' : 'bg-white'} w-4 aspect-square rounded-full transition-all border-black border cursor-pointer`}>
                                    <p className={`${option.name === item.name ? 'bg-white w-2 aspect-square' : 'bg-none'} rounded-full transition-all`}></p>
                                </div>
                                <div className='flex-1 capitalize'>
                                    <h1 className='text-black  text-'>{item.name}</h1>
                                    <p className='text-xs'>{item.info}</p>
                                </div>
                                <h3 className='font-medium styrene400 text-black'>{currencyFormat(item.cost)}</h3>
                            </article>
                        )
                    })}
                </section>
            </section>

            <section>
                <h2>Amount To Pay</h2>
                <section className='mt-2 p-2 border border-black mb-4 flex flex-col gap-2 text-base styrene400'>
                    <div className='flex justify-end gap-4 items-center'>
                        <p className='text-gray-600 text-xs'>Cart Total</p>
                        <p>{currencyFormat(subTotal)}</p>
                    </div>
                    <div className='flex justify-end gap-4 items-center'>
                        <p className='text-gray-600 text-xs'>Shipping / Delivery Fee</p>
                        <p>{currencyFormat(option.cost)}</p>
                    </div>
                    <div className='flex justify-end gap-4 items-center'>
                        <p className='text-gray-600 text-xs'>Total Amount To Pay</p>
                        <p className='font-bold border-t border-black py-2'>&#8358;{currencyFormat(total)}</p>
                    </div>
                </section>
            </section>
            

            <div className="flex justify-between items-end mt-2">
                <Link href='/cart/shipping' className="underline text-xs transition-all hover:text-green-500">Back To Shipping Information</Link>
                <button onClick={payNow} className=" text-sm bg-black transition-all rounded-sm text-white px-4 py-2 md:px-6 hover:scale-95">Pay Now</button>
            </div>
        </div>
    </div>
  )
}

export default Pay
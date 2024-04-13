"use client";
import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks';
import { currencyFormat } from '@/app/sanity-utils';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const Pay = () => {
    const { contactShippingInfo, uid, email } = useAppSelector((state) => state.user);
    const { subTotal } = useAppSelector((state) => state.cart)
    const { contact, alternative, firstName, lastName, state, address } = contactShippingInfo;
    let shippingFee = 1500
    let total = subTotal + shippingFee;

    const config = {
        public_key: "FLWPUBK_TEST-197b5b96c7c91eee1d28083d31134355-X",
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
            title: 'TJ-Fits Purchase',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    }

    const handleFlutterPayment = useFlutterwave(config);

    const payNow = () => {
        alert("Processing")
        handleFlutterPayment({
            callback: (response) => {
              console.log(response);
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
                <section className='mt-2 p-2 border border-black mb-4'>
                    {/* <article className='flex gap-4 items-center text-gray-600'>
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
                    </article> */}
                </section>
            </section>

            <section>
                <h2>Amount To Pay</h2>
                <section className='mt-2 p-2 border border-black mb-4 flex flex-col gap-2 text-base styrene400'>
                    <div className='flex justify-end gap-4 items-center'>
                        <p className='text-gray-600 text-xs'>Cart Total</p>
                        <p>&#8358;{currencyFormat(subTotal)}</p>
                    </div>
                    <div className='flex justify-end gap-4 items-center'>
                        <p className='text-gray-600 text-xs'>Shipping / Delivery Fee</p>
                        <p>&#8358;{currencyFormat(shippingFee)}</p>
                    </div>
                    <div className='flex justify-end gap-4 items-center'>
                        <p className='text-gray-600 text-xs'>Total Amount To Pay</p>
                        <p className='font-bold border-t border-black py-2'>&#8358;{currencyFormat(total)}</p>
                    </div>
                </section>
            </section>
            

            <div className="flex justify-between items-end mt-2">
                <Link href='/cart/shipping' className="underline text-xs">Back To Shipping Information</Link>
                <button onClick={payNow} className=" text-sm bg-black text-white px-4 py-2 md:px-6 hover:scale-95">Pay Now</button>
            </div>
        </div>
    </div>
  )
}

export default Pay
"use client";
import Link from "next/link";
import { useState } from "react";
import { infoData } from "@/app/interfaces/interface";

const page = () => {
    const [info, setInfo] = useState<infoData>({
        contact: "",
        alternative: "",
        firstName: "",
        lastName: "",
        state: "",
        address: ""
    })
  return (
    <div className="lg:my-4 p-4">
        <form className="md:w-3/5 lg:w-1/2 mx-auto shipping">
            <section>
                <h1 className="mb-2 text-gray-600 text-sm uppercase">Contact Information</h1>
                <div>
                    <input type="text" name="contact" required id="contact" placeholder="Mobile Phone Number"/>
                    <input type="text" className="mt-2" required name="alternative" id="alternative" placeholder="Alternative Email or Mobile Phone Number"/>
                </div>
            </section>

            <section className="my-4">
                <h1 className="mb-2 text-gray-600 text-sm uppercase"> Shipping Address</h1>
                <section>
                    <div className="grid grid-cols-2 gap-1">
                        <input type="text" name="firstName" required id="firstName" placeholder="First name"/>
                        <input type="text" name="lastName" required id="lastName" placeholder="Last name"/>
                    </div>
                    <div className="my-2">
                        <input type="text" name="state" required id="state" placeholder="State, LGA" />
                    </div>
                    <div>
                        <input type="text" name="address" required id="address" placeholder="City, Apartment Address..." />
                    </div>
                </section>
            </section>

            <div className="flex justify-between items-end mt-2">
                <Link href='/cart' className="underline text-xs">Back To Cart</Link>
                <Link href={'/cart/shipping'} className="text-sm bg-black text-white px-4 py-2 md:px-6 hover:scale-95">Continue to Shipping</Link>
            </div>
        </form>
    </div>
  )
}

export default page
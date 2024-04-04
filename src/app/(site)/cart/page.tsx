import CartItems from "@/components/CartItems";
import Back from "@/components/Back";

export default function Page(){
    return (
        <div className="my-4 p-4">
            <Back/>
           <section className="lg:w-4/5 mx-auto">
                <h1 className="mb-4 styreneBold font-lg ">Your Cart</h1>
                <header className="lg:grid lg:grid-cols-6 text-[#4F4F4F] text-sm border-b pb-4">
                    <h1 className="col-span-3">PRODUCT</h1>
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>TOTAL</p>
                </header>
                <section>
                    <CartItems/>
                </section>
           </section>
        </div>
    )
}
import CartItems from "@/components/CartItems";

export default function Page(){
    return (
        <div className="lg:my-4 p-4">
           <section className="lg:w-4/5 mx-auto">
                <h1 className="mb-4 styreneBold font-lg ">Your Cart</h1>
                <header className="grid grid-cols-5 lg:grid-cols-6 text-[#4F4F4F] text-[10px] md:text-xs lg:text-sm border-b pb-4">
                    <h1 className="col-span-2 lg:col-span-3">PRODUCT</h1>
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
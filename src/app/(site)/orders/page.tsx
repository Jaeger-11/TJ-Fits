import Back from "@/components/Back";

const page = () => {
  return (
    <div className="p-4 bg-white lg:bg-inherit">
        <Back/>
        <section className="lg:w-4/5 mx-auto lg:bg-white lg:shadow-sm py-4 lg:rounded-sm">
        <h2 className=" styreneBold uppercase px-4 pb-2 border-b lg:text-lg">Your Orders</h2>
            <section className="w-full md:w-4/5 lg:w-3/5 mx-auto flex flex-col gap-3 my-4">
                
            </section>
        </section>
    </div>
  )
}

export default page
import { feature, orderInfo } from "@/app/interfaces/interface"
import Image from "next/image"
import { currencyFormat } from "@/app/sanity-utils"

const Order = (data:{order: feature}) => {
    const { _id, name, price, imageUrl } = data.order
  return (
    <section key={_id} className="flex justify-between border styrene400 text-sm lg:text-sm p-2 border-b">
        <div className='flex gap-2 md:gap-4 flex-1'>
            <div className='w-1/5 lg:w-1/6 overflow-hidden aspect-square rounded-sm md:rounded-md bg-white'>
                <Image
                src={imageUrl}
                alt={name}
                width={100}
                height={100}
                className=' w-full aspect-square object-cover object-center'
                />
            </div>
            <div className='flex-1 py-2 lg:flex-auto flex flex-col justify-between'>
                <h1 className="styrene400 capitalize">{name}</h1>
                <p className='font-semibold'>&#8358;{currencyFormat(price)}</p>
            </div>
        </div>
    </section>
  )
}

export default Order
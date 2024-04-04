import { feature } from '@/app/interfaces/interface';
import Image from 'next/image';
import { currencyFormat } from '@/app/sanity-utils';

const CartItem = (data:{item:feature}) => {
    const {name, price, imageUrl, quantity, _id} = data.item;
  return (
    <section key={_id} className="lg:grid styrene400 lg:grid-cols-6 text-sm pb-4 border-b items-center">
        <div className='flex gap-4 col-span-3'>
            <div className='w-1/6 overflow-hidden aspect-square rounded-md'>
                <Image
                src={imageUrl}
                alt={name}
                width={100}
                height={100}
                className=' w-full aspect-square object-cover object-center'
                />
            </div>
            <div className='py-2 flex flex-col justify-between'>
                <h1 className="styrene400 capitalize">{name}</h1>
                <p className='text-xs underline cursor-pointer text-red-500'>Remove From Cart</p>
            </div>
        </div>
        <p>&#8358;{currencyFormat(price)}</p>
        <p>{quantity}</p>
        <p>&#8358;{currencyFormat(price && price * (quantity ? quantity : 0))}</p>
    </section>
  )
}

export default CartItem
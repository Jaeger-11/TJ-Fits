import { feature } from '@/app/interfaces/interface';
import Image from 'next/image';
import { currencyFormat } from '@/app/sanity-utils';
import { useAppDispatch } from '@/lib/hooks';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/lib/features/cartSlice';

const CartItem = (data:{item:feature}) => {
    const dispatch = useAppDispatch();
    const {name, price, imageUrl, quantity, _id} = data.item;
    const widthSize = window.innerWidth;

  return (
    <section key={_id} className="grid grid-cols-5 styrene400 lg:grid-cols-6 text-[10px] md:text-xs lg:text-sm pb-4 border-b items-center">
        <div className='flex gap-2 md:gap-4 col-span-2 lg:col-span-3'>
            <div className='w-10 lg:w-1/6 overflow-hidden aspect-square rounded-sm md:rounded-md bg-white'>
                <Image
                src={imageUrl}
                alt={name}
                width={100}
                height={100}
                className=' w-full aspect-square object-cover object-center'
                />
            </div>
            <div className='flex-1 py-2 lg:flex-auto flex flex-col justify-between'>
                <h1 className="styrene400 capitalize">{widthSize < 600 ? name.substring(0,12) + '...' : name}</h1>
                <p onClick={() => dispatch(removeFromCart(_id))} className='text-[10px] lg:text-xs underline cursor-pointer text-red-500'>Remove</p>
            </div>
        </div>
        <p>&#8358;{currencyFormat(price)}</p>
        <section className='border border-black p-2 md:px-3 w-max flex items-center gap-2'>
            <p>{quantity}</p>
            <div className='flex flex-col justify-between gap-1'>
                <p onClick={() => dispatch(increaseQuantity(_id))}><svg className='w-1.5 cursor-pointer' viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_up [#337]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" id="arrow_up-[#337]"> </path> </g> </g> </g> </g></svg></p>
                <p onClick={() => dispatch(decreaseQuantity(_id))}><svg className='w-1.5 cursor-pointer' viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_down [#338]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]"> </path> </g> </g> </g> </g></svg></p>
            </div>
        </section>
        <p>&#8358;{currencyFormat(price && price * (quantity ? quantity : 0))}</p>
    </section>
  )
}

export default CartItem
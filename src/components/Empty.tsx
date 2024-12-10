import Image from "next/image";
import Link from "next/link";
import empty from '../../public/undraw_empty.svg';

const Empty = () => {
  return (
    <div className='text-center my-8 flex flex-col justify-center items-center gap-4 leading-normal'>
        <Image
        src={empty}
        width={200}
        height={200}
        alt="empty wishlist"
        />

        <div>
            <h3 className="text-lg font-semibold text-red-500">Looks Empty!</h3>
            <p>Come on take a look at <Link href={'/products'} className="italic  underline font-semibold hover:text-green-500 transition-colors">our new arrivals</Link> </p>
        </div>
    </div>
  )
}

export default Empty
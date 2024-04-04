"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";

const Navbar = () => {
    const { totalCartItems } = useAppSelector((state) => state.cart)
    const pathname = usePathname()
    const [isMenu, setIsMenu] = useState(false)
  return (
    <nav className='p-4 bg-white sticky top-0 z-50 shadow-sm'>
        <div className=' lg:w-4/5 mx-auto justify-between flex-item-center'>
            <section className='justify-between flex-item-center lg:gap-[10vw]'>
                <Link href="/" className='font-bold text-xl md:text-2xl'>TJ.FITS</Link>

                <ul className='hidden styrene400 text-gray-500 lg:flex menu-items items-center gap-8 capitalize text-sm'>
                    <li><Link href="/products" className={pathname === '/products' ? 'text-black underline' : 'text-inherit transition-all'}>shop</Link></li>
                    <li><Link href="/new-arrivals" className={pathname === '/new-arrivals' ? 'text-black underline' : 'text-inherit transition-all'}>new arrivals</Link></li>
                    <li><Link href="/contact" className={pathname === '/contact' ? 'text-black underline' : 'text-inherit transition-all'}>contact</Link></li>
                </ul>
            </section>

            <section className='hidden lg:flex items-center gap-6'>
                <Link href="/cart" className='text-black cursor-pointer text-sm'>CART({totalCartItems})</Link>
                <div className='flex-item-center gap-4'>
                    <button className='px-4 py-2 bg-black text-sm text-white font-medium rounded-sm hover:scale-90 transition-all'>LOGIN</button>
                    <p className='cursor-pointer hidden'>SIGN OUT</p>
                </div>
            </section>

            {
                isMenu && 
                <section className="lg:hidden absolute top-[100%] bg-white w-full border-y left-0 p-4 flex flex-col gap-4">
                    <ul className='styrene400 flex flex-col menu-items gap-4 capitalize'>
                        <li><Link href="/products" className={pathname === '/products' ? 'text-black underline' : 'text-inherit transition-all'}>shop</Link></li>
                        <li><Link href="/new-arrivals" className={pathname === '/new-arrivals' ? 'text-black underline' : 'text-inherit transition-all'}>new arrivals</Link></li>
                        <li><Link href="/contact" className={pathname === '/contact' ? 'text-black underline' : 'text-inherit transition-all'}>contact</Link></li>
                    </ul>
                    <Link href='/cart' className='text-black cursor-pointer'>CART({totalCartItems})</Link>
                    <div className='flex justify-end gap-4'>
                        <button className='px-6 py-2 bg-black text-white font-bold rounded-sm hover:scale-105 transition-all'>LOGIN</button>
                        <p className='cursor-pointer hidden'>SIGN OUT</p>
                    </div>
                </section>
            }

            <div className="lg:hidden">
                {
                    isMenu ? 
                    <svg onClick={() => setIsMenu(false)} xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                        <g fill="#2D314D" fillRule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g>
                    </svg>
                    :
                    <svg onClick={() => setIsMenu(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="11">
                        <g fill="#2D314D" fillRule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g>
                    </svg>
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar
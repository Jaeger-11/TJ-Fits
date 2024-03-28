"use client"
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false)
  return (
    <nav className='p-4 bg-white sticky top-0 z-50 shadow-sm'>
        <div className=' lg:w-4/5 mx-auto justify-between flex-item-center'>
            <section className='justify-between flex-item-center lg:gap-[10vw]'>
                <Link href="/" className='font-bold text-xl md:text-2xl'>TJ.FITS</Link>

                <ul className='hidden styrene400 text-gray-500 lg:flex menu-items items-center gap-8 capitalize text-sm'>
                    <li><Link href="/products">shop</Link></li>
                    <li>new arrivals</li>
                    <li><Link href="/contact">contact</Link></li>
                </ul>
            </section>

            <section className='hidden lg:flex items-center gap-6'>
                <div className='text-black cursor-pointer text-sm'>CART(3)</div>
                <div className='flex-item-center gap-4'>
                    <button className='px-4 py-2 bg-black text-sm text-white font-medium rounded-sm hover:scale-105 transition-all'>LOGIN</button>
                    <p className='cursor-pointer hidden'>SIGN OUT</p>
                </div>
            </section>

            {
                isMenu && 
                <section className="lg:hidden absolute top-[100%] bg-white w-full border-y left-0 p-4 flex flex-col gap-4">
                    <ul className='styrene400 flex flex-col menu-items gap-4 capitalize'>
                        <li>shop</li>
                        <li>new arrivals</li>
                        <li>contact</li>
                    </ul>
                    <div className='text-green-600 cursor-pointer'>CART(3)</div>
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
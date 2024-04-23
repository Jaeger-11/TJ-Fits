"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { auth } from "@/database/config";
import { signOut } from "firebase/auth";
import { useAppDispatch } from "@/lib/hooks";
import { logOut } from "@/lib/features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, updateNotification, closeNotification } from "@/lib/features/userSlice";
import { clearCart } from "@/lib/features/cartSlice";
import Toast from "./Toast";
import MotionDiv from "./MotionDiv";

const Navbar = () => {
    const dispatch = useAppDispatch();
    const { totalCartItems } = useAppSelector((state) => state.cart)
    const { username, email } = useAppSelector((state) => state.user)
    const pathname = usePathname()
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const [details, setDetails] = useState<boolean>(false);

    onAuthStateChanged(auth, (user) => {
        if(user){
            let userInfo = {email: user.email, username: user.displayName, uid: user.uid}
            dispatch(setUser(userInfo))
        } else {
            dispatch(logOut())
        }
    })

    const logout = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
            dispatch(clearCart())
            dispatch(logOut())
            setIsMenu(false)
            setDetails(false)
            dispatch(updateNotification({text:"User Successfully Signed Out!", imageUrl: 'show'}))
            setTimeout(() => {
                dispatch(closeNotification())
            }, 2000);
        }).catch((error) => {
        // An error happened.
        console.log(error)
        });
    }

  return (
    <MotionDiv 
    initial={{y:-50}}
    whileInView={{y:0, transition:{duration:1}}}
    className='p-4 bg-white sticky top-0 z-50 shadow-sm'>
         <Toast/>
        <div className=' lg:w-4/5 mx-auto justify-between flex flex-row-reverse items-center lg:flex-row'>
            <Link href='/cart' className='text-black cursor-pointer text-sm lg:hidden'>CART({totalCartItems})</Link>
            <section className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:static lg:translate-x-0 lg:translate-y-0  justify-between flex-item-center lg:gap-[10vw]'>
                <Link href="/" className='font-bold text-xl md:text-2xl'>TJ.FITS</Link>

                <ul className='hidden styrene400 text-gray-500 lg:flex menu-items items-center gap-8 capitalize text-sm'>
                    <li><Link href="/products" className={pathname === '/products' ? 'text-green-500 underline' : 'text-inherit transition-all hover:text-black'}>shop</Link></li>
                    <li><Link href="/new-arrivals" className={pathname === '/new-arrivals' ? 'text-green-500 underline' : 'text-inherit transition-all hover:text-black'}>new arrivals</Link></li>
                    <li><Link href="/contact" className={pathname === '/contact' ? 'text-green-500 underline' : 'text-inherit transition-all hover:text-black'}>contact</Link></li>
                </ul>
            </section>

            <section className='hidden lg:flex items-center gap-6'>
                <Link href="/cart" className='text-black cursor-pointer text-sm'>CART({totalCartItems})</Link>
                <div className='flex items-center gap-4'>
                    {email ?
                    <div className="flex gap-1 items-center justify-center relative w-max">
                        <div className={`${details ? ' h-max p-4 opacity-100' : 'p-0 h-0 opacity-0 pointer-events-none'} absolute transition-all top-[150%] bg-white shadow-md min-w-[200px] test-sm flex flex-col gap-3`}>
                            <p className="capitalize">{username || email}</p>
                            <Link href='/wishlist' className="text-green-500" onClick={() => setDetails(false)}>Your Wishlist</Link>
                            <p className='cursor-pointer text-gray-500 text-right w-max float-right' onClick={logout}>Log Out</p> 
                        </div>
                        <div onClick={() => setDetails(!details)} className="flex gap-1 items-center justify-center cursor-pointer">
                            <svg viewBox="0 0 24 24" className="w-8" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fillRule="evenodd" clipRule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM18.3775 17.2942C18.7303 17.8695 18.6055 18.63 18.0369 18.9935C17.5199 19.3241 16.9158 19.5265 16.3159 19.6598C15.2322 19.9006 13.8299 20 11.9998 20C10.1698 20 8.76744 19.9006 7.68381 19.6598C7.09516 19.529 6.50205 19.3319 5.99131 19.012C5.41247 18.6495 5.28523 17.8786 5.64674 17.2991C6.06303 16.6318 6.63676 16.1075 7.40882 15.7344C8.58022 15.1684 10.1157 15 11.9996 15C13.8771 15 15.4109 15.1548 16.5807 15.7047C17.3727 16.077 17.9572 16.6089 18.3775 17.2942Z" fill="#323232"></path> </g></svg>
                            <svg viewBox="0 0 24 24" className="w-4" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#292D32"></path> </g></svg>
                        </div>
                    </div> :
                     <Link href='/authentication' className='px-4 py-2 bg-black text-sm text-white font-medium rounded-sm hover:scale-90 transition-all'>LOGIN</Link>
                    }
                   
                </div>
            </section>

            {
                // isMenu && 
                <MotionDiv
                initial={isMenu ? {opacity:0, y:-20} : {opacity:1, y:0}}
                animate={isMenu ? {opacity:1, y:0, transition:{duration:0.4, ease:'easeIn'}} : {opacity:0, y:-300}} 
                className={`lg:hidden absolute top-[100%] bg-white w-full border-y left-0 p-4 flex flex-col gap-3`}>
                    <ul className='styrene400 flex flex-col menu-items gap-3 capitalize'>
                        <li><Link onClick={() => setIsMenu(false)} href="/products" className={pathname === '/products' ? 'text-green-500 underline' : 'text-inherit transition-all hover:text-gray-700'}>shop</Link></li>
                        <li><Link onClick={() => setIsMenu(false)} href="/new-arrivals" className={pathname === '/new-arrivals' ? 'text-green-500 underline' : 'text-inherit transition-all hover:text-gray-700'}>new arrivals</Link></li>
                        <li><Link onClick={() => setIsMenu(false)} href="/contact" className={pathname === '/contact' ? 'text-green-500 underline' : 'text-inherit transition-all hover:text-gray-700'}>contact</Link></li>
                    </ul>
                    
                    <div className='flex gap-3'>
                        {email ? 
                        <div className="flex flex-col w-full items-end gap-2">
                            <div className="flex items-center gap-1">
                                <svg viewBox="0 0 24 24" className="w-8" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fillRule="evenodd" clipRule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM18.3775 17.2942C18.7303 17.8695 18.6055 18.63 18.0369 18.9935C17.5199 19.3241 16.9158 19.5265 16.3159 19.6598C15.2322 19.9006 13.8299 20 11.9998 20C10.1698 20 8.76744 19.9006 7.68381 19.6598C7.09516 19.529 6.50205 19.3319 5.99131 19.012C5.41247 18.6495 5.28523 17.8786 5.64674 17.2991C6.06303 16.6318 6.63676 16.1075 7.40882 15.7344C8.58022 15.1684 10.1157 15 11.9996 15C13.8771 15 15.4109 15.1548 16.5807 15.7047C17.3727 16.077 17.9572 16.6089 18.3775 17.2942Z" fill="#323232"></path> </g></svg>
                                <p className="capitalize">{username || email}</p>
                            </div>
                            <Link href='/wishlist' className="text-green-500" onClick={() => setIsMenu(false)}>Your Wishlist</Link>
                            <p className='cursor-pointer text-gray-500 text-right w-max underline' onClick={logout}>Log Out</p>
                        </div> :
                        <Link href='/authentication' onClick={() => setIsMenu(false)} className='px-6 py-2 bg-black text-white font-bold rounded-sm hover:scale-105 transition-all'>LOGIN</Link>
                        }
                    </div>
                </MotionDiv>
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
    </MotionDiv>
  )
}

export default Navbar
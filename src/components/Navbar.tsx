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
    // initial={{y:-50}}
    // whileInView={{y:0, transition:{duration:1}}}
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
                        <div className={`${details ? ' h-max p-4 opacity-100' : 'p-0 h-0 opacity-0 pointer-events-none'} social-icons-nav [&_svg]:size-5 absolute transition-all top-[150%] bg-white shadow-md min-w-[250px] rounded-sm test-sm flex flex-col gap-3`}>
                            {/* <p className="capitalize">{username || email}</p> */}
                            <Link href='/wishlist' className="hover:text-green-500 flex items-center gap-2" onClick={() => setDetails(false)}>
                            <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000" stroke="#000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <path className="fill-[#0B1719]" d="M22,4c-2.393,0-4.534,1.056-6,2.721C14.534,5.056,12.393,4,10,4c-4.418,0-8,3.582-8,8 c0,6.11,6.452,11.298,10.596,14c1.285,0.838,2.349,1.437,2.929,1.75c0.299,0.161,0.652,0.161,0.951,0 c0.579-0.313,1.643-0.912,2.928-1.75C23.547,23.299,30,18.11,30,12C30,7.582,26.418,4,22,4z M16,26.869C13.664,25.601,3,19.406,3,12 c0-3.86,3.14-7,7-7c2.003,0,3.917,0.868,5.25,2.382L16,8.234l0.75-0.852C18.083,5.868,19.997,5,22,5c3.86,0,7,3.14,7,7 C29,19.406,18.336,25.601,16,26.869z M8,8c-1.105,0-2,0.895-2,2s0.895,2,2,2c1.105,0,2-0.895,2-2S9.105,8,8,8z M8,11 c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S8.551,11,8,11z"></path> </g></svg>
                            Your Wishlist
                            </Link>
                            <Link href={'/orders'} className="hover:text-green-500 flex items-center gap-2" onClick={() => setDetails(false)}> 
                            <svg viewBox="0 0 1024 1024" fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M959.018 208.158c0.23-2.721 0.34-5.45 0.34-8.172 0-74.93-60.96-135.89-135.89-135.89-1.54 0-3.036 0.06-6.522 0.213l-611.757-0.043c-1.768-0.085-3.563-0.17-5.424-0.17-74.812 0-135.67 60.84-135.67 135.712l0.188 10.952h-0.306l0.391 594.972-0.162 20.382c0 74.03 60.22 134.25 134.24 134.25 1.668 0 7.007-0.239 7.1-0.239l608.934 0.085c2.985 0.357 6.216 0.468 9.55 0.468 35.815 0 69.514-13.954 94.879-39.302 25.373-25.34 39.344-58.987 39.344-94.794l-0.145-12.015h0.918l-0.008-606.41z m-757.655 693.82l-2.585-0.203c-42.524 0-76.146-34.863-76.537-79.309V332.671H900.79l0.46 485.186-0.885 2.865c-0.535 1.837-0.8 3.58-0.8 5.17 0 40.382-31.555 73.766-71.852 76.002l-10.816 0.621v-0.527l-615.533-0.01zM900.78 274.424H122.3l-0.375-65.934 0.85-2.924c0.52-1.82 0.782-3.63 0.782-5.247 0-42.236 34.727-76.665 78.179-76.809l0.45-0.068 618.177 0.018 2.662 0.203c42.329 0 76.767 34.439 76.767 76.768 0 1.326 0.196 2.687 0.655 4.532l0.332 0.884v68.577z" fill=""></path><path d="M697.67 471.435c-7.882 0-15.314 3.078-20.918 8.682l-223.43 223.439L346.599 596.84c-5.544-5.603-12.95-8.69-20.842-8.69s-15.323 3.078-20.918 8.665c-5.578 5.518-8.674 12.9-8.7 20.79-0.017 7.908 3.07 15.357 8.69 20.994l127.55 127.558c5.57 5.56 13.01 8.622 20.943 8.622 7.925 0 15.364-3.06 20.934-8.63l244.247-244.247c5.578-5.511 8.674-12.883 8.7-20.783 0.017-7.942-3.079-15.408-8.682-20.986-5.552-5.612-12.958-8.698-20.85-8.698z" fill=""></path></g></svg>
                            Orders 
                            </Link>
                            <p className='cursor-pointer text-red-400 p-2 rounded-sm w-max transition-colors border hover:bg-red-400 hover:text-white' onClick={logout}>Log Out</p> 
                        </div>
                        <div onClick={() => setDetails(!details)} className="flex gap-1 items-center justify-center border px-1 shadow-sm cursor-pointer">
                            <svg viewBox="0 0 24 24" className="w-8" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fillRule="evenodd" clipRule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM18.3775 17.2942C18.7303 17.8695 18.6055 18.63 18.0369 18.9935C17.5199 19.3241 16.9158 19.5265 16.3159 19.6598C15.2322 19.9006 13.8299 20 11.9998 20C10.1698 20 8.76744 19.9006 7.68381 19.6598C7.09516 19.529 6.50205 19.3319 5.99131 19.012C5.41247 18.6495 5.28523 17.8786 5.64674 17.2991C6.06303 16.6318 6.63676 16.1075 7.40882 15.7344C8.58022 15.1684 10.1157 15 11.9996 15C13.8771 15 15.4109 15.1548 16.5807 15.7047C17.3727 16.077 17.9572 16.6089 18.3775 17.2942Z" fill="#323232"></path> </g></svg>
                            <p className="capitalize">{username || email}</p>
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
                initial={isMenu ? {opacity:0, y:-40} : {opacity:0, y:0}}
                animate={isMenu ? {opacity:1, y:0, transition:{duration:0.4, ease:'easeIn'}} : {opacity:0, y:-350}} 
                className={`lg:hidden absolute top-[100%] bg-white w-full border-y left-0 p-4 flex flex-col gap-3`}>
                    <ul className='styrene400 flex flex-col menu-items gap-3 capitalize'>
                        <li><Link onClick={() => setIsMenu(false)} href="/products" className={pathname === '/products' ? 'text-green-500 underline' : 'text-inherit transition-all hover:text-gray-700'}>shop</Link></li>
                        <li><Link onClick={() => setIsMenu(false)} href="/new-arrivals" className={pathname === '/new-arrivals' ? 'text-green-500 underline' : 'text-inherit transition-all hover:text-gray-700'}>new arrivals</Link></li>
                        <li><Link onClick={() => setIsMenu(false)} href="/contact" className={pathname === '/contact' ? 'text-green-500 underline' : 'text-inherit transition-all hover:text-gray-700'}>contact</Link></li>
                    </ul>
                    
                    <div className='flex gap-3'>
                        {email ? 
                        <div className="flex flex-col w-full border-t social-icons-nav pt-4 py-2 gap-3  font-styrene">
                            <Link href='/wishlist' className="hover:text-green-500 flex items-center gap-2" onClick={() => setIsMenu(false)}>
                                <svg version="1.1" className="size-5" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000" stroke="#000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <path className="fill-[#0B1719]" d="M22,4c-2.393,0-4.534,1.056-6,2.721C14.534,5.056,12.393,4,10,4c-4.418,0-8,3.582-8,8 c0,6.11,6.452,11.298,10.596,14c1.285,0.838,2.349,1.437,2.929,1.75c0.299,0.161,0.652,0.161,0.951,0 c0.579-0.313,1.643-0.912,2.928-1.75C23.547,23.299,30,18.11,30,12C30,7.582,26.418,4,22,4z M16,26.869C13.664,25.601,3,19.406,3,12 c0-3.86,3.14-7,7-7c2.003,0,3.917,0.868,5.25,2.382L16,8.234l0.75-0.852C18.083,5.868,19.997,5,22,5c3.86,0,7,3.14,7,7 C29,19.406,18.336,25.601,16,26.869z M8,8c-1.105,0-2,0.895-2,2s0.895,2,2,2c1.105,0,2-0.895,2-2S9.105,8,8,8z M8,11 c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S8.551,11,8,11z"></path> </g></svg>
                                Your Wishlist
                            </Link>
                            <Link href='/orders' className="hover:text-green-500 flex items-center gap-2" onClick={() => setIsMenu(false)}> 
                                <svg viewBox="0 0 1024 1024" className="size-5" fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M959.018 208.158c0.23-2.721 0.34-5.45 0.34-8.172 0-74.93-60.96-135.89-135.89-135.89-1.54 0-3.036 0.06-6.522 0.213l-611.757-0.043c-1.768-0.085-3.563-0.17-5.424-0.17-74.812 0-135.67 60.84-135.67 135.712l0.188 10.952h-0.306l0.391 594.972-0.162 20.382c0 74.03 60.22 134.25 134.24 134.25 1.668 0 7.007-0.239 7.1-0.239l608.934 0.085c2.985 0.357 6.216 0.468 9.55 0.468 35.815 0 69.514-13.954 94.879-39.302 25.373-25.34 39.344-58.987 39.344-94.794l-0.145-12.015h0.918l-0.008-606.41z m-757.655 693.82l-2.585-0.203c-42.524 0-76.146-34.863-76.537-79.309V332.671H900.79l0.46 485.186-0.885 2.865c-0.535 1.837-0.8 3.58-0.8 5.17 0 40.382-31.555 73.766-71.852 76.002l-10.816 0.621v-0.527l-615.533-0.01zM900.78 274.424H122.3l-0.375-65.934 0.85-2.924c0.52-1.82 0.782-3.63 0.782-5.247 0-42.236 34.727-76.665 78.179-76.809l0.45-0.068 618.177 0.018 2.662 0.203c42.329 0 76.767 34.439 76.767 76.768 0 1.326 0.196 2.687 0.655 4.532l0.332 0.884v68.577z" fill=""></path><path d="M697.67 471.435c-7.882 0-15.314 3.078-20.918 8.682l-223.43 223.439L346.599 596.84c-5.544-5.603-12.95-8.69-20.842-8.69s-15.323 3.078-20.918 8.665c-5.578 5.518-8.674 12.9-8.7 20.79-0.017 7.908 3.07 15.357 8.69 20.994l127.55 127.558c5.57 5.56 13.01 8.622 20.943 8.622 7.925 0 15.364-3.06 20.934-8.63l244.247-244.247c5.578-5.511 8.674-12.883 8.7-20.783 0.017-7.942-3.079-15.408-8.682-20.986-5.552-5.612-12.958-8.698-20.85-8.698z" fill=""></path></g></svg>
                                Orders 
                            </Link>
                            <div className="flex items-center justify-end gap-2">
                                <svg viewBox="0 0 24 24" className="w-8" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fillRule="evenodd" clipRule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM18.3775 17.2942C18.7303 17.8695 18.6055 18.63 18.0369 18.9935C17.5199 19.3241 16.9158 19.5265 16.3159 19.6598C15.2322 19.9006 13.8299 20 11.9998 20C10.1698 20 8.76744 19.9006 7.68381 19.6598C7.09516 19.529 6.50205 19.3319 5.99131 19.012C5.41247 18.6495 5.28523 17.8786 5.64674 17.2991C6.06303 16.6318 6.63676 16.1075 7.40882 15.7344C8.58022 15.1684 10.1157 15 11.9996 15C13.8771 15 15.4109 15.1548 16.5807 15.7047C17.3727 16.077 17.9572 16.6089 18.3775 17.2942Z" fill="#323232"></path> </g></svg>
                                <p className="capitalize">{username || email}</p>
                            </div>
                            <div className="flex justify-end">
                            <p className='cursor-pointer text-red-400 p-2 rounded-sm w-max transition-colors border hover:bg-red-400 hover:text-white' onClick={logout}>Log Out</p>
                            </div>
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
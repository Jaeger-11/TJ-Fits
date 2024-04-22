'use client'
import Link from "next/link";
import MotionDiv from "./MotionDiv";
import { useAppDispatch } from "@/lib/hooks";
import { updateNotification, closeNotification } from "@/lib/features/userSlice";
import { useState } from "react";

const Footer = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("")

    const validateEmail = (email:string) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
    
    const handleInput = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        let data = target.value
        if(validateEmail(data)){
            setEmail(data)
        }
    }

    const subscribeEmail = () => {
        if(email){
            dispatch(updateNotification({text:"Subscribed", imageUrl: 'show'}))
            setTimeout(() => {
                dispatch(closeNotification())
            }, 2000);
        }
    }

  return (
    <div
    className="bg-[#DDDDDD] p-4 py-8 lg:py-12">
        <MotionDiv 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:0.8, y:0, transition:{duration:1}}}
        className=' lg:w-4/5 mx-auto justify-between flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row'>
            <section className="flex gap-4">
                <div className="flex flex-col justify-between">
                    <Link href="/" className='font-bold text-xl md:text-2xl'>TJ.FITS</Link>
                    <section className="flex gap-1 md:gap-3 social-icons styrene400">
                        <a href="https://www.instagram.com/tjfits__/">
                            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="21" height="18"><path fill="#000" d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/tjfits__/">
                            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path fill="#000" d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"/></svg>
                        </a>
                    </section>
                </div>
                <section className="styrene400">
                    <h3 className="font-bold text-xs text-gray-500 uppercase">Company</h3>
                    <ul className="flex flex-col gap-2 mt-4 text-sm">
                        <Link href="/about" className="hover:text-green-500 hover:font-medium transition-all">About us</Link>
                        <Link href='/contact' className="hover:text-green-500 hover:font-medium transition-all">Contact us</Link>
                        <Link href="/privacy-policy" className="hover:text-green-500 hover:font-medium transition-all">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-green-500 hover:font-medium transition-all">Terms and Conditions</Link>
                    </ul>
                </section>
                <section>

                </section>
            </section>

            <section className="styrene400 lg:max-w-[25vw]">
                <h4 className="text-sm md:text-base mb-4">Get the latest news on our products from us</h4>

                <form >
                    <input onChange={handleInput} className="w-full p-2" type="email" name="email" id="email" placeholder="Enter your email address" />
                    <p className="text-sm md:text-sm my-2 ">By signing up, you agree to our <Link href='/privacy-policy' className="underline hover:text-green-500 hover:font-medium transition-all">Privacy Policy</Link> and <Link href='/terms-of-service' className="underline hover:text-green-500 hover:font-medium transition-all">Terms of Service.</Link> </p>
                    <button type="button" onClick={subscribeEmail} className="px-4 py-3 bg-black rounded-sm text-white text-sm hover:scale-95 transition-all">Subscribe</button>
                </form>
            </section>
        </MotionDiv>
    </div>
  )
}

export default Footer
"use client"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

export default function Back(){
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const goBack = () => {
        if(pathname.includes('/product')){
            router.replace('/products', undefined, { shallow: true });
        } else {
            router.back()
        }
    }
    return (
        <div className="cursor-pointer back styrene400 w-max flex items-end gap-1 mb-4 lg:mb-0" >
            <svg className="w-3 aspect-square rotate-90" xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
                <path d="M9.50002 12.8333L19 3.33334L16.625 0.958336L9.49998 8.08338L2.37499 0.958386L-4.15256e-07 3.33339L9.50002 12.8333Z" fill="#000" className="transition-all"></path>
            </svg>
            <h3 onClick={goBack} className="underline hover:text-green-500 transition-all">Back</h3>
        </div>
        
    )
}
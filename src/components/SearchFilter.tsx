"use client";
import { useSearchParams, useRouter } from "next/navigation";
const SearchFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    let search = ""
    const searchProducts = (value:string) => {
        search = value;
        const params = new URLSearchParams(searchParams);
        params.set("search", search)
        router.replace(`/products?${params.toString()}`);
    }
  return (
    <div className=" border-b-gray-500 border-b mb-2">
        <label htmlFor="search-product" className="flex items-end p-1 bg-white">
        <svg className="w-4 block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="rgb(107 114 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        <input onInput={(e:React.ChangeEvent<HTMLInputElement>) => searchProducts(e.target.value)} className="outline-0 px-2 flex-1 max-w-[90%] bg-transparent text-xs styrene400 placeholder:text-xs placeholder:styrene400" placeholder="Search Products" type="text" name="search" id="search-product" />
    </label>
</div>
  )
}

export default SearchFilter
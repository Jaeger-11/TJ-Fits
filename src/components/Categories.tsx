"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Categories = (data:{categories:any[]}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState<string>("");
    const selectFilter = (category:string) => {
        setFilter(category);
        const params = new URLSearchParams(searchParams)
        params.set("category",category)
        router.replace(`/products?${params.toString()}`)
    }
    return (
        <>
        <button onClick={() => selectFilter("")} className={`${filter === "" ? 'active-filter hover:bg-black hover:text-white' : 'hover:bg-white'} rounded-full border-gray-500 text-gray-500 border text-xs styrene400 py-0.5 px-2 transition-all hover:border-black  hover:scale-105 hover:text-black`}>All</button>
        {data.categories.map((category:{category:string}) => {
            return <button onClick={() => selectFilter(category.category)}  key={category.category} className={`${filter === category.category ? 'active-filter hover:bg-black hover:text-white' : 'hover:bg-white'} rounded-full border-gray-500 text-gray-500 border cursor-pointer text-xs styrene400 py-0.5 px-2 transition-all hover:border-black hover:scale-105 hover:text-black`}>{category.category}</button>
        })}
        </>
    )
}

export default Categories
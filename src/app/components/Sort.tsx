"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
const Sort = () => {
    const router = useRouter();
    const [selected, setSelected] = useState<string>("");
    const [menu, setMenu] = useState<boolean>(false);
    const sortOptions = [
        { name: "Sort By", value: "/products" },
        { name: "Newest", value: "/products/?date=desc" },
        { name: "Price, Lowest to Highest", value: "/products/?price=asc" },
        { name: "Price, Highest to Lowest", value: "/products/?price=desc" }
    ]
    const selectOption = (option:{name:string; value: string}) => {
        setSelected(option.name)
        router.replace(option.value)
        setMenu(false)
    }
  return (
    <section className="relative styrene400 text-xs ">
        <div className="w-full p-2 flex gap-1 justify-between items-center border-b cursor-pointer" onClick={() => setMenu(!menu)}> 
            <p className="">{selected ? selected : "Sort By"}</p> 
            <svg className={`w-2 aspect-square transition-all ${menu ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
                <path d="M9.50002 12.8333L19 3.33334L16.625 0.958336L9.49998 8.08338L2.37499 0.958386L-4.15256e-07 3.33339L9.50002 12.8333Z" fill="#000"></path>
            </svg>
        </div>
        <ul className={`w-full flex-col gap-1.5 text-gray-500 bg-white p-2 transition-all my-2 ${menu ? 'h-max': ' h-0 p-0 pointer-events-none text-transparent'}`}>
            {sortOptions.map((option) => {
                return <div className="py-1 cursor-pointer" onClick={() => selectOption(option)}>{option.name}</div>
            })}
        </ul>
    </section>
  )
}

export default Sort
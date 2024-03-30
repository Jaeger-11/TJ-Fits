"use client"
import Image from "next/image";
import { forUrl } from "../../sanity/lib/client";
import { useState } from "react";
export default function ImageGallery({images}:any){
    const [selected, setSelected] = useState(images[0]);
    return (
        <div className="flex gap-4">
            <section className="flex lg:max-w-20 flex-col gap-2 overflow-hidden">
                {images.map((image:any, id: number) => {
                    return (
                        <div className="bg-[#F5F4F4] rounded-md overflow-hidden">
                            <Image 
                            key={id}
                            width={200}
                            height={200}
                            className="shadow-sm cursor-pointer w-full opacity-80 aspect-square object-cover object-center hover:scale-110 transition-all"
                            alt="product"
                            src={forUrl(image).url()}
                            onClick={() => setSelected(images[id])}
                            />
                        </div>
                        
                    )
                })}
            </section>
            <section className="flex-1 overflow-hidden rounded-md bg-[#F5F4F4]">
                <Image
                width={500}
                height={500}
                alt="selected product image"
                src={forUrl(selected).url()}
                className="cursor-pointer w-full aspect-square object-cover object-center hover:scale-110 transition-all"
                />
            </section>
        </div>
    )
}
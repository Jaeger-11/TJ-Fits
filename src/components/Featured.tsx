import { getFeatured } from "../app/sanity-utils";
import { feature } from "../app/interfaces/interface";
import Image from "next/image";
import Link from "next/link";
import MotionDiv from "./MotionDiv";

const Featured = async () => {
    const data = await getFeatured();
  return (
    <div className="p-4 smd:p-6 py-8 bg-white md:py-8">
        <section className="lg:w-4/5 mx-auto">
            <p className="styrene400 md:w-2/3 line150 text-sm lg:text-base">
            Elevate your lifestyle with a more intelligent, superior wardrobe. 
            Our range is crafted sustainably with longevity in mind. Our carefully curated selection of clothing reflects the latest trends while embracing timeless elegance, allowing you to effortlessly elevate your wardrobe with pieces that speak to your individuality.
            </p>
            <div className="flex flex-col md:flex-row gap-4 lg:gap-8 justify-center my-6 lg:my-12 features">
                {
                    data.slice(0,3).map((feature:feature) => {
                        const { _id, imageUrl, name} = feature;
                        return (
                        <MotionDiv
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:0.8, y:0, transition:{duration:1}}}
                        whileHover={{scale:1.05}}
                        key={_id}
                        >
                            <Link href='/products' className="relative block aspect-[432/532] rounded-md overflow-hidden cursor-pointer transition-all lg:opacity-80 shadow-sm hover:opacity-100" key={_id}>
                                <Image
                                src={imageUrl}
                                alt={name}
                                width={500}
                                height={500}
                                className="h-full w-full object-cover object-center"
                                />
                                <p className="absolute bottom-5 left-5 styreneBold text-[#F5F4F4] capitalize text-base lg:text-lg text-shadow font-bold">{name}</p>
                            </Link>
                        </MotionDiv>
                        )
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default Featured;
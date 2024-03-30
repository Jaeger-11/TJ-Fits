import { getFeatured } from "../app/sanity-utils";
import { feature } from "../app/interfaces/interface";
import Image from "next/image";

const Featured = async () => {
    const data = await getFeatured();
  return (
    <div className="p-4 bg-white md:py-8">
        <section className="lg:w-4/5 mx-auto">
            <p className="styrene400 md:w-2/3 lg:w-1/2 line150 text-sm">
            Elevate your lifestyle with a more intelligent, superior wardrobe. 
            Our range is crafted sustainably with longevity in mind.
            </p>
            <div className="flex gap-8 justify-center my-12 features">
                {
                    data.slice(0,3).map((feature:feature) => {
                        const { _id, imageUrl, name} = feature;
                        return <div className="relative aspect-[432/532] rounded-md overflow-hidden cursor-pointer transition-all opacity-80 shadow-sm hover:opacity-100" key={_id}>
                            <Image
                            src={imageUrl}
                            alt={name}
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                            />
                            <p className="absolute bottom-5 left-5 styreneBold text-[#F5F4F4] capitalize text-base lg:text-lg text-shadow font-bold">{name}</p>
                        </div>
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default Featured;
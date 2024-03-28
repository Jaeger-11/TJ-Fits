import { forUrl } from "../../../sanity/lib/client"
import { getHeroContent, getHeroImages } from "../sanity-utils";
import Image from "next/image";
import Link from "next/link";

const Hero = async () => {
    const texts = await getHeroContent();
    const data = await getHeroImages();
    return (
        <div className="p-4 hero">
            <main className="lg:w-4/5 mx-auto flex justify-between">
                <article className="lg:py-[9rem] lg:max-w-[33vw]">
                    <h3 className="lg:w-2/3 capitalize text-xl lg:text-3xl mb-4 font-bold">{texts.heading}</h3>
                    <p className="line150 text-sm text-gray-500">{texts.text}</p>
                    <Link href="/products"><button className="styrene400 mt-4 bg-black text-white px-4 py-3 text-sm">Explore Now</button></Link>
                </article>

                <section className="lg:w-1/3 flex items-center relative">
                    <div className="absolute top-16 -left-[70%] w-full  overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
                        <Image 
                        src={forUrl(data[0].image).url()}
                        alt="hero-image"
                        className="h-full w-full object-cover object-center"
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Image 
                        src={forUrl(data[1].image).url()}
                        alt="hero-image"
                        className="h-full w-full object-cover object-center"
                        width={500}
                        height={500}
                        />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Hero;
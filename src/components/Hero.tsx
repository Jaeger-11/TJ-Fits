import { forUrl } from "../../sanity/lib/client"
import { getHeroContent, getHeroImages } from "../app/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import MotionDiv from "./MotionDiv";

const Hero = async () => {
    const texts = await getHeroContent();
    const data = await getHeroImages();
    return (
        <div className="p-4 py-8 lg:py-4 hero">
            <main className="lg:w-4/5 mx-auto flex gap-[5rem] md:gap-0 flex-col-reverse justify-between lg:flex-row">
                <MotionDiv 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0, transition:{duration:1}}}
                className="lg:py-[9rem] lg:max-w-[33vw]">
                    <h3 className="lg:w-2/3 capitalize text-2xl lg:text-3xl mb-4 font-bold">{texts.heading}</h3>
                    <p className="line150 text-sm text-gray-500">{texts.text}</p>
                    <Link href="/products"><button className="styrene400 mt-4 bg-black text-white px-4 py-3 text-sm transition-all rounded-sm hover:scale-95 hover:rounded-md">Explore Now</button></Link>
                </MotionDiv>

                <MotionDiv
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1, scale:1, transition:{duration:1}}}
                className="w-full lg:w-1/3 flex justify-end items-center relative">
                    <div 
                    className="w-3/5 absolute top-10 left-0 lg:top-16 lg:-left-[70%] lg:w-full  overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
                        <Image 
                        src={forUrl(data[0].image).url()}
                        alt="hero-image"
                        className="h-full w-full object-cover object-center"
                        width={500}
                        height={500}
                        /> 
                    </div>
                    <div className="w-3/5 lg:w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Image 
                        src={forUrl(data[1].image).url()}
                        alt="hero-image"
                        className="h-full w-full object-cover object-center"
                        width={500}
                        height={500}
                        />
                    </div>
                </MotionDiv>
            </main>
        </div>
    )
}

export default Hero;
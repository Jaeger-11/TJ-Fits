import Image from "next/image"

export default function About() {

    return(
        <div className="p-4">
            <section className="lg:w-4/5 mx-auto">
            <h2 className="w-full lg:text-xl text-center uppercase styreneBold">About us</h2>
            <article className="md:w-4/5 lg:w-3/5 mx-auto my-4 flex flex-col gap-4">
                <article className="grid md:grid-cols-1 gap-3">
                    <div className="">
                        <Image
                        width={400}
                        height={400}
                        alt="store"
                        className="h-full w-full object-cover object-center"
                        src='https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />
                    </div>
                    <section>
                        <h4 className="text-sm md:text-base">
                        Welcome to TJ.fits, your premier destination for stylish and trendy women&apos;s clothing! Founded with a passion for fashion and a commitment to empowering women to express their unique style, we strive to offer a curated collection of high-quality apparel that caters to diverse tastes and preferences.
                        <br /> <br />At TJ.fits, we believe that fashion is more than just clothing—it&apos;s a form of self-expression, confidence, and empowerment.
                        </h4>
                        <ul className="text-sm md:text-base">
                            <p  className="font-semibold my-2">Our Mission:</p>
                            <li className="list-disc ml-4">
                            To provide women with access to fashionable and affordable clothing that makes them feel confident and beautiful.
                            </li>
                            <li className="list-disc ml-4">
                            To foster a community where women can express themselves through style and support one another in their fashion journey.
                            </li>
                            <li className="list-disc ml-4">
                            To prioritize sustainability and ethical practices in our sourcing and manufacturing processes, contributing to a more eco-conscious fashion industry.
                            </li>
                        </ul>
                    </section>
                </article>
                <article className="grid md:grid-cols-1 gap-3 text-sm md:text-base">
                    <div className="">
                        <Image
                        width={400}
                        height={400}
                        alt="store"
                        className="h-full w-full object-cover object-center"
                        src='https://plus.unsplash.com/premium_photo-1682088165391-621728d24eb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />
                    </div>
                    <section>
                        <ul className="">
                            <p  className="font-semibold my-2">What Sets Us Apart:</p>
                            <li className="list-disc ml-4">
                                <span className="font-medium">Curated Selection:</span><br />
                                Our team of fashion enthusiasts handpicks each item in our collection, ensuring that every piece meets our standards of quality, style, and versatility.                            
                            </li>
                            <li className="list-disc ml-4">
                                <span className="font-medium">Exceptional Customer Service:</span><br />
                                We are dedicated to providing a seamless shopping experience and personalized assistance to our customers. Your satisfaction is our top priority.                            
                            </li>
                            <li className="list-disc ml-4">
                                <span className="font-medium">Style Inspiration:</span><br />
                                Explore our blog and social media channels for fashion tips, outfit ideas, and exclusive behind-the-scenes content to inspire your style journey.
                            </li>
                        </ul>
                        <p className="mt-4 text-green-500">Join us in celebrating the beauty of individuality, confidence, and style!</p>
                    </section>
                </article>
            </article>
            </section>
        </div>
    )
}
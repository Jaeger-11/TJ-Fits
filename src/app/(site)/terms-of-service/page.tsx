import Back from "@/components/Back"
export default function Terms() {
    return (
        <div className="p-4">
            <section className="lg:w-4/5 mx-auto">
                <h2 className="w-full lg:text-xl text-center uppercase styreneBold">Terms Of Service</h2>
                <article className="md:w-4/5 lg:w-3/5 mx-auto my-4">
                    <ul className="text-sm md:text-base flex flex-col gap-2">
                    By using our website, you agree to comply with these Terms of Service. Please read them carefully before accessing or using our website.
                    <li className="list-decimal">
                    <span className="font-semibold mb-1">Account Registration:</span> <br />
                    You may be required to create an account to access certain features of our website. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </li>
                    <li className="list-decimal">
                    <span className="font-semibold mb-1">Product Information: </span> <br />
                    We make every effort to accurately display product images and descriptions. However, we cannot guarantee that your computer monitor&apos;s display will accurately represent the products.
                    </li>
                    <li className="list-decimal">
                    <span className="font-semibold mb-1">Pricing and Payment:</span><br />
                    Prices are listed in naira and are subject to change without notice. Payment is due at the time of purchase, and we accept bank transfers, cards as listed on the payment page.
                    </li>
                    <li className="list-decimal">
                    <span className="font-semibold mb-1">Shipping:</span> <br />
                    We offer shipping to only Lagos state, Nigeria at the moment. Shipping times may vary depending on your location and chosen shipping method.
                    </li>
                    <li className="list-decimal">
                    <span className="font-semibold mb-1">Returns and Exchanges:</span> <br />
                    Please refer to our Returns and Exchanges Policy for information on returning or exchanging products.
                    </li>
                    <li className="list-decimal">
                    <span className="font-semibold mb-1">Intellectual Property:</span> <br />
                    All content on this website, including text, images, logos, and graphics, is the property of TJ.Fits and is protected by copyright and other intellectual property laws.
                    </li>
                    </ul>
                </article>
                <Back/>
            </section>
        </div>
    )
}
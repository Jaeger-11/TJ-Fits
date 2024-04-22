import Back from "@/components/Back"
export default function PrivacyPolicy() {
    return (
        <div className="p-4">
            <section className="lg:w-4/5 mx-auto">
                <h2 className="w-full lg:text-xl text-center uppercase styreneBold">Privacy Policy</h2>
                <article className="md:w-4/5 lg:w-3/5 mx-auto my-4">
                    <ul className="text-sm md:text-base flex flex-col gap-2 ">
                    TJ.Fits respects your privacy and is committed to protecting it. This Privacy Policy outlines the types of personal information we collect when you use our website, how we use and safeguard that information, and your rights regarding your personal data                    
                        <p className="mt-3 mb-1 font-semibold">Information We Collect:</p>
                        <li className="list-disc">
                        Personal information such as your name, email address, shipping address, and payment details when you make a purchase.
                        </li>
                        <li className="list-disc">
                        Information collected automatically through cookies and similar tracking technologies, such as your IP address, browsing behavior, and device information.
                        </li>
                        <li className="list-disc">
                        Information you voluntarily provide when contacting customer support or participating in surveys or promotions.
                        </li>
                        <p className="my-2">How We Use Your Information:</p>
                        <li className="list-disc">
                        To process and fulfill your orders and provide customer support.                    
                        </li>
                        <li className="list-disc">
                        To communicate with you about your orders, products, promotions, and updates.                    
                        </li>
                        <li className="list-disc">
                        To personalize your shopping experience and improve our website.                    
                        </li>
                        <li className="list-disc">
                        To detect and prevent fraud and unauthorized transactions.                   
                        </li>
                        <li className="list-disc">
                        To comply with legal obligations.                  
                        </li>
                        <p className="my-2">
                            <span className="font-semibold">Data Security:</span> <br />
                            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                        </p>
                        <p className="my-2">
                            <span className="font-semibold">Third-Party Services:</span> <br />
                            We may use third-party service providers to assist with payment processing, shipping, and analytics. These service providers have access to your personal information only to perform their services on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>
                        <p className="my-2">
                            <span className="font-semibold">Your Rights:</span> <br />
                            You have the right to access, correct, or delete your personal information. You may also opt-out of receiving marketing communications from us at any time  
                        </p>
                        <p className="my-2">
                            <span className="font-semibold">Changes to This Privacy Policy:</span> <br />
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.                    
                        </p>
                    </ul>
                </article>
                <Back/>
            </section>
        </div>
    )
}
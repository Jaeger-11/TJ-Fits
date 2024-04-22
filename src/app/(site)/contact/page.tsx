import Back from "@/components/Back";

export default function Contact(){
    return (
        <div className="p-4">
            <section className="lg:w-4/5 mx-auto">
                <h2 className="w-full text-center lg:text-xl uppercase styreneBold">Contact</h2>
                <article className="text-sm md:text-base md:w-4/5 lg:w-3/5 mx-auto my-4 flex flex-col gap-2 lh-large">
                    <p>Thank you for visiting TJ.fits! We&apos;re here to assist you with any questions or concerns you may have. Please feel free to reach out to us using the contact information below, and we&apos;ll get back to you as soon as possible.</p>
                    <div>
                        <h3 className="font-semibold mb-1">Customer Service Hours:</h3>
                        <p>Monday - Saturday: 9:00 AM - 5:00 PM GMT +1</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Contact Information:</h3>
                        <p>Email: tj.fits@gmail.com</p>
                        <p>Phone: 08139017478</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Mailing Address:</h3>
                        <p>Lekki Phase 1, No 14 Armando Close.</p>
                        <p>Lagos</p>
                    </div>
                    <p>We strive to provide exceptional customer service and are dedicated to ensuring your shopping experience with us is enjoyable. Whether you have inquiries about our products, assistance with an order, or simply want to share feedback, we&apos;re here to help.</p>
                    <div>
                        <h3 className="font-semibold mb-1">Stay connected with us on social media for the latest updates, promotions, and style inspiration:</h3>
                        <a href="https://www.instagram.com/tjfits__/" className="text-green-500 underline">Twitter</a><br />
                        <a href="https://www.instagram.com/tjfits__/" className="text-green-500 underline">Instagram</a>
                    </div>
                    <p>Thank you for choosing TJ.fits. We look forward to serving you!</p>
                </article>
                <Back/>
            </section>
        </div>
    )
}
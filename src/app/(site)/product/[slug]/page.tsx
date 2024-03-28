import Back from "@/app/components/Back"
import ImageGallery from "@/app/components/ImageGallery"
import { product } from "@/app/interfaces/interface"
import { getProduct } from "@/app/sanity-utils"

export default async ({params}: {
    params: {slug: string}
}) => {
    const product = await getProduct(params.slug)
    const {name, description, images, price, category}:product = product;
  return (
    <div className="p-4 bg-white">
        <Back/>
        <section className="lg:w-4/5 mx-auto">
            <div className="grid gap-4 md:grid-cols-2">
                <ImageGallery images={images} />
                <article className="flex flex-col gap-4 py-4">
                    <div>
                        <span className="text-gray-500 text-sm">{category}</span>
                        <h3 className="text-xl styreneBold font-bold capitalize">{name}</h3>
                        <div>

                        </div>
                    </div>

                </article>
            </div>
        </section>
    </div>
  )
}
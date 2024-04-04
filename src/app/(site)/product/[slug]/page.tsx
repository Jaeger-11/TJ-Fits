import Back from "@/components/Back"
import ImageGallery from "@/components/ImageGallery"
import { product } from "@/app/interfaces/interface"
import { getProduct, currencyFormat } from "@/app/sanity-utils"
import AddButton from "@/components/AddButton"

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
                <article className="flex flex-col gap-3 lg:gap-5  py-4 relative">
                    <div className="absolute right-0 top-0 rating  px-2 mt-2 styrene400 text-xs flex gap-1 items-center w-max rounded-full bg-black text-white">
                        <p>4.5</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 aspect-square" width="26" height="24" viewBox="0 0 26 24" fill="none">
                            <path d="M13 10.875H16L19.375 11.3125L15 12L13 10.875L11 12L6.625 11.2812L13 10.875ZM5.28125 24L7.3125 15.2188L0.5 9.3125L9.5 8.53125L13 0.25L16.5 8.53125L25.5 9.3125L18.6875 15.2188L20.7188 24L13 19.3438L5.28125 24Z" fill="#FFCC16"/>
                        </svg>
                    </div>
                    <section>
                        <span className="text-gray-500 text-sm">{category}</span>
                        <h3 className="text-2xl styreneBold font-bold capitalize">{name}</h3>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold" style={{lineHeight:1.2}}>&#8358;{currencyFormat(price)}</h3>
                        <p className="text-[10px] text-gray-500 ">Incl. VAT plus shipping</p>
                        <div className="flex items-center gap-1 italic text-[10px] mt-2 text-gray-500">
                            <svg width={15} fill="rgb(107 114 128)" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M37.164062 9C35.776026 9 34.510655 9.3013275 33.511719 9.859375C32.988328 10.151763 32.515961 10.541523 32.181641 11.013672 A 1.0001 1.0001 0 0 0 32 11L27 11 A 1.0001 1.0001 0 1 0 27 13L31.744141 13C31.8002 13.266576 31.898056 13.517555 32.03125 13.75 A 1.0001 1.0001 0 0 0 32.015625 14.179688C32.988434 19.530138 32.72952 25.149528 31.335938 29.306641C30.639146 31.385197 29.661456 33.087325 28.478516 34.234375C27.295576 35.381425 25.942196 36 24.267578 36C23.14423 36 22.237532 35.240694 21.890625 33.435547C21.543718 31.6304 21.955647 28.844708 23.869141 25.496094 A 1.0001 1.0001 0 0 0 23.931641 25.361328C24.316967 25.240604 24.678959 25.104473 24.994141 24.916016C25.478772 24.626238 26.005859 24.113335 26.005859 23.367188C26.005859 22.669659 25.835925 21.975755 25.525391 21.353516C25.370124 21.042396 25.180417 20.748361 24.902344 20.490234C24.62427 20.232108 24.213494 19.994141 23.716797 19.994141L14.28125 19.994141C14.182933 19.994141 14.091091 20.010399 14 20.027344L14 14 A 1.0001 1.0001 0 0 0 13 13L2 13 A 1.0001 1.0001 0 0 0 1 14L1 24 A 1.0001 1.0001 0 1 0 1 26L9.6640625 26C5.5053486 28.756038 4.0507813 32.683594 4.0507812 32.683594 A 1.0001 1.0001 0 0 0 4.7246094 33.960938L6.9023438 34.583984C6.3345384 35.595724 6 36.761065 6 38C6 41.854334 9.1456661 45 13 45C16.854334 45 20 41.854334 20 38L24.267578 38L32.060547 38C32.179715 38.986751 32.484448 39.717662 32.982422 40.226562C33.636252 40.89474 34.488004 41 35 41C35.218658 41 35.425951 40.949517 35.623047 40.876953C36.723498 43.307626 39.169773 45 42 45C45.853698 45 49 41.853698 49 38C49 37.195185 48.849318 36.425861 48.597656 35.703125C48.954075 35.603867 49.335495 35.406193 49.599609 35.060547C49.900433 34.666813 50 34.186166 50 33.720703C50 33.240869 49.875943 32.847389 49.623047 32.275391C49.370151 31.703392 48.970149 31.038348 48.363281 30.400391C47.229681 29.208715 45.34262 28.162063 42.585938 28.027344C42.525187 22.544809 39.819751 18.179454 38.097656 15.943359C38.396238 15.902164 38.671967 15.836607 38.927734 15.740234C39.428973 15.551366 39.862484 15.206717 40.117188 14.791016C40.626593 13.959613 40.509766 13.158415 40.509766 12.498047C40.509766 11.839768 40.626373 11.04221 40.117188 10.210938C39.862595 9.7953008 39.429108 9.4488016 38.927734 9.2597656C38.426361 9.0707297 37.857706 8.9997194 37.164062 9 z M 37.164062 11 A 1.0001 1.0001 0 0 0 37.166016 11C37.708372 10.999781 38.050639 11.068691 38.220703 11.132812C38.390767 11.196933 38.389452 11.216922 38.412109 11.253906C38.457419 11.327886 38.509766 11.778326 38.509766 12.498047C38.509766 13.219679 38.457209 13.672497 38.412109 13.746094C38.389559 13.782894 38.390899 13.803054 38.220703 13.867188C38.050459 13.931319 37.706618 14 37.164062 14C36.621082 14 36.10646 13.936107 35.650391 13.828125C35.642762 13.826319 35.636502 13.824096 35.628906 13.822266L34.865234 13.566406C34.732587 13.510803 34.597787 13.456831 34.486328 13.394531C33.865379 13.047451 33.6875 12.70423 33.6875 12.498047C33.6875 12.293566 33.865264 11.952421 34.486328 11.605469C35.107392 11.258516 36.0781 11 37.164062 11 z M 3 15L12 15L12 23.269531C11.999257 23.302165 11.994141 23.334532 11.994141 23.367188C11.994141 23.383055 11.999522 23.398228 12 23.414062L12 24L3 24L3 15 z M 34.095703 15.419922L34.164062 15.443359C34.419392 15.547893 34.687824 15.635542 34.966797 15.710938L35.400391 15.855469C35.603266 16.064068 40.416852 21.211285 40.486328 28.125C36.33626 28.755066 32.596901 31.894476 32.066406 36L29.382812 36C29.534032 35.871631 29.727656 35.810961 29.871094 35.671875C31.36306 34.225175 32.462588 32.239803 33.232422 29.943359C34.626475 25.784844 34.808484 20.562233 34.095703 15.419922 z M 14.439453 22.005859L23.560547 22.005859C23.598267 22.047929 23.658837 22.120163 23.724609 22.251953C23.854125 22.511473 23.92226 22.886315 23.951172 23.193359C23.762075 23.304956 23.361888 23.460906 22.830078 23.585938C21.757049 23.83821 20.167583 23.994141 18.435547 23.994141C16.704636 23.994141 15.413577 23.831872 14.671875 23.603516C14.308545 23.491653 14.096642 23.361921 14.021484 23.298828C14.034504 22.980653 14.131328 22.540778 14.275391 22.251953C14.341151 22.120114 14.401762 22.047935 14.439453 22.005859 z M 14.193359 26L18.15625 26C18.252521 26.000837 18.336896 26.005859 18.435547 26.005859C18.534824 26.005859 18.628203 26.000868 18.726562 26L21.527344 26C20.112855 29.001093 19.524751 31.727674 19.925781 33.814453C20.087601 34.656491 20.441432 35.36725 20.867188 36L19.140625 36L6.484375 32.384766C7.0140076 31.131905 8.7498356 27.597205 14.193359 26 z M 42 30C44.618246 30 46.053799 30.874962 46.914062 31.779297C47.344195 32.231464 47.624615 32.703202 47.792969 33.083984C47.961323 33.464767 48 33.840037 48 33.720703C48 33.812653 48.007306 33.76497 48.003906 33.78125C47.812448 33.81052 47.200239 33.77275 46.392578 33.65625C44.730245 33.416369 42.244663 33.027822 39.628906 34.070312 A 1.0001 1.0001 0 0 0 39.628906 34.072266C37.384303 34.968985 36.320563 36.506059 35.734375 37.640625C35.441281 38.207908 35.232494 38.674093 35.091797 38.880859C34.951106 39.087577 35.072978 39 35 39C34.701996 39 34.553826 38.974948 34.410156 38.828125C34.267292 38.682125 34.00296 38.227374 34 37.017578C34.042301 35.545163 34.61662 34.207109 35.513672 33.095703C37.040517 31.251351 39.519935 30 42 30 z M 8.8339844 35.134766L11.113281 35.787109C10.461821 36.339358 10 37.088037 10 38C10 39.64497 11.35503 41 13 41C14.64497 41 16 39.64497 16 38C16 37.639611 15.73216 37.393621 15.613281 37.072266L17.980469 37.748047C17.984719 37.832637 18 37.914271 18 38C18 40.773666 15.773666 43 13 43C10.226334 43 8 40.773666 8 38C8 37.054661 8.2605192 36.177234 8.7128906 35.425781 A 1.0001 1.0001 0 0 0 8.8339844 35.134766 z M 43.441406 35.390625C44.388158 35.394776 45.289306 35.518661 46.107422 35.636719C46.216447 35.652451 46.312533 35.661776 46.417969 35.677734C46.78446 36.372266 47 37.156089 47 38C47 40.772302 44.772302 43 42 43C39.661758 43 37.727993 41.399855 37.173828 39.246094C37.28571 39.017046 37.391354 38.787779 37.509766 38.558594C37.914189 37.775833 38.400152 36.996821 39.5 36.355469C39.185732 36.829379 39 37.394292 39 38C39 39.64497 40.35503 41 42 41C43.64497 41 45 39.64497 45 38C45 36.878997 44.362894 35.905249 43.441406 35.390625 z M 13 37C13.56503 37 14 37.43497 14 38C14 38.56503 13.56503 39 13 39C12.43497 39 12 38.56503 12 38C12 37.43497 12.43497 37 13 37 z M 42 37C42.56503 37 43 37.43497 43 38C43 38.56503 42.56503 39 42 39C41.43497 39 41 38.56503 41 38C41 37.43497 41.43497 37 42 37 z"></path></g></svg>
                            <p>1-2 days delivery across Nigeria</p>
                        </div>
                    </section>
                    <section className="flex gap-2">
                        <AddButton product={product}/>
                        <button className=" text-xs capitalize transition-all text-gray-500 hover:text-black">Checkout now</button>
                    </section>
                    <p className="line150 text-sm">{description ? description : ""}</p>
                </article>
            </div>
        </section>
    </div>
  )
}
import React from 'react'
import Back from '@/components/Back'

const loading = () => {
  return (
    <div className="p-4 bg-white">
        <Back/>
        <section className="lg:w-4/5 mx-auto">
            <div className="grid gap-4 md:grid-cols-2">
                {/* <ImageGallery images={images} /> */}
                <article className="flex flex-col gap-3 lg:gap-5  py-4 relative">
                    
                    <section>
                        <span className="bg-gray-500 text-sm"></span>
                        <h3 className="text-2xl styreneBold font-bold capitalize"></h3>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold bg-gray-500" style={{lineHeight:1.2}}></h3>
                        <p className="text-[10px] bg-gray-500 "></p>
                    </section>
                    <section className="flex gap-2 items-center bg-gray-500">
                    </section>
                    <p className="line150 text-sm bg-gray-500 w-full"></p>
                </article>
            </div>
        </section>
    </div>
  )
}

export default loading
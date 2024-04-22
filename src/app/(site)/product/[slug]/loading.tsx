import React from 'react'
import Back from '@/components/Back'

const loading = () => {
  return (
    <div className="p-4 bg-white">
        <Back/>
        <section className="lg:w-4/5 mx-auto">
            <div className="grid gap-4 md:grid-cols-2">
                <div className='w-4/5 aspect-square bg-[#dddddd] rounded-md'></div>
                <article className="flex flex-col gap-3 lg:gap-5  py-4 relative">
                    <h2 className='bg-[#dddddd] h-4 rounded-sm w-full my-4'></h2>
                    <h2 className='bg-[#dddddd] h-4 rounded-sm w-full my-4'></h2>
                    <button className='bg-[#dddddd] h-6 rounded-sm w-12 my-4'></button>
                </article>
            </div>
        </section>
    </div>
  )
}

export default loading
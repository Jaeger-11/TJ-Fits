import React from 'react'

const Loading = () => {
  return (
    <section className='w-full h-[50vh] flex flex-col gap-8 items-center justify-center'>
        <h2 className="text-xl text-center font-bold sm:text-2xl md:text-3xl styreneBold"> TJ.<span className="text-green-500">FITS</span></h2>
            <div className='flex flex-col gap-4'>
                <div className="loader"></div> 
            </div>
    </section>
  )
}

export default Loading
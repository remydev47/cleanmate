import React from 'react'

const Steps = () => {
  return (
    <section className="py-10  bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
            <p className="mx-auto mt-4 text-5xl font-bold leading-relaxed text-black">
              Lets Go Step by Step
            </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
            

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-yellow-300 border-2 border-gray-200 rounded-full shadow">
                        <span className="text-2xl font-bold text-gray-700">
                           <img src="/images/icon1.png" className='h-20 w-20' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-black md:mt-10">Meet Your Cleaning Expert</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">Bug Up all your Dirty Clothes</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-yellow-300 border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-bold text-gray-700">
                          <img src="/images/icon2-1.png" className='h-20 w-20' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-black md:mt-10">Choose A Service</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">We pick-Up your Clothes</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-yellow-300 border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-bold text-gray-700">
                         <img src="/images/icon3.png" className='h-20 w-20' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-black md:mt-10">Order a Cleaner</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">We Clean your Clothes.</p>
                </div>

            </div>
        </div>
    </div>
 </section>
  )
}

export default Steps
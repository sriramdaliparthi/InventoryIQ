import React from 'react'
import BannerCard from '../home/BannerCard'


const Banner = () => {
  const handleSearch = () => {
    window.location.href = '/store' ; };
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row  justify-between items-center gap-12 py-40'>

            <div className='md:w-1/2 space-y-6 h-full'>
                 <div className='text-5xl font-bold leading-snug text-black'>
                 <h2 className='text-5xl font-bold leading-snug text-black'>Your <b className='text-blue-700'>BEST</b> Merchandiser</h2>
                <h1 className='md:w-4/5' style={{"fontSize":"20px"}}>Experience the <b style={{"fontSize":"25px"}}>FUTURE</b> of Inventory Management <b className='text-blue-700' style={{"fontSize":"25px"}}>TODAY!</b></h1>
                </div>
                <div> 
               <button className=' bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200' onClick={handleSearch}>Shop Now</button>
</div>

            </div>

            <div>
              <BannerCard/>
            </div>
        </div>
      
    </div>
  )
}

export default Banner

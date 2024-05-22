import React from 'react'
import img from '../assets/asset 9.jpeg'
function Page2() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.1'  className='w-full p-20 text-black leading-[3vw] rounded-tl-3xl rounded-tr-3xl bg-[#cdea68] flex flex-col items-center overflow-hidden font-neue '>
    <h1 className='text-7xl  '>
    Services We Are Offering.
    </h1>
    <h3 className='pt-12 text-center text-xl font-medium pb-14'>
    "At Suvidha Overseas, we offer a comprehensive range of free services to ensure your smooth transition to international education"   </h3>
    <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
    <div className='w-1/2'>
<h1 className='text-7xl'>Our Approach</h1>
<button className="flex uppercase gap-10 px-10 py-6 items-center bg-zinc-900 text-white rounded-full mt-10 relative  text-base font-semibold  overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 group"
     >Read More
<div className='w-2 h-2 bg-slate-100 rounded-full transition-all duration-300 transform group-hover:scale-[6]'>
    </div></button>

    </div>
    <div className=''  >
<img src={img} alt='' className='h-[70vh] w-auto rounded-3xl transition-all duration-300 hover:scale-110"> '></img>
</div>
</div>


</div>
 

  )
}

export default Page2

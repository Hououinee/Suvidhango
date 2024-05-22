import React from 'react';
import logo1 from '../assets/asset 31.webp';
import logo2 from '../assets/asset 32.webp';
import logo3 from '../assets/asset 33.webp';
import logo4 from '../assets/asset 34.webp';
import logo5 from '../assets/asset 35.webp';
import logo6 from '../assets/asset 36.webp';
import logo7 from '../assets/asset 37.webp';
import logo8 from '../assets/asset 38.webp';
import { motion } from "framer-motion"

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

function Page() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004d43] flex items-center overflow-hidden '>
      <div className='flex justify-betwe32  w-full max-w-screen-lg  '>
        {logos.map((logo, index) => (
          <motion.img key={index} initial={{ x: "0%" }} animate={{ x: "-200%" }} transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className='h-32 w-auto pr-10' src={logo} alt='' />
        ))}
        {logos.map((logo, index) => (
        <motion.img key={index} initial={{ x: "0%" }} animate={{ x: "-200%" }} transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className='h-32 w-auto pr-10' src={logo} alt='' />
      ))}
      {logos.map((logo, index) => (
        <motion.img key={index} initial={{ x: "0%" }} animate={{ x: "-200%" }} transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className='h-32 w-auto pr-10' src={logo} alt='' />
      ))}
      </div>
    </div>
  );
}

export default Page;

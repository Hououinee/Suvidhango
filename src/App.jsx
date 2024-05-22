import React from 'react';

import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Page from './components/Page';
import About from './components/About';
import Page2 from './components/Page2';
import LocomotiveScroll from 'locomotive-scroll';


const app = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full m-h-screen  text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Page />
      <Page2 />
      <About />
    </div>
  )
}
export default app

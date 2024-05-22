import React, { useEffect, useState, useRef } from "react";
import img from '../assets/asset 6.jpeg';
import img1 from '../assets/asset 7.jpeg';
import { TimelineMax } from "gsap";

function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const imagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tl = new TimelineMax({ paused: true });

    tl.fromTo(imagesRef.current, { y: -50, autoAlpha: 0 }, { y: 0, autoAlpha: isScrolled ? 1 : 0, duration: 1 });

    tl.play();
  }, [isScrolled]);

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.1' className="w-full min-h-screen bg-zinc-900 flex flex-col">
      <div className="flex flex-col mt-28 pt-20 pb-10 px-20 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0">
          <div
            className="uppercase font-founders font-semibold leading-[4.5vw] text-[5vw] text-center lg:text-left"
          >
            <h1>Launch Your Overseas</h1>
            <h1>Education Journey:</h1>
            <h1>Get Started with</h1>
            <h1>Free Consultation</h1>
          </div>
          <div className="flex space-x-4 justify-center pr-10" ref={imagesRef}>
            <img
              src={img}
              alt="Image 1"
              className="w-[40vw] rounded-3xl h-[40vw] max-w-[300px] max-h-[300px] object-cover"
            />
            <img
              src={img1}
              alt="Image 2"
              className="w-[40vw] rounded-3xl h-[40vw] max-w-[300px] max-h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="font font-semibold mb-10 ml-20 text-2xl font-neue text-center lg:text-left">
        <p>Dream, Explore, Achieve: Your Journey to Global Education Begins with Us</p>
      </div>
      <div className="mb-46 ml-20 pb-10 text-center lg:text-left">
        <button
          className="flex uppercase gap-10 px-10 py-3 items-center bg-zinc-700 rounded-full mt-10 relative  text-base font-semibold  overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-teal-800 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          <a href="https://forms.gle/2wMJbf4Eifi3etMS8" alt=''>
            Start Your Journey For Free
          </a>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

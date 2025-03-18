import heroFirstImg from '../assets/heroFirstImg.jpg';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    // Start animation when the component mounts
    setAnimateText(true);
  }, []);

  return (
    <section className="relative w-full h-[85vh]">
      {/* Image - Using object-cover to ensure it fills the container without distorting */}
      <div className="absolute w-1/2 right-0 h-full">
        <img
          src={heroFirstImg}
          alt="Hero Image"
          className="absolute w-full object-cover"/>
        
      </div>
      {/* Overlay with paragraph and heading text */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-6 w-full sm:w-[85%] max-w-screen-xl">
        {/* First Paragraph Text */}
        <p className="md:text-lg text-[14px] text-white mb-4 text-center sm:text-left">
          Hey! it's me, here
        </p>
        
        {/* Heading Text */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-rose-500 transform ${
            animateText ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } transition-all duration-1000 ease-out text-center sm:text-left`}
        >
          I'm a Technical artist and <br/>a Game developer
        </h2>

        {/* Second Paragraph Text */}
        <p className="md:text-lg text-[14px] text-white mt-4 text-center sm:text-left">
          Coming soon . . . .
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center sm:justify-start gap-4">
          <button className="px-6 py-3 text-white-500 bg-transparent border-2 border-rose-500 hover:bg-rose-500 hover:text-black transition-all duration-300 relative overflow-hidden">
            Portfolio
            {/* Circle Animation */}
            <span className="absolute top-0 left-0 w-full h-full bg-rose-500 transform scale-0 origin-center transition-all duration-1000"></span>
          </button>
          <button className="px-6 py-3 text-white-500 bg-transparent border-2 border-rose-500 hover:bg-rose-500 hover:text-black transition-all duration-300 relative overflow-hidden">
            Inquiry
            {/* Circle Animation */}
            <span className="absolute top-0 left-0 w-full h-full bg-rose-500 transform scale-0 origin-center transition-all duration-1000"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

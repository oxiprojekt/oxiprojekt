import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import arrow icons
import heroFirstImg from '../../assets/heroImg1.jpg';
import heroSecondImg from '../../assets/heroImg2.jpg';
import heroThirdImg from '../../assets/heroImg3.jpg';

const Hero = () => {
  const images = [heroFirstImg, heroSecondImg, heroThirdImg]; // Images for the slider
  const textOptions = ["Developer", "Designer", "Artist"]; // Texts to display
  const [currentContentIndex, setCurrentContentIndex] = useState(0); // Index for the current image
  const [animationClass, setAnimationClass] = useState("startAnimation"); // The animation class state
  const [currentText, setCurrentText] = useState(textOptions[0]); // Default text

  // Function to go to the previous image
  const goToPreviousImage = () => {
    const newIndex = (currentContentIndex - 1 + images.length) % images.length; // Loop to the previous image
    setCurrentContentIndex(newIndex);
    setCurrentText(textOptions[newIndex]); // Update text based on the new index
    resetBorderAnimation(); // Reset border animation when user clicks the arrow
  };

  // Function to go to the next image
  const goToNextImage = () => {
    const newIndex = (currentContentIndex + 1) % images.length; // Loop to the next image
    setCurrentContentIndex(newIndex);
    setCurrentText(textOptions[newIndex]); // Update text based on the new index
    resetBorderAnimation(); // Reset border animation when user clicks the arrow
  };

  // Function to reset the border animation by toggling the animation class
  const resetBorderAnimation = () => {
    setAnimationClass(""); // Remove the animation class
    setTimeout(() => {
      setAnimationClass("startAnimation"); // Reapply the animation class after a brief moment
    }, 10); // Small delay to force the reflow
  };

  // Set an interval to change the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentContentIndex + 1) % images.length; // Loop through images
      setCurrentContentIndex(newIndex);
      setCurrentText(textOptions[newIndex]); // Update text based on the new index
      resetBorderAnimation(); // Reset border animation when image changes automatically
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentContentIndex, images.length]);

  return (
    <section className="relative block sm:flex w-full h-[82vh] bg-black">
      {/* Left Side Black Box */}
      <div
        className="absolute justify-center sm:justify-end z-10 left-0 bottom-0 sm:bottom-0 sm:left-[-8%] w-full sm:w-2/3 h-80 sm:h-full bg-black text-white px-16 flex items-center justify-end 
        skew-y-[-10deg] sm:skew-y-0 sm:skew-x-[-10deg]" // Y-skew on mobile, X-skew on larger screens
      >
        <div className="absolute sm:px-4 transform -skew-y-[-10deg] sm:skew-y-0 sm:-skew-x-[-10deg] justify-items-center sm:justify-items-end">
          {/* First Paragraph Text */}
          <p className="md:text-lg text-[14px] mb-4  text-center sm:text-right">
            Hey! it's me, here
          </p>

          {/* Heading Text */}
          <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-rose-500 animate-float  text-center sm:text-right">
            {currentText}
          </h2>

          {/* Second Paragraph Text */}
          <p className="md:text-1xl text-1xl mt-4 text-center sm:text-right">
            Coming soon
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-right sm:justify-end gap-4">
            <button className="px-6 py-3 text-white-500 bg-transparent border-2 border-rose-500 hover:bg-rose-500 hover:text-black transition-all duration-300 relative overflow-hidden">
              Portfolio
            </button>
            <button className="px-6 py-3 text-white-500 bg-transparent border-2 border-rose-500 hover:bg-rose-500 hover:text-black transition-all duration-300 relative overflow-hidden">
              Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Image Slider */}
      <div className="absolute w-full sm:w-1/2 right-0 h-[600px] sm:h-full z-5">
        <img
          src={images[currentContentIndex]} // Dynamically render the current image
          alt="Hero Background"
          className="top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPreviousImage}
        className="absolute z-10 opacity-50 hidden sm:flex left-10 top-1/2 transform -translate-y-1/2 text-white p-2 hover:opacity-100 transition-all"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNextImage}
        className="absolute z-10 opacity-50 hidden sm:flex right-10 top-1/2 transform -translate-y-1/2 text-white p-2 hover:opacity-100 transition-all"
      >
        <ChevronRight size={30} />
      </button>

      {/* Bottom Border Line with Animation */}
      <div
        className={`z-10 absolute bottom-0 w-full h-[2px] bg-white opacity-30 ${animationClass}`}
      ></div>

      {/* Keyframe Animation for Border */}
      <style>{`
        @keyframes slideBorder {
          0% {
            transform: scaleX(0);
            transform-origin: left center;
          }
          100% {
            transform: scaleX(1);
            transform-origin: left center;
          }
        }

        .startAnimation {
          animation: slideBorder 5s linear infinite;
          transform-origin: left center;
        }

        /* Animation for floating effect */
        @keyframes floatText {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: floatText 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

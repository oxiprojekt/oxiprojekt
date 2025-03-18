import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

// Import images
import BackgroundImage1 from "../../assets/portfolioimgs/1.png";
import BackgroundImage2 from "../../assets/portfolioimgs/2.jpg";
import ImageA1 from "../../assets/portfolioimgs/a.jpg";
import ImageB1 from "../../assets/portfolioimgs/b.jpg";
import ImageC1 from "../../assets/portfolioimgs/c.jpg";

const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Artwork containers (Horizontal alignment)
  const containers = [
    {
      title: "SURFACE",
      description: "A breathtaking collection of nature-inspired artworks, ",
      images: [ImageA1],
    },
    {
      title: "INTERIOR",
      description: "A glimpse into the future with neon-lit cityscapes, ",
      images: [ImageB1],
    },
    {
      title: "LIGHTING",
      description: "Exploring the depths of imagination and creativity, ",
      images: [ImageC1],
    },
  ];

  const openModal = (artwork) => {
    setSelectedArtwork(artwork);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedArtwork.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedArtwork.images.length) % selectedArtwork.images.length);
  };

  // Check screen size before opening the game page
  const handleGameButtonClick = (gameUrl) => {
    const isMobile = window.innerWidth <= 768; // You can adjust this value as needed for your mobile breakpoints

    if (isMobile) {
      // Alert message if on mobile browser
      alert("WebGL builds are not supported on mobile devices. Please open it on full window screen.");
    } else {
      // Proceed to the game page on desktop
      window.location.href = gameUrl;
    }
  };

  return (
    <div className="w-full">
      {/* First Section - Parallax Background */}
      <div
        className="w-full h-[80vh] sm:h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${BackgroundImage1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Scrolling Text */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-1.8xl sm:text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-[12px] sm:text-xl mt-2">Explore a world of creativity and imagination.</p>
        </div>

        {/* Circle Buttons */}
        <div className="absolute z-10 bottom-6 left-6 hidden sm:flex flex-col gap-4">
          {/* Button 1 */}
          <a
            onClick={() => handleGameButtonClick("/games/piku/play/")}
            className="relative group w-20 h-20 flex items-center justify-items-center justify-center rounded-full bg-black text-white cursor-pointer"
          >
            <h1 className="text-md z-0 font-[800]">Piku</h1>

            {/* Panel (Initially hidden, slides from left to right on hover) */}
            <div className=" absolute z-8 w-[200%] h-[50%] mt-[25%] text-center content-center inset-0 bg-black transform translate-x-0 group-hover:translate-x-[40%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <span>Free to Play</span>
            </div>
          </a>

          {/* Button 2 */}
          <a
            onClick={() => handleGameButtonClick("/games/killz/play/")}
            className="relative group w-20 h-20 flex items-center justify-items-center justify-center rounded-full bg-black text-white cursor-pointer"
          >
            <h1 className="text-md z-0 font-[800]">KillZ</h1>

            {/* Panel (Initially hidden, slides from left to right on hover) */}
            <div className=" absolute z-8 w-[200%] h-[50%] mt-[25%] text-center content-center inset-0 bg-black transform translate-x-0 group-hover:translate-x-[40%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <span>Free to Play</span>
            </div>
          </a>
        </div>
      </div>

      {/* Second Section - Image Containers */}
            <div className="w-full flex flex-col sm:flex-row">
              {containers.map((container, index) => (
                <div
                  key={index}
                  className="relative w-full sm:w-1/3 h-[600px] sm:h-[600px] cursor-pointer flex items-center justify-center text-white text-center overflow-hidden group"
                >
                  {/* Image as Background Cover */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${container.images[0]})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0"></div>
      
                  {/* Text Content */}
                  <div className="z-10 px-4 justify-items-center">
                    <h2 className="relative w-full text-[1.2rem] sm:text-[1.8rem] pt-[30vh] sm:text-2xl font-semibold transform translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                      {container.title}
                      <span className="absolute bottom-0 -left-10 group-hover:left-0 w-full h-0.5 scale-x-[0%] bg-rose-500 transition-all duration-500 group-hover:scale-x-[15%] "></span>
                    </h2>
                    {/* Description with animation on hover */}
                    <p className="text-sm mt-2 opacity-0 transform translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {container.description}
                      {/* "See More" Button with animation */}
                      <button
                      onClick={() => openModal(container)}
                      className="px-1 text-rose-500 bg-transparent opacity-0 transform translate-y-5 underline underline-offset-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500  hover:text-rose-700"
                      >
                        see more
                      </button>
                    </p>
                    
                  </div>
                </div>
              ))}
            </div>
      
            {/* Third Section - Parallax Background */}
            <div
              className="w-full h-[80vh] sm:h-[600px] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-left"
              style={{ backgroundImage: `url(${BackgroundImage2})` }}
            >
              <div className="absolute inset-0"></div>
              {/* Text Section */}
              <div className="relative z-10 text-white w-2/3 pl-6 sm:pl-20 text-left">
                <h2 className="relative w-[30%] sm:w-[20%] text-[1.2rem] sm:text-[1.8rem] font-[600]">
                  Sniper
                  <span className="absolute bottom-0 left-0 w-[35%] h-0.5 bg-rose-500"></span>
                </h2>
                <p className="text-lg mt-2">Stay inspired and keep exploring creativity.</p>
              </div>
            </div>
      
            {/* Fourth Section - Parallax Background */}
            <div
              className="w-full h-[80vh] sm:h-[600px] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-left"
              style={{ backgroundImage: `url(${BackgroundImage1})` }}
            >
              <div className="absolute inset-0"></div>
              {/* Text Section */}
              <div className="relative z-10 text-white w-2/3 pl-6 sm:pl-20 text-left">
                <h2 className="relative w-[30%] sm:w-[20%] text-[1.2rem] sm:text-[1.8rem] font-[600]">
                  Sniper
                  <span className="absolute bottom-0 left-0 w-[35%] h-0.5 bg-rose-500"></span>
                </h2>
                <p className="text-lg mt-2">Stay inspired and keep exploring creativity.</p>
              </div>
            </div>
      
      
            {/* Image Modal */}
            {selectedArtwork && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl">
                  <FaTimes />
                </button>
                <button onClick={prevImage} className="absolute left-4 text-white text-3xl">
                  <FaArrowLeft />
                </button>
                <img src={selectedArtwork.images[currentImageIndex]} className="max-h-screen max-w-full" alt="Artwork" />
                <button onClick={nextImage} className="absolute right-4 text-white text-3xl">
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
        );
      };
      
      export default Portfolio;
      
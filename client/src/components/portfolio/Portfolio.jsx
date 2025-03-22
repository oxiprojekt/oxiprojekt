import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

// Import images
import BackgroundImage1 from "../../assets/portfolioimgs/1.png";
import BackgroundImage2 from "../../assets/portfolioimgs/2.jpg";
import BackgroundImage2vert from "../../assets/portfolioimgs/2vert.jpg";
import ImageA1 from "../../assets/portfolioimgs/a1.jpg";
import ImageA2 from "../../assets/portfolioimgs/a2.jpg";
import ImageA3 from "../../assets/portfolioimgs/a3.jpg";
import ImageA4 from "../../assets/portfolioimgs/a4.jpg";
import ImageA5 from "../../assets/portfolioimgs/a5.jpg";
import ImageA6 from "../../assets/portfolioimgs/a6.jpg";
import ImageB1 from "../../assets/portfolioimgs/b1.jpg";
import ImageB2 from "../../assets/portfolioimgs/b2.jpg";
import ImageB3 from "../../assets/portfolioimgs/b3.jpg";
import ImageB4 from "../../assets/portfolioimgs/b4.jpg";
import ImageC1 from "../../assets/portfolioimgs/c1.jpg";
import ImageC2 from "../../assets/portfolioimgs/c2.jpg";
import ImageC3 from "../../assets/portfolioimgs/c3.jpg";
import ImageC4 from "../../assets/portfolioimgs/c4.jpg";
import ImageC5 from "../../assets/portfolioimgs/c5.jpg";
import ImageC6 from "../../assets/portfolioimgs/c6.jpg";

const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageSqueezed, setIsImageSqueezed] = useState(false);
  const textContainerRef = useRef(null); // Ref for the text container

  
  // Variables to track the touch position for swipe detection
  const [touchStartY, setTouchStartY] = useState(null);
  const [isSwipingUp, setIsSwipingUp] = useState(false);
  const [isScrollMax, setIsScrollMax] = useState(false);
  const [currentTranslateY, setCurrentTranslateY] = useState(0);

  // Artwork containers (Horizontal alignment)
  const containers = [
    {
      title: "SURFACE",
      shortDescription: "A breathtaking collection of nature-inspired artworks",
      longDescription: "This project showcases the creation of a highly detailed, hard-surface 3D model of the iconic 'Quadra V-Tech' car, inspired by the Cyberpunk aesthetic. Using 3D Maya, I meticulously modeled the car, paying close attention to every intricate detail while ensuring the optimization of polygon count, carefully avoiding the use of unnecessary triangle polygons. Throughout the process, I utilized various modeling tools and techniques, such as precision UV mapping and strategic edge flow, to ensure smooth surfaces and accurate proportions. For texturing, I implemented advanced material techniques to replicate the reflective and metallic surfaces typical of Cyberpunk vehicles, including normal and specular maps to bring the car to life. Mesh lighting was added to enhance the cyberpunk atmosphere, giving it a futuristic, glowing edge. The final rendering and lighting were done in Corona, where I set up a visually striking scene with realistic lighting, ensuring an ideal balance of shadows and highlights to capture the essence of this futuristic vehicle. This project blends technical skill with creative vision, bringing a piece of Cyberpunk to life.",
      images: [ImageA1, ImageA2, ImageA3, ImageA4, ImageA5, ImageA6],
    },
    {
      title: "INTERIOR",
      shortDescription: "A glimpse into the future with neon-lit cityscapes, ",
      longDescription: "I have created a comprehensive interior design model utilizing advanced texturing and rendering techniques in Corona Renderer. All the assets within this project were manually crafted using Autodesk 3ds Max, allowing for a high level of detail and precision in the final result. I used a combination of various tools and techniques to bring the design to life, ensuring a realistic and aesthetically pleasing visual experience. From architectural modeling to intricate texturing and lighting, every element was carefully designed and refined to reflect a true-to-life environment. The process involved using 3ds Max’s powerful modeling tools, advanced UV mapping, and Corona Renderer’s cutting-edge rendering capabilities to achieve photorealistic images. The final outcome not only demonstrates my technical skills but also my dedication to creating immersive and visually captivating interior designs. This project highlights my ability to work with complex 3D assets and deliver high-quality, detailed visual representations.",
      images: [ImageB1, ImageB2, ImageB3, ImageB4],
    },
    {
      title: "LIGHTING",
      shortDescription: "Exploring the depths of imagination and creativity, ",
      longDescription: "I created a vibrant 'Ship on the Sea' painting using acrylic paints, where I aimed to capture the dynamic energy of the ocean and the grandeur of the ship navigating through the waves. The painting reflects a rich color palette, with deep blues, bright whites, and various shades of browns and grays, bringing both the sea and the ship to life. To achieve a sense of movement and depth, I employed a variety of brush techniques, using large flat brushes for broad strokes and finer detail brushes to meticulously capture the ship's sails, rigging, and texture of the water. The textured waves and dramatic sky were painted with layers of acrylic, adding dimension and intensity to the scene. Each brushstroke was carefully placed to express the power and beauty of the sea, creating a timeless scene of adventure and exploration. This artwork showcases my versatility in using different brushes and my skill in conveying emotion through color and composition.",
      images: [ImageC1, ImageC2, ImageC3, ImageC4, ImageC5, ImageC6],
    },
  ];

  const openModal = (artwork) => {
    setSelectedArtwork(artwork);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden"; // Disable body scroll
  };

  const closeModal = () => {
    setSelectedArtwork(null);
    document.body.style.overflow = "auto"; // Enable body scroll
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
  const handleScroll = () => {
    const scrollTop = textContainerRef.current.scrollTop; // Get the scroll position
    const maxScroll = textContainerRef.current.scrollHeight - textContainerRef.current.clientHeight; // Maximum scrollable height

    // When the user scrolls beyond the end of the text
    if (scrollTop >= maxScroll) {
      setIsImageSqueezed(true);
      setIsScrollMax(true); // Start the squeezing effect
    } else {
      setIsScrollMax(false); // Reset the image to normal state
    }
  };
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY); // Store initial touch position
  };

  const handleTouchMove = (e) => {
    const touchEndY = e.touches[0].clientY; // Current touch position
    if(isScrollMax){
      const diff = touchStartY - touchEndY;
      if(diff < 120) setCurrentTranslateY(diff);
    }
    // If the user swipes up (touch move goes upwards)
    if (touchStartY - touchEndY > 30) { // A threshold to detect swipe up (you can adjust this value)
      setIsSwipingUp(true); // Set the swipe-up state to true
    }
  };

  const handleTouchEnd = () => {
    setCurrentTranslateY(0);
    if (isScrollMax && isSwipingUp) { 
      setIsImageSqueezed(true); // Trigger the squeeze effect when swipe-up happens
    }else{
    setIsSwipingUp(false); // Reset swiping state
    setIsImageSqueezed(false);
    }
  };

  useEffect(() => {
    // Reset the image state when scrolling stops after a delay (e.g., 0.3s)
    if (isImageSqueezed) {
      const timer = setTimeout(() => {
        setIsImageSqueezed(false);
      }, 300); // Time to keep the image squeezed (adjust as needed)
      
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [isImageSqueezed]);

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
          <h1 className="text-1.8xl sm:text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-[12px] sm:text-lg mt-2">Explore a world of creativity and imagination.</p>
          <div className="animate-bounce text-4xl mt-4">
            <span className="block">&#8595;</span> {/* Downward Arrow (Unicode) */}
          </div>
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
                      {container.shortDescription}
                      {/* "See More" Button with animation */}
                      <button
                        onClick={() => openModal(container)}
                        className="px-1 text-rose-500 bg-transparent opacity-0 transform translate-y-5 underline underline-offset-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:text-rose-700"
                      >
                        See more
                      </button>
                    </p>
                  </div>
                </div>
              ))}
            </div>
      
            {/* Third Section - Parallax Background */}
            <div
              className="w-full h-[80vh] sm:h-[600px] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-left"
              style={{
                backgroundImage: `url(${window.innerWidth <= 768 ? BackgroundImage2vert : BackgroundImage2})`,
              }}
            >
              <div className="absolute inset-0"></div>
              {/* Text Section */}
              <div className="relative z-10 text-white w-2/3 pl-6 sm:pl-20 text-left">
                <h2 className="relative w-[30%] sm:w-[20%] text-[1.2rem] sm:text-[1.8rem] font-[600]">
                  Sniper
                  <span className="absolute bottom-0 left-0 w-[35%] h-0.5 bg-rose-500"></span>
                </h2>
                <p className="text-[14px] sm:text-md mt-2">The "M300 Sniper Rifle" project, modeled in Autodesk Maya, features a detailed futuristic design with a robust barrel, stock, and advanced scope. I incorporated functional wire connections and realistic metal texturing, showcasing my hard-surface modeling skills. This asset is perfect for video games or cinematic visualizations, blending technology and weaponry.</p>
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
                  Haunted
                  <span className="absolute bottom-0 left-0 w-[35%] h-0.5 bg-rose-500"></span>
                </h2>
                <p className="text-[14px] sm:text-md mt-2">The "Haunted 3D House" project, modeled in Autodesk 3ds Max, features an eerie design with dramatic lighting and realistic textures. Steel chains and broken locks add to the suspense, symbolizing an attempt to contain a supernatural force. Using Corona Renderer, I achieved a hyper-realistic, chilling visual effect.</p>
              </div>
            </div>

            {/* Image Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button onClick={closeModal} className="absolute z-20 flex justify-center items-center top-4 right-4 w-[34px] h-[34px]  bg-black rounded-full text-white text-2xl">
            <FaTimes />
          </button>
          {/* Button left */}
          <button onClick={prevImage} className="absolute z-20 left-4 sm:left-10 w-[30px] h-[30px] justify-items-center text-white text-1xl">
            <FaArrowLeft />
          </button>
          
          {/* Button right with custom bounce animation */}
          <div className="contents">
            <button
              onClick={prevImage}
              className="absolute z-20 right-4 sm:right-[66vw] sm:mr-2 w-[30px] h-[30px] justify-items-center text-white text-1xl sm:animate-bounce"
            >
              <FaArrowRight />
            </button>

            <style>
              {`
                @keyframes bounce {
                  0%, 100% {
                    transform: translateX(-25%);
                    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                  }
                  50% {
                    transform: none;
                    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                  }
                }

                .animate-bounce {
                  animation: bounce 1s infinite;
                }
              `}
            </style>
          </div>
          {/* Modal Content */}
          <div className="relative block sm:flex items-center sm:px-8 w-full h-[100vh] sm:h-[90vh] overflow-hidden">
            {/* Image */}
            <div className="relative w-full sm:w-[34vw] h-[60%] sm:h-[80%] z-10 ">
              <img
                src={selectedArtwork.images[currentImageIndex]}
                alt="Artwork"
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isImageSqueezed ? "transform -translate-x-10" : "transform translate-y-0"
                }`} // Apply scale based on scroll state
              />
            </div>
            <div className="hidden sm:flex w-[1px] h-full ml-8 bg-white bg-opacity-20"></div>
            {/* Text Description */}
            <div
              ref={textContainerRef} // Attach the ref to the text container
              className="w-full sm:w-[66vw] h-[40%] sm:h-[80%] text-white p-4 sm:p-8 flex flex-col items-center sm:items-start sm:justify-center overflow-y-auto sm:overflow-y-hidden"
              onScroll={handleScroll} // Add the scroll event handler
              onTouchStart={handleTouchStart} // Track touch start
              onTouchMove={handleTouchMove} // Track touch move to detect swipe
              onTouchEnd={handleTouchEnd} // Track touch end
              style={{
                transform: `translateY(-${currentTranslateY}px)`, // Apply translateY based on touch movement
              }}
            >
              <h2 className="text-xl sm:text-3xl font-semibold">{selectedArtwork.title}</h2>
              <p className="text-[14px] sm:text-sm font-light my-4 text-justify">
                {selectedArtwork.longDescription}
              </p>
              
            </div>
            
          </div>

          
        </div>
      )}


          </div>
        );
      };
      
      export default Portfolio;
      
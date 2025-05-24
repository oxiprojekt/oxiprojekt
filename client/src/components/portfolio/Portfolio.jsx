import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ImageA1 from "../../assets/portfolioimgs/a1.jpg";
import ImageB1 from "../../assets/portfolioimgs/b1.jpg";
import ImageC1 from "../../assets/portfolioimgs/c1.jpg";

const Portfolio = () => {
  const [isImageSqueezed, setIsImageSqueezed] = useState(false);
  const navigate = useNavigate();
  

  // Artwork containers (Horizontal alignment)
  const containers = [
    {
      title: "Games",
      shortDescription: "You can test the game on the browser here",
      longDescription: "This project showcases the creation of a highly detailed, hard-surface 3D model of the iconic 'Quadra V-Tech' car, inspired by the Cyberpunk aesthetic. Using 3D Maya, I meticulously modeled the car, paying close attention to every intricate detail while ensuring the optimization of polygon count, carefully avoiding the use of unnecessary triangle polygons. Throughout the process, I utilized various modeling tools and techniques, such as precision UV mapping and strategic edge flow, to ensure smooth surfaces and accurate proportions. For texturing, I implemented advanced material techniques to replicate the reflective and metallic surfaces typical of Cyberpunk vehicles, including normal and specular maps to bring the car to life. Mesh lighting was added to enhance the cyberpunk atmosphere, giving it a futuristic, glowing edge. The final rendering and lighting were done in Corona, where I set up a visually striking scene with realistic lighting, ensuring an ideal balance of shadows and highlights to capture the essence of this futuristic vehicle. This project blends technical skill with creative vision, bringing a piece of Cyberpunk to life.",
      images: [/*ImageA1*/],
      url: "portfolio/games"
    },
    {
      title: "Gameplay",
      shortDescription: "Here, you will see videos about game mechanics",
      longDescription: "I created a vibrant 'Ship on the Sea' painting using acrylic paints, where I aimed to capture the dynamic energy of the ocean and the grandeur of the ship navigating through the waves. The painting reflects a rich color palette, with deep blues, bright whites, and various shades of browns and grays, bringing both the sea and the ship to life. To achieve a sense of movement and depth, I employed a variety of brush techniques, using large flat brushes for broad strokes and finer detail brushes to meticulously capture the ship's sails, rigging, and texture of the water. The textured waves and dramatic sky were painted with layers of acrylic, adding dimension and intensity to the scene. Each brushstroke was carefully placed to express the power and beauty of the sea, creating a timeless scene of adventure and exploration. This artwork showcases my versatility in using different brushes and my skill in conveying emotion through color and composition.",
      images: [/*ImageC1*/],
      url:"portfolio/gameplay"
    },
    {
      title: "Design",
      shortDescription: "A breath talking work in 3D modeling",
      longDescription: "I have created a comprehensive interior design model utilizing advanced texturing and rendering techniques in Corona Renderer. All the assets within this project were manually crafted using Autodesk 3ds Max, allowing for a high level of detail and precision in the final result. I used a combination of various tools and techniques to bring the design to life, ensuring a realistic and aesthetically pleasing visual experience. From architectural modeling to intricate texturing and lighting, every element was carefully designed and refined to reflect a true-to-life environment. The process involved using 3ds Max’s powerful modeling tools, advanced UV mapping, and Corona Renderer’s cutting-edge rendering capabilities to achieve photorealistic images. The final outcome not only demonstrates my technical skills but also my dedication to creating immersive and visually captivating interior designs. This project highlights my ability to work with complex 3D assets and deliver high-quality, detailed visual representations.",
      images: [/*ImageB1*/],
      url:"portfolio/design"
    },
    {
      title: "Art",
      shortDescription: "Exploring the artwork through the hands",
      longDescription: "I created a vibrant 'Ship on the Sea' painting using acrylic paints, where I aimed to capture the dynamic energy of the ocean and the grandeur of the ship navigating through the waves. The painting reflects a rich color palette, with deep blues, bright whites, and various shades of browns and grays, bringing both the sea and the ship to life. To achieve a sense of movement and depth, I employed a variety of brush techniques, using large flat brushes for broad strokes and finer detail brushes to meticulously capture the ship's sails, rigging, and texture of the water. The textured waves and dramatic sky were painted with layers of acrylic, adding dimension and intensity to the scene. Each brushstroke was carefully placed to express the power and beauty of the sea, creating a timeless scene of adventure and exploration. This artwork showcases my versatility in using different brushes and my skill in conveying emotion through color and composition.",
      images: [/*ImageC1*/],
      url:"portfolio/art"
    },
  ];

  
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
    <>
    <div className="w-full h-auto lg:h-screen relative sm:overflow-hidden overflow-auto bg-black">
      {/* Fixed Welcome Text on Top of Images */}
      <div className="relative z-10 lg:fixed inset-0 flex flex-col items-center justify-start pt-24 sm:pt-40 text-center text-white px-6 pointer-events-none">
        <h1 className="text-[1.8rem] sm:text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-[12px] sm:text-lg mt-2">Explore a world of creativity and imagination.</p>
        <div className="animate-bounce text-4xl mt-4">
          <span className="block">&#8595;</span>
        </div>
      </div>

      {/* Fixed Background Image Grid */}
      <div className="relative lg:fixed w-full min-h-screen  content-center lg:pt-40 p-4 sm:p-8 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {containers.map((container, index) => (
            <div
              key={index}
              onClick={() => {
                if (container.title === "Art") {
                  alert("Art page is coming soon.");
                } else {
                  navigate(`/${container.url}`);
                }
              }}
              className="relative h-[300px] cursor-pointer flex items-center justify-center text-white text-center overflow-hidden group rounded-lg shadow-lg"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${container.images[0]})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>

              {/* Text Content in Circle */}
              <div className=" px-4 justify-items-center">
                <div className="relative flex justify-center">
                  <div className="w-[180px] h-[180px] rounded-full border-2 border-white 
                    flex items-center justify-center text-[1.2rem] sm:text-[1.5rem] font-semibold
                    transition-all duration-500 group-hover:border-rose-500 group-hover:shadow-lg group-hover:translate-y-[-4px]">
                    {container.title}
                  </div>
                </div>
                <p className="hidden sm:block text-sm mt-3 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {container.shortDescription}
                  <span className="px-1 text-rose-500 underline underline-offset-2 group-hover:text-rose-700">See more</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      
    </div>
    </>
  );

      };
      
      export default Portfolio;
      
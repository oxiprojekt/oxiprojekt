import { useState, useEffect, useRef } from 'react';

// You can import the images of the software logos or use URLs for now.
import software1 from '../../assets/software1.png'; // Example path for image
import software2 from '../../assets/software2.png'; // Example path for image
import software3 from '../../assets/software3.png'; // Example path for image
import software4 from '../../assets/software4.png'; // Example path for image
import software5 from '../../assets/software5.png'; // Example path for image
import software6 from '../../assets/software6.png'; // Example path for image
import software7 from '../../assets/software7.png'; // Example path for image
import software8 from '../../assets/software8.png'; // Example path for image
import software9 from '../../assets/software9.png'; // Example path for image
import software10 from '../../assets/software10.png'; // Example path for image

const Experience = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver to detect when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 10% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const softwareData = [
    { name: 'Unity engine', image: software1 },
    { name: 'Unreal engine', image: software2 },
    { name: 'Visual studio', image: software3 },
    { name: 'Maya 3D', image: software4 },
    { name: '3Ds Max', image: software5 },
    { name: 'Blender', image: software6 },
    { name: 'Substance painter', image: software7 },
    { name: 'Premier pro', image: software8 },
    { name: 'Photoshop', image: software9 },
    { name: 'Sketching', image: software10 },
  ];

  return (
    <section
      ref={sectionRef}
      className="pb-16 pt-8 px-16 bg-black text-white"
    >
      <div className='container mx-auto'>
        <div className='flex w-full items-center'>
          {/* Experience Heading */}
          <h2 className="text-4xl font-semibold text-center text-rose-500 mb-12">Experience</h2>

          {/* Border Line at the Bottom */}
          <div
            className={`mb-12 h-[1.4px] ml-4 bg-rose-500 
              transition-all duration-[2s] ease-in-out  
              ${isSectionVisible ? 'w-full' : 'w-0'}`}
            />
          
        </div>
        {/* Software Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {softwareData.map((software, index) => (
            <div
              key={index}
              className="w-full text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] sm:w-[140px] md:w-[160px] lg:w-[180px] flex items-center bg-white bg-opacity-10 text-white shadow-lg p-4"
            >
              {/* Image */}
              <img
                src={software.image}
                alt={software.name}
                className={`w-1/2 h-1/2 object-contain mr-2 
                  ${['Unity engine', 'Unreal engine', 
                    'Visual studio', 'Maya 3D', 
                    '3Ds Max', 'Blender', 
                    'Substance painter', 'Premier pro', 
                    'Photoshop', 'Sketching'].includes(software.name) ? 'invert' : ''}`}
              />
              {/* Software Name */}
              <p className="text-center font-normal">{software.name}</p>
            </div>
          ))}
        </div>
      </div>
        
      
    </section>
    
  );
};

export default Experience;

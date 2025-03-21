import { useEffect, useState, useRef } from 'react';

import image1 from '../../assets/ability1.png';
import image2 from '../../assets/ability2.jpg';
import image3 from '../../assets/ability3.jpg';

const Abilities = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section ref={sectionRef} className="pt-8 pb-20 px-4 sm:px-16 w-full bg-black text-white overflow-hidden">
      <div className='container mx-auto'>
        <div className="flex w-full items-center">
          <h2 className="text-4xl font-semibold text-center text-rose-500 mb-12">
            Abilities
          </h2>

          <div
            className={`h-[1.4px] ml-4 mb-12 bg-rose-500 transition-all duration-[2s] ease-in-out ${
              isSectionVisible ? 'w-full' : 'w-0'
            }`}
          ></div>
        </div>

        {/* Ability Cards */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-2 items-end">
          {/* Coding Card */}
          <div
            className="relative w-full sm:w-1/3 lg:w-1/3 h-[500px] sm:h-[600px] bg-cover bg-center group"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <div className="absolute top-[45%] left-1/2 h-1/3 transform -translate-x-1/2 w-[85%] sm:w-[75%] p-6 bg-black bg-opacity-0 group-hover:bg-opacity-50 overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-4 opacity-100">
                Coding
                <div className="bottom-0 w-1/4 translate-x-[150%] h-[2px] bg-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-700 ease-in"></div>
              </h3>
              <p className="text-xs sm:text-sm text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                Coding is essential in building software. It powers everything from websites to apps.
              </p>
              <button className="absolute hidden bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                Check
              </button>
            </div>
          </div>

          {/* Modeling Card */}
          <div
            className="relative w-full sm:w-1/3 lg:w-1/3 h-[500px] sm:h-[600px] bg-cover bg-center group"
            style={{ backgroundImage: `url(${image2})` }}
          >
            <div className="absolute top-[45%] left-1/2 h-1/3 transform -translate-x-1/2 w-[85%] sm:w-[75%] p-6 bg-black bg-opacity-0 group-hover:bg-opacity-50 overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-4 opacity-100">
                Modeling
                <div className="bottom-0 w-1/4 translate-x-[150%] h-[2px] bg-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-700 ease-in"></div>
              </h3>
              <p className="text-xs sm:text-sm text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                Modeling involves creating 3D representations of objects or environments.
              </p>
              <button className="absolute hidden bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                Check
              </button>
            </div>
          </div>

          {/* Sketching Card */}
          <div
            className="relative w-full sm:w-1/3 lg:w-1/3 h-[500px] sm:h-[600px] bg-cover bg-center group"
            style={{ backgroundImage: `url(${image3})` }}
          >
            <div className="absolute top-[45%] left-1/2 h-1/3 transform -translate-x-1/2 w-[85%] sm:w-[75%] p-6 bg-black bg-opacity-0 group-hover:bg-opacity-50 overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-4 opacity-100">
                Sketching
                <div className="bottom-0 w-1/4 translate-x-[150%] h-[2px] bg-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-700 ease-in"></div>
              </h3>
              <p className="text-xs sm:text-sm text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                Sketching/Paontongs is a creative method for visualizing ideas and design planning anything quickly.
              </p>
              <button className="absolute hidden bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;

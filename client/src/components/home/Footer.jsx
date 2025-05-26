/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef} from 'react';
import Logo from '../../assets/logo.png';
import SocialLinks from '../SocialLinks';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'; // You can use react-icons for social media icons

const Footer = () => {
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

  return (
    <footer className="bg-black text-white pt-8 px-4 sm:px-16">
      <div className='container mx-auto w-full'>
        {/* Border Line at the Bottom */}
        <div className='flex w-full items-center mb-4 sm:mb-12'>
          {/* Experience Heading */}
          <h2 className="text-4xl font-semibold text-center text-rose-500">About</h2>

          {/* Border Line at the Bottom */}
          <div
            ref={sectionRef}
            className={`h-[1.4px] ml-4 bg-rose-500
              transition-all duration-[2s] ease-in-out
              ${isSectionVisible ? 'w-full' : 'w-0'}`}
            style={{
              transitionProperty: "width", // Explicitly tell it to animate the width property
            }}
          />
        </div>

        {/* Main Footer Content */}
        <div className="max-w-full mx-0 py-4 px-0 flex flex-col md:flex-row justify-between">

          {/* About Us Section */}
          <div className="md:w-1/3 space-y-4">
            <p className="text-[12px] sm:text-sm text-justify">
              I am a passionate 'Technical Artist' and I do game development, design works and art, I always work deliver on time with quality service and building innovative solutions. Feel free to get in touch with me.
            </p>
            <p className="text-[12px] sm:text-sm">
              Email me at{' '}
              <a href="mailto:info@oxiprojekt.com" className="text-rose-500 hover:underline">
                info@oxiprojekt.com
              </a>
            </p>
          </div>

          {/* Explore Section */}
          <div className="md:w-1/3 space-y-4 pt-4 sm:pt-0">
            <h3 className="text-xl font-semibold text-center">Explore</h3>
            <ul className="space-y-2 text-center text-sm grid items-center justify-center">
              <li>
                <a href="/about" className="text-rose-500 hover:underline">About</a>
              </li>
              <li>
                <a href="/services" className="text-rose-500 hover:underline">Services</a>
              </li>
              <li>
                <a href="/portfolio" className="text-rose-500 hover:underline">Portfolio</a>
              </li>
              <li>
                <a href="/blog" className="text-rose-500 hover:underline">Blog</a>
              </li>
              <li>
                <a href="/contact" className="text-rose-500 hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="md:w-1/3 space-y-4 pt-4 sm:pt-0">
            <h3 className="text-xl font-semibold text-center sm:text-right">Follow Me</h3>
            <div className="flex space-x-6 justify-center sm:justify-end">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Footer Bottom (Logo & Copyright) */}
        <div className='w-full h-[1px] bg-white'></div>
        <div className="bg-black py-4 pb-2">
          <div className="grid justify-center items-center gap-3">
            <span className='grid justify-center'>
              <span className="text-2xl font-semibold text-rose-500">OXI </span>
            </span>
            <p className="text-[12px]">© 2025 OxiProjekt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

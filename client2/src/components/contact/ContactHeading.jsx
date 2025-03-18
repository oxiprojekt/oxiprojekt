import { useState, useEffect } from 'react';
import image1 from '../../assets/contact1.jpg';
import image2 from '../../assets/contact2.jpg';
import image3 from '../../assets/contact3.jpg';

const Contact = () => {
  const images = [image1, image2, image3]; // Array of images for the slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <section className="bg-neutral-900 text-white">
      {/* Image Slider */}
      <div className="relative h-[320px] overflow-hidden">
        <img
          src={currentImage}
          alt="Header"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>

    </section>
  );
};

export default Contact;

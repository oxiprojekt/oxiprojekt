/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef} from 'react';


const Contact = () => {
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


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    queryType: 'wants to ask something', // Default radio button value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      queryType: formData.queryType,
    };
  
    try {
      const response = await fetch('http://localhost:3001/contactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
      if (response.ok) {
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '', queryType: 'wants to ask something' });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section className="bg-black text-white pt-8 px-4 sm:px-16">
      {/* Contact Content */}
      <div className="p-0">
        <div className='flex w-full items-center'>
          {/* Experience Heading */}
          <h2 className="text-4xl font-semibold text-center text-rose-500 mb-12">Contact</h2>

          {/* Border Line at the Bottom */}
          <div
            ref={sectionRef}
            className={`mb-12 h-[1.4px] ml-4 bg-rose-500
              transition-all duration-[2s] ease-in-out
              ${isSectionVisible ? 'w-full' : 'w-0'}`}
            style={{
              transitionProperty: "width", // Explicitly tell it to animate the width property
            }}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-4">
            <h1 className='text-2xl'>
              Hey! I'm looking forward to start<br/>a project with you!
            </h1>
            <p className='text-sm'>
              Have a question or want to get in touch? Feel free to reach out to us for any inquiries, collaborations, or just to say hello.
            </p>
            <p className='text-sm'>
              We're here to help you with your project needs or any assistance regarding our services. Don’t hesitate to contact us for more information.
            </p>
            <div className="space-y-2">
              <p className='text-sm'>
                General Inquiries:{' '}
                <i className="text-rose-500 hover:underline">
                  info@oxiprojekt.com
                </i>
              </p>
              <p className='text-sm'>
                Hiring Queries:{' '}
                <i className="text-rose-500 hover:underline">
                  mikkiwaskel@gmail.com
                </i>
              </p>
            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-none"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className='mb-4 h-4'>What's your purpose?</div>
              <div className="mb-4 flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="inquiry"
                    name="queryType"
                    value="wants to ask something"
                    checked={formData.queryType === 'wants to ask something'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="inquiry" className="text-sm">For Inquiry</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="hiring"
                    name="queryType"
                    value="wants to hire you"
                    checked={formData.queryType === 'wants to hire you'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="hiring" className="text-sm">For Hiring</label>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-none hover:bg-rose-400 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react'; // Import the ChevronDown icon
import Logo from '../assets/logo.png';
import Nav from './Nav';
import SocialLinks from './SocialLinks';
import NavMobile from './NavMobile';
import UserMobile from './UserMobile';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for controlling dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // State for storing the selected language

  const dropdownRef = useRef(null); // Reference for the dropdown menu
  const languageButtonRef = useRef(null); // Reference for the language button

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };

    // Close the dropdown if a click happens outside of it or the language button
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        !languageButtonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    // Listen for scroll and click events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Toggle the dropdown open/close
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Handle language change
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <header
      className={`${
        bg ? 'bg-black h-14' : 'h-20'
      } flex px-16 items-center fixed top-0 w-full text-white z-20 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex space-x-2 items-center">
          <img className="min-w-7 h-7 w-7" src={Logo} alt="logo" />
        </a>

        {/* Navigation */}
        <div className="flex-1 ml-8 hidden md:flex lg:flex">
          <Nav />
        </div>
        <div className="flex-1 mx-4 hidden md:flex lg:flex">
          <SocialLinks />
        </div>

        {/* Mobile and Socials */}
        <div className="flex items-center space-x-4">
          {/* Language Dropdown Button */}
          <button
            ref={languageButtonRef} // Attach the ref to the language button
            className="flex items-center space-x-[2px]"
            onClick={toggleDropdown} // Toggle dropdown on button click
          >
            <span>{selectedLanguage}</span> {/* Display selected language */}
            <ChevronDown size={12} /> {/* Down arrow icon */}
          </button>

          {/* Dropdown Menu */}
          <div
            ref={dropdownRef} // Attach the ref to the dropdown
            className={`dropdown-menu absolute right-0 bg-black text-white p-4  w-48 mt-2 transition-all duration-1000 ease-in-out ${
              dropdownOpen ? 'top-12' : 'top-20 hidden'
            }`} // Apply dynamic top position based on dropdown state
          >
            <ul className="space-y-2">
              {/* List of Languages */}
              <li><button className="w-full text-left hover:bg-rose-500" onClick={() => changeLanguage('EN')}>English</button></li>
              <li><button className="w-full text-left hover:bg-rose-500" onClick={() => changeLanguage('ES')}>Spanish</button></li>
              <li><button className="w-full text-left hover:bg-rose-500" onClick={() => changeLanguage('FR')}>French</button></li>
              <li><button className="w-full text-left hover:bg-rose-500" onClick={() => changeLanguage('DE')}>German</button></li>
              <li><button className="w-full text-left hover:bg-rose-500" onClick={() => changeLanguage('IT')}>Italian</button></li>
              <li><button className="w-full text-left hover:bg-rose-500" onClick={() => changeLanguage('PT')}>Portuguese</button></li>
              <li><button className="w-full text-left hover:bg-rose-500" onClick={() => changeLanguage('ZH')}>Chinese</button></li>
            </ul>
          </div>

          {/* User Icon */}
          <div>
            <UserMobile />
          </div>

          {/* Hamburger - Visible on small screens */}
          <div className="block md:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

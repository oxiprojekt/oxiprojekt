import { Menu, X } from "lucide-react";
import { MoveRight } from 'lucide-react';
import { useState, useRef, useEffect } from "react";

import { navItems } from '../constants';

const NavMobile = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    // References to the side drawer and the button

    // Function to toggle the side panel open/closed
    const toggleNavbar = () => {
        console.log("Opened");
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    

    return (
        <div className="grid">
            {/* Toggle Button */}
            <button 
                onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation Drawer */}
            <div
                className={`fixed top-0 right-0 z-20 bg-neutral-900
                     h-[100vh] w-[40vw] p-8 md:p-12 flex flex-col 
                     justify-center items-center lg:hidden 
                     transition-transform duration-300 ease-in-out 
                     ${mobileDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Navigation Items */}
                <ul className="flex flex-col justify-center items-end gap-1">
                    {navItems.map((item, index) => (
                        <li key={index} className="py-4">
                            <a href={item.href} className="text-white text-lg">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Floating Arrow Button */}
                <button
                    className="absolute bottom-12 right-[38%]"
                    onClick={toggleNavbar}
                    style={{
                        animation: 'floating 1s ease-in-out infinite'
                    }}
                >
                    <MoveRight size={32} />
                </button>
            </div>
            <div
                className={`fixed top-0 right-[100%] z-20 bg-transparent                     h-[100vh] w-[60vw] p-8 md:p-12 flex flex-col 
                     justify-start items-start lg:hidden 
                     transition-transform duration-300 ease-in-out 
                     ${mobileDrawerOpen ? "translate-x-full" : "hidden"}`}
                onClick={toggleNavbar}
            >
            </div>    
            {/* Inline style for keyframes animation */}
            <style jsx>{`
                @keyframes floating {
                    0% {
                        transform: translateX(0);
                    }
                    14% {
                        transform: translateX(+10px);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default NavMobile;

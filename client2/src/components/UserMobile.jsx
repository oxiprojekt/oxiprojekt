import { MoveRight, UserRound } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const UserMobile = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    // References to the side drawer and the button
    const mobileDrawerRef = useRef(null);
    const toggleButtonRef = useRef(null);

    // Function to toggle the side panel open/closed
    const toggleNavbar = () => {
        console.log("Opened");
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    // Handle click outside the side panel
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileDrawerRef.current && 
                !mobileDrawerRef.current.contains(event.target) && 
                !toggleButtonRef.current.contains(event.target)
            ) {
                console.log("Closed");
                setMobileDrawerOpen(false);
            }
        };

        // Add event listener when the component mounts
        window.addEventListener('click', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="grid">
            {/* Toggle Button */}
            <button 
                ref={toggleButtonRef} 
                onClick={toggleNavbar} 
                className="text-white">
                <UserRound size={24} />
            </button>

            {/* Navigation Drawer */}
            <div
                ref={mobileDrawerRef}
                className={`fixed top-0 right-0 z-20 bg-neutral-900
                     h-[100vh] w-[60vw] md:w-[40vw] lg:w-[25vw] p-8 md:p-12 flex flex-col 
                     justify-center items-center 
                     transition-transform duration-300 ease-in-out 
                     ${mobileDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Navigation Items */}
                <ul className="flex flex-col justify-end items-end gap-6 text-white">
                    {/* List Items */}
                    <li><a href="#" className="text-xl">Log in</a></li>
                    <li><a href="#" className="text-xl">Sign in</a></li>
                    <li><a href="#" className="text-xl">Dashboard</a></li>

                    {/* Quick Log In Text */}
                    <li className="text-lg mt-6">Quick Log In</li>

                    {/* Username and Password Fields */}
                    <li className="mt-4 w-full max-w-xs text">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-2 bg-neutral-700 text-white rounded mb-4"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 bg-neutral-700 text-white rounded"
                        />
                    </li>

                    {/* Log In Button */}
                    <li className="mt-4 w-full max-w-xs">
                        <button className="w-full p-2 bg-rose-500 text-white">
                            Log In
                        </button>
                    </li>
                </ul>

                {/* Floating Arrow Button */}
                <button
                    className="absolute bottom-12 right-[38%] floating-button"
                    onClick={toggleNavbar}
                >
                    <MoveRight size={32} />
                </button>
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

                .floating-button {
                    animation: floating 1s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default UserMobile;

import React from "react";

const Games = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
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
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <img
          src="https://via.placeholder.com/200"
          alt="Left"
          className="mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">PIKU</h2>
        <button 
          onClick={() => handleGameButtonClick("/games/piku/play/")}
          className="bg-rose-500 text-white px-4 py-2 rounded mb-4">
          PLAY
        </button>
        <p className="text-center max-w-md">{description}</p>
      </div>

      {/* Vertical Divider */}
      <div className="w-[1.4px] h-[80vh] bg-rose-500" />

      {/* Right Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <img
          src="https://via.placeholder.com/200"
          alt="Right"
          className="mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">KILL-Z</h2>
        <button 
          onClick={() => handleGameButtonClick("/games/killz/play/")}
          className="bg-rose-500 text-white px-4 py-2 rounded mb-4">
          PLAY
        </button>
        <p className="text-center max-w-md">{description}</p>
      </div>
    </div>
  );
};

export default Games;

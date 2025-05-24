import React from "react";
import Piku1 from "../../../assets/games/piku1.mp4";
import Killz1 from "../../../assets/games/killz1.mp4";

const Games = () => {
  const descriptionPiku1 = `Piku is a very kind bird game, who has forgotten her way to go back home and you have to help her to pass the difficulties and escape from the enemies.`;
  const descriptionKillz1 = `It's a zombie game in 2D, where you have to kill the zombies that will come over you and you have to pass gravity up to down and it's a main mechanics here.`;

  const prototypeDescription = `Click here! There are few gameplay about prototype mechanics for games, prototype such as AR/VR, Immersive platform, Sliding puzzle, Networked multiplayer, 3D physics, AI Nav-Mesh amd more.`;

  const handleGameButtonClick = (gameUrl, bypassMobileCheck = false) => {
    const isMobile = window.innerWidth <= 768;
    if (!bypassMobileCheck && isMobile) {
      alert("WebGL builds are not supported on mobile devices. Please open it on full window screen.");
    } else {
      window.location.href = gameUrl;
    }
  };

  return (
    <div className="flex flex-col items-center  min-h-screen bg-black text-white px-4 py-10">

      {/* Top Two Game Sections */}
      <div className="flex flex-col md:flex-row w-full md:h-[70vh]">
        {/* Piku */}
        <div className="flex flex-col items-center justify-center flex-1 px-4">
          <div className="w-[60vw] md:w-[20vw] mb-4">
            <video
              src={Piku1}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-full w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">PIKU</h2>
          <button
            onClick={() => handleGameButtonClick("/games/piku/play/")}
            className="bg-rose-500 text-white px-6 py-2 mb-4 tracking-wider"
          >
            PLAY
          </button>
          <p className="text-center max-w-md text-[14px] font-extralight">{descriptionPiku1}</p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-rose-500 mx-4 h-[60vh] self-center"/>

        {/* Kill-Z */}
        <div className="flex flex-col items-center justify-center flex-1 px-4">
          <div className="w-[60vw] md:w-[20vw] mb-4">
            <video
              src={Killz1}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-full w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">KILL-Z</h2>
          <button
            onClick={() => handleGameButtonClick("/games/killz/play/")}
            className="bg-rose-500 text-white px-6 py-2 mb-4 tracking-wider"
          >
            PLAY
          </button>
          <p className="text-center max-w-md text-[14px] font-extralight">{descriptionKillz1}</p>
        </div>
      </div>

      {/* Prototype Mechanics Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-6">
        <button 
          onClick={() => handleGameButtonClick("/portfolio/gameplay/", true)}
          className="border-2 border-rose-500 text-rose-500 px-6 py-2 text-sm sm:text-lg font-semibold mb-4 
          hover:bg-rose-500 hover:text-white transition-colors duration-300 ease-in-out">
          Prototype Game Videos
        </button>

        <p className="max-w-xl text-[12px] font-light leading-relaxed">{prototypeDescription}</p>
      </div>
    </div>
  );
};

export default Games;

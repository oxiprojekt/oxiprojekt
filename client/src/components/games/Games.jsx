import React from "react";
import Piku1 from "../../assets/games/piku1.mp4";
import Killz1 from "../../assets/games/killz1.mp4";

const Games = () => {
  const descriptionPiku1 = `Piku is a very kind bird game, who has forgotten her way to go back home and you have to help her to pass the difficulties and escape from the enemies.`;
  const descriptionKillz1 = `It's a zombie game in 2D, where you have to kill the zombies that will come over you and you have to pass gravity up to down and it's a main mechanics here.`;

  const handleGameButtonClick = (gameUrl) => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      alert("WebGL builds are not supported on mobile devices. Please open it on full window screen.");
    } else {
      window.location.href = gameUrl;
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-4 py-10 gap-10">
      
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 md:pt-0">
        <video
          src={Piku1}
          autoPlay
          loop
          muted
          playsInline
          className="mb-4 rounded-full w-[50vw] md:w-[20vw] h-[50vw] md:h-[20vw] object-cover"
        />
        <h2 className="text-2xl font-bold mb-2">PIKU</h2>
        <button 
          onClick={() => handleGameButtonClick("/games/piku/play/")}
          className="bg-rose-500 text-white px-6 py-2 mb-4">
          PLAY
        </button>
        <p className="text-center max-w-md text-[14px] font-extralight">{descriptionPiku1}</p>
      </div>

      {/* Vertical Divider (Desktop only) */}
      <div className="hidden md:block w-[1.4px] h-[80vh] bg-rose-500" />

      {/* Right Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 md:pt-0">
        <video
          src={Killz1}
          autoPlay
          loop
          muted
          playsInline
          className="mb-4 rounded-full w-[50vw] md:w-[20vw] h-[50vw] md:h-[20vw] object-cover"
        />
        <h2 className="text-2xl font-bold mb-2">KILL-Z</h2>
        <button 
          onClick={() => handleGameButtonClick("/games/killz/play/")}
          className="bg-rose-500 text-white px-6 py-2 mb-4">
          PLAY
        </button>
        <p className="text-center max-w-md text-[14px] font-extralight">{descriptionKillz1}</p>
      </div>
    </div>
  );
};

export default Games;

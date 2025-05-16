import React, { useState, useEffect } from "react";

const Gameplay = () => {
  const [showFirstVideo, setShowFirstVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstVideo(true);
    }, 1000); // Delay of 1 second

    return () => clearTimeout(timer);
  }, []);

  const description = `an intense journey driven by choice and strategy. Visual storytelling, responsive mechanics, and deep character interactions keep players hooked. The game's dynamic environment evolves based on player behavior, creating a uniquely personal story. This innovative approach to game design sets a new standard, blending cinematic elements with interactive gameplay to captivate both casual and hardcore gamers alike. Discover the power of immersion and choice in this groundbreaking adventure.`;

  return (
    <div className="flex flex-col md:flex-row h-auto min-h-screen bg-black text-white p-6 pt-28 gap-6">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center">
        {/* First video with delay */}
        <div className="mb-8 flex flex-col items-center">
          {showFirstVideo ? (
            <video
              src="https://raw.githubusercontent.com/oxiprojekt/gameplay/main/1_Vr3d_GamePlay1.mp4"
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              className="w-full max-w-md max-h-[40vh] object-contain rounded-lg mb-2"
            />
          ) : (
            <div className="w-full max-w-md h-[25vh] bg-gray-800 rounded-lg mb-2 animate-pulse" />
          )}
          <h2 className="text-base font-medium">VR game 1</h2>
          <h2 className="text-sm text-gray-500 font-normal mb-2">
            Unity with AR/VR
          </h2>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <video
            src="https://raw.githubusercontent.com/oxiprojekt/gameplay/main/3_3dMultiplayerSynchronise.mp4"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full max-w-md max-h-[40vh] object-contain rounded-lg mb-2"
          />
          <h2 className="text-base font-medium">Multiplayer</h2>
          <h2 className="text-sm text-gray-500 font-normal mb-2">
            Unity with Mirror plugin
          </h2>
        </div>


        <div className="mb-8 flex flex-col items-center">
          <video
            src="https://raw.githubusercontent.com/oxiprojekt/gameplay/main/5_SlidingWithPhysicsCollision.mp4"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full max-w-md max-h-[40vh] object-contain rounded-lg mb-2"
          />
          <h2 className="text-base font-medium">Sliding physics</h2>
          <h2 className="text-sm text-gray-500 font-normal mb-2">
            RayCasting
          </h2>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <video
            src="https://raw.githubusercontent.com/oxiprojekt/gameplay/main/7_3dLaserDodger_GamePlay.mp4"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full max-w-md max-h-[40vh] object-contain rounded-lg mb-2"
          />
          <h2 className="text-base font-medium">Laser dodger</h2>
          <h2 className="text-sm text-gray-500 font-normal mb-2">
            Unity engine
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center">
          <video
            src="https://raw.githubusercontent.com/oxiprojekt/gameplay/main/2_Vr3d_Gameplay2.mp4"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full max-w-md max-h-[40vh] object-contain rounded-lg mb-2"
          />
          <h2 className="text-base font-medium">VR game 2</h2>
          <h2 className="text-sm text-gray-500 font-normal mb-2">
            Unity with AR/VR
          </h2>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <video
            src="https://raw.githubusercontent.com/oxiprojekt/gameplay/main/4_3dPhysics.mp4"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full max-w-md max-h-[40vh] object-contain rounded-lg mb-2"
          />
          <h2 className="text-base font-medium">Physics 3D</h2>
          <h2 className="text-sm text-gray-500 font-normal mb-2">
            Unity engine
          </h2>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <video
            src="https://raw.githubusercontent.com/oxiprojekt/gameplay/main/6_3dNavMeshAiMovements.mp4"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full max-w-md max-h-[40vh] object-contain rounded-lg mb-2"
          />
          <h2 className="text-base font-medium">Hotel management</h2>
          <h2 className="text-sm text-gray-500 font-normal mb-2">
            NavMesh Agent
          </h2>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <video
            src="https://raw.githubusercontent.com/oxiprojekt/gameplay/main/9_3dWeaponSystem.mp4"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full max-w-md max-h-[40vh] object-contain rounded-lg mb-2"
          />
          <h2 className="text-base font-medium">Tiny weapon system</h2>
          <h2 className="text-sm text-gray-500 font-normal mb-2">
            Unity engine
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Gameplay;

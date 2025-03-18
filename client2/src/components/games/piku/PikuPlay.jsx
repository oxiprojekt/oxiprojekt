import React, { useEffect, useRef } from 'react';

const PikuPlay = () => {
  const unityInstanceRef = useRef(null); // To store the Unity instance
  const fullscreenButtonRef = useRef(null); // To reference the fullscreen button

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/src/components/games/piku/Build/WebGL.loader.js';  // Adjust the path if needed
    script.onload = () => {
      const canvas = document.getElementById('unity-canvas');
      
      // Ensure canvas has a fixed size
      canvas.width = 960;   // Set the width explicitly
      canvas.height = 600;  // Set the height explicitly

      const config = {
        dataUrl: '/src/components/games/piku/Build/WebGL.data.unityweb',
        frameworkUrl: '/src/components/games/piku/Build/WebGL.framework.js.unityweb',
        codeUrl: '/src/components/games/piku/Build/WebGL.wasm.unityweb',
        streamingAssetsUrl: 'StreamingAssets',  // Adjust if needed
        companyName: 'dyttostudios',
        productName: 'Piku',
        productVersion: '1.0',
        showBanner: (msg, type) => {
          console.log(msg, type);
        },
      };

      createUnityInstance(canvas, config, (progress) => {
        console.log(progress);  // Log progress while loading
      }).then((unityInstance) => {
        console.log('Unity WebGL loaded');
        unityInstanceRef.current = unityInstance; // Store the Unity instance

        // Disable audio (turn volume off)
        if (unityInstanceRef.current) {
          unityInstanceRef.current.SendMessage('AudioListener', 'set_volume', 0);  // Mute audio
        }

        // Add fullscreen functionality
        fullscreenButtonRef.current.onclick = () => {
          if (unityInstance) {
            unityInstance.SetFullscreen(1); // Set Unity WebGL to fullscreen
          }
        };
      }).catch((error) => {
        console.error('Error loading Unity WebGL:', error);
      });
    };

    document.body.appendChild(script);  // Append the script to the body

    return () => {
      document.body.removeChild(script);  // Cleanup the script on component unmount
    };
  }, []);

  return (
    <div
      id="unity-container"
      style={{
        width: '960px',
        height: '600px',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <canvas
        id="unity-canvas"
        width="960"
        height="600"
        style={{ width: '100%', height: '100%' }}
      />
      <div id="unity-loading-bar" style={{ display: 'block' }}>
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
      <div id="unity-warning"></div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        {/* Fullscreen button */}
        <div
          id="unity-fullscreen-button"
          ref={fullscreenButtonRef}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Fullscreen
        </div>
        <div id="unity-build-title">Loading... Piku</div>
      </div>
    </div>
  );
};

export default PikuPlay;

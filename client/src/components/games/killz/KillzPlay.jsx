import { useEffect } from 'react';
import './TemplateData/style.css';

const KillzPlay = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/src/components/games/killz/Build/WebGL.loader.js'; // Adjust the path if needed

    script.onload = () => {
      const canvas = document.getElementById('unity-canvas');
      
      // Ensure canvas has a fixed size
      canvas.width = 960;   // Set the width explicitly
      canvas.height = 600;  // Set the height explicitly

      const config = {
        dataUrl: '/src/components/games/killz/Build/WebGL.data.unityweb',
        frameworkUrl: '/src/components/games/killz/Build/WebGL.framework.js.unityweb',
        codeUrl: '/src/components/games/killz/Build/WebGL.wasm.unityweb',
        streamingAssetsUrl: 'StreamingAssets',  // Adjust if needed
        companyName: 'dyttostudios',
        productName: 'KillZ',
        productVersion: '1.0',
        showBanner: (msg, type) => {
          console.log(msg, type);
        },
      };

      createUnityInstance(canvas, config, (progress) => {
        console.log(progress); // Log progress while loading
      }).then((unityInstance) => {
        console.log('Unity WebGL loaded');

        // Store the unityInstance for later use
        window.unityInstance = unityInstance;

        // Handle fullscreen button click
        const fullscreenButton = document.getElementById('unity-fullscreen-button');
        fullscreenButton.onclick = () => {
          unityInstance.SetFullscreen(1); // Set Unity instance to fullscreen
        };

        // Optional: Add logic to make sure audio plays
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContext.resume().then(() => {
          console.log('Audio context resumed');
        }).catch((error) => {
          console.error('Error enabling audio:', error);
        });
        
        // You can also try explicitly enabling audio in Unity via UnityInstance
        // unityInstance.SendMessage("YourAudioObject", "EnableAudio", "true");

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
        <div id="unity-fullscreen-button"></div> {/* Fullscreen button */}
        <div id="unity-build-title">Killz</div>
      </div>
    </div>
  );
};

export default KillzPlay;

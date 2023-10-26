import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      {/* 3d gltf */}
      {/* <div className="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >

        <a-nft
          type="nft"
          url="./owl/owl-image/owl"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="./test.gltf"
            scale="5 5 5"
            position="50 150 0"
          >
          </a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene> */}


      {/* mp4 */}
      <div className="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer='antialias: true; alpha: true; precision: medium;'
        embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'>

        <a-assets>
        <video src="vid.mp4" preload="auto" id="vid" loop webkit-playsinline="true" autoPlay muted playsInline></video>

        </a-assets>

        <a-nft
          videohandler
          type='nft' url='./owl/owlCard/1'
          smooth="true" smoothCount="10" smoothTolerance="0.01" smoothThreshold="5"
        >
          <a-video
            src="#vid"
            position='50 150 -100'
            rotation='90 0 180'
            width='300'
            height='175'
          >
          </a-video>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </div>


  );
}

export default App;

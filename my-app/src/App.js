import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="arjs-loader">
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
          url="https://bubleygum.github.io/Logic-pwa8/owl.fset"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="test.gltf"
            scale="5 5 5"
            position="50 150 0"
          >
          </a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;

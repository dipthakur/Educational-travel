import React from "react";
import { ColorRing } from "react-loader-spinner";


function LoadingScreen() {
  return (
    <div className="loading-container">
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#419d9c', '#4db6ac', '#80cbc4', '#26a69a', '#00796b']}
    />
    <p>Loading...</p>
  </div>
  );
}

export default LoadingScreen;

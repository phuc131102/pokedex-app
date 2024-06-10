import React from "react";
import "./RotatingImage.css";

const RotatingImage = ({ src, alt }) => {
  return (
    <div className="rotating-image-container">
      <img src={src} alt={alt} className="rotating-image" />
    </div>
  );
};

export default RotatingImage;

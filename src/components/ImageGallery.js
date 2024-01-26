//boiler code of react
import React from "react";

const ImageGallery = ({ imageList }) => {
  return (
    <div className="mainImageConatiner">
      {imageList.map((item, index) => {
        return (
          <div key={index} className="imageBox">
            <img src={item.urls.regular} alt={item.alt_description} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;

import React from "react";

const ImageSlider = ({ images, currentImageIndex, onPrevClick, onNextClick}) => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-200">
      {images.length > 1 && (
        <button className="text-xl" onClick={onPrevClick}>
          {"<"}
        </button>
      )}
      <img
        src={URL.createObjectURL(images[currentImageIndex])}
        alt="selected images"
        className="w-[300px] h-[300px] object-contain border-2 border-[red]"
      />
      {images.length > 1 && (
        <button className="text-xl" onClick={onNextClick}>
          {">"}
        </button>
      )}
    </div>
  );
};

export default ImageSlider;

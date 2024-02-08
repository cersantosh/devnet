import React from "react";

const ImageSlider = ({
  selectedImages,
  currentImageIndex,
  onNextClick,
  onPrevClick,
}) => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-200">
      {selectedImages.length > 1 && (
        <button className="text-xl" onClick={onPrevClick}>
          {"<"}
        </button>
      )}
      <img
        src={URL.createObjectURL(selectedImages[currentImageIndex])}
        alt="selected images"
        className="w-[300px] h-[300px] object-contain border-2 border-[red]"
      />
      {selectedImages.length > 1 && (
        <button className="text-xl" onClick={onNextClick}>
          {">"}
        </button>
      )}
    </div>
  );
};

export default ImageSlider;

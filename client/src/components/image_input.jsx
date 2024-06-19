import React, { useState, useRef } from "react";

const ImageInput = ({ placeholder }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const imageId = Math.random().toString(36);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDiscardImage = () => {
    setSelectedImage(null);
    inputRef.current.value = ""; // Clear the file input value
  };

  return (
    <div className="mt-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={inputRef}
        className="hidden"
        id={`imageInput-${imageId}`} // Unique ID for each instance
      />
      <label
        htmlFor={`imageInput-${imageId}`}
        className="block cursor-pointer border-2 border-gray-300 border-dashed rounded-lg p-4"
      >
        {selectedImage ? (
          <div className="flex items-center">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full h-auto rounded-lg mr-2"
              style={{ maxHeight: "200px" }} // Adjust max height as needed
            />
            <button
              type="button"
              onClick={handleDiscardImage}
              className="bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Discard
            </button>
          </div>
        ) : (
          <p className="text-gray-600">{placeholder}</p>
        )}
      </label>
    </div>
  );
};

export default ImageInput;

import React from "react";
import { useState } from "react";
import UserInfo from "./user_info.jsx";
import ActionButtons from "./action_buttons.jsx";
import PostSettings from "./post_settings.jsx";

const PostModal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const profilePhoto = "assets/images/image2.jpg";
  const name = "santosh poudel";
  const text = "some random thought";
  const images = [
    "assets/images/image1.jpg",
    "assets/images/image2.jpg",
    "assets/images/image3.jpg",
  ];
  const taggedPeople = [
    {
      name: "John",
      username: "John",
    },
    {
      name: "John",
      username: "John",
    },
    {
      name: "John",
      username: "John",
    },
    {
      name: "John",
      username: "John",
    },
    {
      name: "John",
      username: "John",
    },
  ];
  const profileInfo = {
    profilePhoto,
    name,
    taggedPeople,
    bio: "very short bio of the user who is posting this",
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  return (
    <div className=" bg-white shadow-md rounded-md">
      {/* User Information */}
      <UserInfo profileInfo={profileInfo} />

      {/* Post Text */}
      <div className="p-4">
        <p className="text-gray-700">{text}</p>
      </div>

      {/* Post Images */}
      <div className="">
        <ImageSlider
          images={images}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
          currentImageIndex={currentImageIndex}
        />
      </div>
      <ActionButtons />
    </div>
  );
};

const ImageSlider = ({
  images,
  currentImageIndex,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-200">
      {images.length > 1 && (
        <button className="text-xl" onClick={onPrevClick}>
          {"<"}
        </button>
      )}
      <img
        src={images[currentImageIndex]}
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

export default PostModal;

import React from "react";
import CloseIcon from "../../icons/close_icon";

const SuggestedPeople = () => {
  return (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user, index) => (
        <UserInfo />
      ))}
    </div>
  );
};

const UserInfo = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <i className="fa-solid fa-circle-xmark text-xl "></i>
      <img
        src="assets/images/image2.jpg"
        alt="user's photo"
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
      <p className="text-gray-600">Santosh</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4 transition-colors duration-300">
        Follow
      </button>
    </div>
  );
};

export default SuggestedPeople;

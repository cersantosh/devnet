import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* love button */}
      <div className="flex flex-col justify-center items-center">
        <p>200K</p>
        <button className="flex flex-col items-center space-x-2 text-gray-500">
          <i class="fa-regular fa-heart"></i>
          Love
        </button>
      </div>

      {/* comment button */}
      <div className="flex flex-col justify-center items-center">
        <p>200K</p>

        <button className="flex flex-col items-center space-x-2 text-gray-500">
          <i class="fa-solid fa-comment"></i>
          Comment
        </button>
      </div>
      {/* share  */}
      <button className="flex flex-col items-center space-x-2 text-gray-500">
        <i class="fa-solid fa-share-from-square"></i>
        Share
      </button>
      {/* send  */}
      <button className="flex flex-col items-center space-x-2 text-gray-500">
        <i class="fa-solid fa-paper-plane"></i>
        Send
      </button>
    </div>
  );
};

export default ActionButtons;

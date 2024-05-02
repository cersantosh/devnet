import React, { useState } from "react";

const ActionButtons = () => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex justify-between items-center p-4">
      {/* love button */}
      <div className="flex flex-col justify-center items-center">
        <p>200K</p>
        <button
          className="flex flex-col items-center space-x-2 text-gray-500"
          onClick={toggleLike}
        >
          {liked ? (
            <i class="fa-solid fa-regular fa-heart" style={{color: "#63E6BE"}}></i>
          ) : (
            <i class="fa-regular fa-heart"></i>
          )}
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

import React, { useState } from "react";

const ActionButtons = () => {
  const [liked, setLiked] = useState(false);
  const [loveReactionsVisible, setLoveReactionsVisible] = useState(false);
  let pressTimer;
  const toggleLike = () => {
    setLiked(!liked);
  };
  function startPressTimer() {
    pressTimer = setTimeout(() => {
      displayReactions();
    }, 600);
  }
  function stopPressTimer() {
    clearTimeout(pressTimer);
  }
  function displayReactions() {
    setLoveReactionsVisible(!loveReactionsVisible);
  }
  function collapseReactions() {
    setLoveReactionsVisible(false);
  }
  return (
    <>
      <div className="flex justify-between items-center p-4">
        {/* love button */}
        <div
          className="flex flex-col relative justify-center items-center"
          onClick={collapseReactions}
        >
          <p>200K</p>
          <button
            className="flex flex-col items-center space-x-2 text-gray-500"
            onClick={toggleLike}
            onMouseDown={startPressTimer}
            onMouseUp={stopPressTimer}
            onMouseLeave={stopPressTimer}
          >
            {liked ? (
              <i
                class="fa-solid fa-regular fa-heart"
                style={{ color: "#63E6BE" }}
              ></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}
            Love
          </button>
          {loveReactionsVisible ? (
            <div className="absolute ml-16 z-10 mt-2 w-48 bg-white rounded-lg shadow-lg">
              <ul>
                <li className="px-4 py-2">Person 1</li>
                <li className="px-4 py-2">Person 2</li>
                <li className="px-4 py-2">Person 3</li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
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
    </>
  );
};

export default ActionButtons;

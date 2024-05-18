import React, { useState } from "react";

const MessageEllipsis = ({ options }) => {
  const [openEllipsis, setOpenEllipsis] = useState(false);
  function toggleEllipsis() {
    setOpenEllipsis(!openEllipsis);
  }

  return (
    <div
      className="relative flex m-2 h-8 w-8 items-center justify-center hover:bg-white transition-all rounded-full duration-400"
      onClick={toggleEllipsis}
    >
      <i className="fa-solid fa-ellipsis"></i>
      <ul className="absolute top-10 right-0 w-32 shadow-md rounded-md bg-gray-400 z-10">
        {openEllipsis &&
          options.map((option, index) => {
            return (
              <li
                key={index}
                className="hover:bg-white"
                onClick={option.action}
              >
                {option.choice}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MessageEllipsis;

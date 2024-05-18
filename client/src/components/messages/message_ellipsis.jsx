import React, { useEffect, useRef, useState } from "react";

const MessageEllipsis = ({ options }) => {
  const [isEllipsisOpen, setIsEllipsisOpen] = useState(false);
  const ellipsisRef = useRef(null);

  const openEllipsis = () => {
    setIsEllipsisOpen(!isEllipsisOpen);
  };

  const closeEllipsis = () => {
    setIsEllipsisOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ellipsisRef.current && !ellipsisRef.current.contains(event.target)) {
        closeEllipsis();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeEllipsis]);

  return (
    <div
      className="relative flex m-2 h-8 w-8 items-center justify-center hover:bg-white transition-all rounded-full duration-400"
      onClick={openEllipsis}
      ref={ellipsisRef}
    >
      <i className="fa-solid fa-ellipsis"></i>
      <ul className="absolute top-10 right-0 w-32 shadow-md rounded-md bg-gray-400 z-10">
        {isEllipsisOpen &&
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

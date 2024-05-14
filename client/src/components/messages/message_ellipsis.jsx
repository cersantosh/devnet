import React, { useState } from "react";

const MessageEllipsis = () => {
   const [openEllipsis, setOpenEllipsis] = useState(false);
   function toggleEllipsis() {
      setOpenEllipsis(!openEllipsis);
   }
  return (
    <div className="relative flex m-2 h-8 w-8 items-center justify-center hover:bg-white transition-all rounded-full duration-400" onClick={toggleEllipsis}>
        <i className="fa-solid fa-ellipsis"></i>
        {openEllipsis && <div className="absolute mt-12">hello</div>}
    </div>
  );
};

export default MessageEllipsis;

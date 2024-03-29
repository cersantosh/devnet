import React from "react";

const DialogBox = ({isOpen, onClose, onAction, details}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inset-0 z-50 overflow-y-auto flex justify-center items-center">
          <div className="relative bg-white rounded-lg p-8 w-96">
            <h2 className="text-xl font-semibold mb-4">{details.title}</h2>
            <p className="mb-6">{details.message}</p>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={onAction}
              >
                {details.actionName}
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogBox;

import React, { useState, useEffect } from "react";
const CommentModal = ({ isOpen, onClose, comments, onSubmit }) => {
  const [newComment, setNewComment] = useState("");
useEffect(() => {
  if (isOpen) {
    // Disable background scrolling when modal is open
    document.body.classList.add("overflow-hidden");
  } else {
    // Re-enable background scrolling when modal is closed
    document.body.classList.remove("overflow-hidden");
  }

  return () => {
    // Cleanup function to re-enable scrolling when component unmounts
    document.body.classList.remove("overflow-hidden");
  };
}, [isOpen]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      onSubmit(newComment);
      setNewComment("");
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  Comments
                </h3>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left max-h-96 overflow-y-auto">
                <div className="mt-2">
                  <ul className="divide-y divide-gray-200">
                    {comments.map((comment, index) => (
                      <li key={index} className="py-4 flex">
                        <div className="flex-shrink-0 mr-3">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={comment.picture}
                            alt={comment.name}
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{comment.name}</p>
                          <p className="text-sm text-gray-500">{comment}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={onClose}
                  type="button"
                  className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mt-3 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
              />
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-2 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Add Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;

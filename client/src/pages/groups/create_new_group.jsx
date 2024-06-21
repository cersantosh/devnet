import React, { useState, useEffect, useRef } from "react";
import ImageInput from "../../components/image_input";
import { questionCategories } from "../../constants/discussion_constant";

const CreateNewGroupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
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
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupPhoto, setGroupPhoto] = useState(null);
  const tagRef = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [groupPrivacy, setGroupPrivacy] = useState("");
  const [selectedOption, setSelectedOption] = useState(null); // State to track selected radio option

  const privacyOptions = [
    {
      id: 1,
      mode: "Public",
      label: "publicGroup",
      description: "Anyone can view and contribute",
      icon: "fa-solid fa-globe ml-4 mt-4",
    },
    {
      id: 2,
      mode: "Restricted",
      label: "restrictedGroup",
      description: "Anyone can view, but only approved users can contribute",
      icon: "fa-solid fa-eye-slash ml-4 mt-4",
    },
    {
      id: 3,
      mode: "Private",
      label: "privateGroup",
      description: "Only approved users can view and contribute",
      icon: "fa-solid fa-lock ml-4 mt-4",
    },
  ];

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setGroupPhoto(file);
  };

  const toggleScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };

  const handleWheel = (event) => {
    const container = tagRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + event.deltaY,
        behavior: "smooth",
      });
    }
  };

  const handlePrivacyOptionChange = (optionId) => {
    setSelectedOption(optionId); // Update selected option in state
    privacyOptions.map((option) => {
      if (optionId === option.id) {
        setGroupPrivacy(option.mode);
        console.log(groupPrivacy);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const group = { name: groupName, mode: groupPrivacy };
    onClose();
  };
  return (
    <>
      <div className="fixed overflow-y-auto z-10 inset-0">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* div for gray background */}
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          {/* div for the model */}
          <div className="inline-block align-bottom bg-white rounded-lg text-left h-full max-h-screen shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {/* div for close button */}
              <div className="fixed top-0 right-0 pt-2 pr-2">
                <button
                  onClick={onClose}
                  type="button"
                  className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150"
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
              <form onSubmit={handleSubmit}>
                <div>
                  <header className="sticky font-bold text-xl text-center mt-2">
                    Create a New Group
                  </header>
                  <div className="flex flex-col">
                    <h1 className="font-semibold">Cover Photo:</h1>
                    <ImageInput placeholder={"Select Cover Photo for Group"} />
                    <label htmlFor="groupname" className="mt-2 font-semibold">
                      Group Name:
                    </label>
                    <input
                      required
                      className="block border-2 border-gray-300 rounded-lg p-2"
                      type="text"
                      name="groupname"
                      id="groupname"
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                      placeholder="Give a descriptive name for your group"
                    />

                    <p className="font-semibold mt-2">Group Photo:</p>
                    <ImageInput placeholder={"Select Photo for Group"} />
                    <label
                      htmlFor="groupDescription"
                      className="mt-2 font-semibold"
                    >
                      Description:
                    </label>
                    <textarea
                      id="groupDescription"
                      required
                      name="groupDescription"
                      className="block w-full border-2 border-gray-300 rounded-md mt-2"
                      rows="9"
                      placeholder="Give a short description about your group"
                      value={groupDescription}
                      onChange={(e) => setGroupDescription(e.target.value)}
                    ></textarea>
                    <p className="font-semibold mt-2">Tags for Group</p>
                    <p>Add tags to help people discover your group.</p>
                    <ul
                      className={`flex flex-row max-w-full overflow-hidden ${
                        scrollEnabled ? "overflow-x-auto" : ""
                      }`}
                      ref={tagRef}
                      onMouseEnter={toggleScroll}
                      onMouseLeave={toggleScroll}
                      onWheel={handleWheel}
                    >
                      {questionCategories.map((tag, index) => (
                        <li className="flex border-2 p-1 m-1" key={index}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-semibold">Set privacy</p>
                  <p>Decide who can view and contribute to your group.</p>
                  <ul className="mt-4">
                    {privacyOptions.map((privacyOption) => (
                      <li className="hover:bg-slate-400" key={privacyOption.id}>
                        <label
                          htmlFor={privacyOption.label}
                          className="flex justify-between"
                        >
                          <i className={privacyOption.icon}></i>
                          <div>
                            <p>{privacyOption.mode}</p>
                            <p>{privacyOption.description}</p>
                          </div>
                          <input
                            type="radio"
                            required
                            className="mr-4"
                            name={privacyOption.label}
                            value={privacyOption.id}
                            id={privacyOption.label}
                            checked={selectedOption === privacyOption.id}
                            onChange={() =>
                              handlePrivacyOptionChange(privacyOption.id)
                            }
                          />
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="border-2 rounded-xl shadow-md p-1 ml-80 mt-4 hover:bg-slate-600 hover:text-white"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border-2 rounded-xl shadow-md p-1 ml-4 mt-4 hover:bg-blue-600 hover:text-white"
                    onClick={""}
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewGroupModal;

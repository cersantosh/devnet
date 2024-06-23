import React, { useState } from "react";

const GroupPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [notificationStatus, setNotificationStatus] = useState(false);
  const group = {
    name: "devnet",
    profilePhoto:
      "https://wallpapers.com/images/high/funny-people-pictures-m9busr1hdqhri3zs.webp",
    coverPhoto:
      "https://wallpapers.com/images/featured-full/funny-meme-pictures-ppzthb74p3b686b9.jpg",
  };

  const groupPosts = [
    {
      id: 1,
      user: "Ujjwal",
      title: "Is react a library or a framework?",
      description: "hjfjsdfjsjdnfisdf sdofiisdofnsdfnsoid oisdfo oifsodifsdf",
      likes: 25,
      dislikes: 5,
      comments: 10,
    },
    {
      id: 2,
      user: "Ujjwal",
      title: "Is react a library or a framework?",
      description: "hjfjsdfjsjdnfisdf sdofiisdofnsdfnsoid oisdfo oifsodifsdf",
      likes: 25,
      dislikes: 5,
      comments: 10,
    },
  ];

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleMouseMove = (e) => {
    if (isEditing) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setPosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsEditing(false);
  };

  const toggleNotification = () => {
    setNotificationStatus(!notificationStatus);
  };

  return (
    <>
      <div>
        <div className="relative h-64 mx-4 mt-4 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${group.coverPhoto})`,
              backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              cursor: isEditing ? "move" : "default",
            }}
            onMouseDown={handleMouseMove}
          ></div>
          <button
            className="absolute bottom-4 right-4 bg-blue-500 text-white px-2 py-1 rounded"
            onClick={toggleEditing}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        {/* <div className="h-64 overflow-hidden">
          <img
            src="https://wallpapers.com/images/featured-full/funny-meme-pictures-ppzthb74p3b686b9.jpg"
            alt="Group's Cover Photo"
            className="object-cover w-full h-full m-2 border-2 rounded-lg"
          />
        </div> */}
        <div className="flex ml-2 mt-4">
          <img
            src={group.profilePhoto}
            alt="Group's Profile Photo"
            className="shadow-md rounded-full h-28"
          />
          <h1 className="font-bold ml-4">{group.name}</h1>
          <button type="button" className="border-2 rounded-lg p-1 ml-4 h-10">
            Ask a question
          </button>
          <button
            type="button"
            className="border-2 rounded-xl px-2 ml-4 h-10"
            onClick={toggleNotification}
          >
            <i
              className={`p-2 ${
                notificationStatus
                  ? "fa-solid fa-bell"
                  : "fa-solid fa-bell-slash"
              }`}
            ></i>
          </button>
          {
            <button type="button" className="border-2 rounded-lg p-1 ml-4 h-10">
              Join
            </button>
          }
        </div>
        <div className="flex justify-evenly m-2 h-96">
          <div className="border-2 w-3/5 h-full bg-gray-400">
            <ul>
              {groupPosts.map((groupPost) => (
                <li
                  key={groupPost.id}
                  className="p-4 border-2 cursor-pointer hover:bg-slate-300"
                >
                  <p className="font-semibold">Posted by {groupPost.user}</p>
                  <p className="font-bold">{groupPost.title}</p>
                  <p>{groupPost.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 w-2/5 h-full text-white bg-gray-800">
            <p>Group Description</p>
            <p className="m-1"> Group Moderator: Ujjwal</p>
            <p className="m-1">Group Rules:</p>
            <div className="m-2">
              <li>Rule 1</li>
              <li>Rule 2</li>
              <li>Rule 3</li>
              <li>Rule 4</li>
              <li>Rule 5</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupPage;

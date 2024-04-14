
import { useState } from "react";
const UserInfo = ({ profileInfo }) => {
  const [isOthersPeopleClicked, setIsOthersPeopleClicked] = useState(false);
  const closeTaggedList = () => {
    setIsOthersPeopleClicked(false);
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="p-4 flex items-center">
          <img
            src={profileInfo.profilePhoto}
            alt="User"
            className="w-10 h-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="text-gray-800 font-medium">{profileInfo.name}</p>
            <p>
              {profileInfo.bio.length >= 25
                ? `${profileInfo.bio.slice(0, 25)} ...`
                : profileInfo.bio}
            </p>
            <p>25m ago</p>
          </div>
        </div>
        {profileInfo.taggedPeople.length > 2 && (
          <p>
            is with{" "}
            <span className="font-bold">
              {profileInfo.taggedPeople[0].name}
              {", "}
            </span>
            <span className="font-bold">
              {profileInfo.taggedPeople[1].name}{" "}
            </span>
            <span
              className="font-bold"
              onClick={() => setIsOthersPeopleClicked(!isOthersPeopleClicked)}
            >
              and {profileInfo.taggedPeople.length - 2} others
            </span>
          </p>
        )}
        {profileInfo.taggedPeople.length == 2 && (
          <p>
            is with{" "}
            <span className="font-bold">
              {profileInfo.taggedPeople[0].name}{" "}
            </span>
            {" and "}
            <span className="font-bold">
              {profileInfo.taggedPeople[1].name}{" "}
            </span>
          </p>
        )}

        {profileInfo.taggedPeople.length == 1 && (
          <p>
            is with{" "}
            <span className="font-bold">
              {profileInfo.taggedPeople[0].name}{" "}
            </span>
          </p>
        )}
      </div>
      {isOthersPeopleClicked && <TaggedPeopleList onClose={closeTaggedList} />}
    </div>
  );
};

const TaggedPeopleList = ({ onClose }) => {
    const people = [
      {
        profilePhoto: "url",
        name: "John",
      },
      {
        profilePhoto: "url",
        name: "John",
      },
      {
        profilePhoto: "url",
        name: "John",
      },
      {
        profilePhoto: "url",
        name: "John",
      },
      {
        profilePhoto: "url",
        name: "John",
      },
      {
        profilePhoto: "url",
        name: "John",
      },
      {
        profilePhoto: "url",
        name: "John",
      },
    ];
    return (
      <div className="fixed left-[50%] translate-x[-50%] translate-y-[-50%] top-[50%] bg-slate-300 p-2 w-[250px] h-[70vh] overflow-y-auto flex flex-col items-center z-10">
        <i
          className="fa-solid fa-circle-xmark text-xl cursor-pointer"
          onClick={onClose}
        ></i>
  
        <div className="w-full overflow-auto">
          {people.map((person, index) => (
            <div
              key={index}
              className="flex justify-around items-center p-4 bg-white rounded-lg shadow-md space-x-1 mb-2"
            >
              <img
                src="assets/images/image1.jpg"
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <p className="mt-2 text-center text-lg font-semibold">
                {person.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default UserInfo;

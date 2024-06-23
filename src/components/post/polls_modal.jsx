import React, { useState } from "react";
import ActionButtons from "./action_buttons";
import UserInfo from "./user_info";

const PollsModal = () => {
  const [pollsInfo, setPollsInfo] = useState({
    question: "What is the correct answer ?",
    options: [
      {
        answer: "i am comming",
        votes: 10,
      },
      {
        answer: "good to go",
        votes: 5,
      },
      {
        answer: "that's awesome",
        votes: 15,
      },
      {
        answer: "very well",
        votes: 20,
      },
    ],
  });
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  let totalVotes = 0;

  const countTotalVotes = () => {
    for (const option of pollsInfo.options) {
      totalVotes += option.votes;
    }
  };
  countTotalVotes();

  const handleVote = (index) => {
    if (selectedOptionIndex !== null) {
      // Decrease the vote count for the previously selected option
      pollsInfo.options[selectedOptionIndex].votes -= 1;
    }
    // Increase the vote count for the newly selected option
    pollsInfo.options[index].votes += 1;
    // Update the selected option index
    setSelectedOptionIndex(index);
    // Update the pollsInfo state
    setPollsInfo({ ...pollsInfo });
  };

  const profilePhoto = "assets/images/image2.jpg";
  const name = "santosh poudel";
  const text = "some random thought";
  const images = [
    "assets/images/image1.jpg",
    "assets/images/image2.jpg",
    "assets/images/image3.jpg",
  ];
  const taggedPeople = [
    {
      name: "John",
      username: "John",
    },
    {
      name: "John",
      username: "John",
    },
    {
      name: "John",
      username: "John",
    },
    {
      name: "John",
      username: "John",
    },
    {
      name: "John",
      username: "John",
    },
  ];
  const profileInfo = {
    profilePhoto,
    name,
    taggedPeople,
    bio: "very short bio of the user who is posting this",
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
        <UserInfo profileInfo={profileInfo}/>
      {/* question */}
      <h2 className="text-lg font-semibold mb-4">{pollsInfo.question}</h2>
      <div className="space-y-2">
        {pollsInfo.options.map((option, index) => (
          <div key={index} className="flex justify-between">
            <div className="w-[90%] flex border-2">
              <input
                type="radio"
                id={`option-${index}`}
                name="poll-option"
                onChange={() => handleVote(index)}
                className="mr-2"
              />
              <div className="flex flex-col w-full">
                <label htmlFor={`option-${index}`}>{option.answer}</label>
                <meter
                  value={(option.votes / totalVotes) * 100}
                  min="0"
                  max="100"
                  className="w-full"
                ></meter>
              </div>
            </div>
            <div className="w-[10%] border-2">
              <p>{option.votes} votes</p>
            </div>
          </div>
        ))}
      </div>
      <p>Total votes : {totalVotes}</p>
      <ActionButtons />
    </div>
  );
};

export default PollsModal;

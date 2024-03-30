import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RichTextEditor from "../../components/editor/rich_text_editor";

const QuestionDetailsPage = () => {
  const location = useLocation();
  const question = location.state && location.state.question;
  const [userAnswer, setUserAnswer] = useState("");
  let tempUserAnswer = "";

  const getUserAnswer = (answer) => {
    tempUserAnswer = answer;
  };

  const handleAnswerSubmit = () => {
    setUserAnswer(tempUserAnswer);
    setAnswer("");
  };

  // answer related
  const [isViewAnswerClicked, setIsViewAnswerClicked] = useState(false);
  const viewAllAnswer = () => {
    setIsViewAnswerClicked(!isViewAnswerClicked);
  };
  const [answer, setAnswer] = useState("");
  const editAnswer = () => {
    setAnswer(userAnswer);
  };
  return (
    <div className="p-4">
      {/* question section */}
      <div className="flex">
        {/* user details */}
        <div className="flex flex-col justify-center items-center mr-2">
          <img
            src={question.askedUser.profilePhoto}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <p>{question.askedUser.name}</p>
        </div>

        <h1 className="text-2xl font-bold mb-4">{question.title}</h1>
      </div>

      {/* answers count and vote count */}
      <div className="flex justify-center items-end space-x-5">
        {/* vote count */}
        <div className="flex flex-col justify-center items-center hover:cursor-pointer">
          <p className="text-gray-600">{question.voteCount}</p>
          <p>Votes</p>
        </div>
        {/* answer count */}
        <p className="cursor-pointer" onClick={viewAllAnswer}>
          View {question.answersCount} Answers
        </p>
      </div>

      {/* answer list */}
      {isViewAnswerClicked && (
        <div className="">
          {[1, 2, 3, 4, 5].map(() => (
            <div className="flex mb-2 items-start space-x-2">
              {/* user details */}
              <div className="flex flex-col justify-center items-center mr-2">
                <img
                  src={question.askedUser.profilePhoto}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <p>{question.askedUser.name}</p>
              </div>

              <div>
                <p>answer 1</p>
                <div className="flex space-x-3">
                  <div className="flex space-x-1 items-center">
                    <p>10</p>
                    <i className="fa-regular fa-heart"></i>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <p>5</p>
                    <i className="fa-solid fa-heart-crack"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* my answer */}
      <div>
        <p className="text-gray-700 font-bold">My Answer</p>
        <p dangerouslySetInnerHTML={{ __html: userAnswer }}></p>
        <p className="cursor-pointer" onClick={editAnswer}>
          Edit <i class="fa-solid fa-pen-to-square"></i>{" "}
        </p>
      </div>

      {/* rich text editor */}
      <div className="mb-4">
        <label htmlFor="answer" className="block text-gray-700 font-bold mb-2">
          Your Answer
        </label>
        <RichTextEditor
          placeholder="Type your answer here ..."
          getValue={getUserAnswer}
          value={answer}
        />
      </div>

      {/* Submit Answer Button */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleAnswerSubmit}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default QuestionDetailsPage;

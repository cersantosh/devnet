import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RichTextEditor from "../../components/editor/text_editor";


const QuestionDetailsPage = () => {
  const location = useLocation();
  const question = location.state && location.state.question;

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleAnswerSubmit = () => {
    // Handle the logic for submitting the answer
    console.log("Answer submitted:", answer);
    // You may want to send the answer to the server or perform other actions
  };

  return (
    <div className="p-4">
      {/* question title */}
      <h1 className="text-2xl font-bold mb-4">{question.title}</h1>

      {/* vote count and user profile */}
      <div className="flex items-center space-x-4 mb-4">
        {/* vote count */}
        <div className="flex flex-col justify-center items-center hover:cursor-pointer">
          <p className="text-gray-600">{question.voteCount}</p>
          <span>Votes</span>
        </div>
        {/* user information */}
        <div className="flex items-center">
          <img
            src={question.askedUser.profilePhoto}
            alt={question.askedUser.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="ml-2">{question.askedUser.name}</p>
        </div>
      </div>

      {/* answers count */}
      <div className="flex flex-col justify-center items-center">
        <span>View {question.answersCount} Answers</span>
      </div>

      {/* Answer Textarea */}
      <div className="mb-4">
        <label htmlFor="answer" className="block text-gray-700 font-bold mb-2">
          Your Answer
        </label>
        <textarea
          id="answer"
          className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
          rows="4"
          placeholder="Type your answer here..."
          onChange={handleAnswerChange}
        ></textarea>
      </div>
      <RichTextEditor/>

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

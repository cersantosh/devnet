import React, { useState } from "react";
import {
  questionCategories,
  errorCategories,
} from "../../constants/discussion_constant";
import RichTextEditor from "../../components/editor/rich_text_editor";

const AskQuestionPage = () => {
  const [question, setQuestion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [isAskQuestionClicked, setIsAskQuestionClicked] = useState(true);
  const handleSubmit = () => {
    // Implement your logic for handling the question submission
    if (!question.trim()) {
      setErrorMessage("Please provide a description for your question.");
    } else {
      // Handle the submission (e.g., send to server or perform other actions)
      console.log("Question:", question);
      console.log("Error Message:", errorMessage);
      console.log("Code Snippet:", codeSnippet);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={() => setIsAskQuestionClicked(true)}
        >
          Ask a Question
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={() => setIsAskQuestionClicked(false)}
        >
          Solve an Error
        </button>
      </div>
      {isAskQuestionClicked ? <AskQuestion /> : <SolveAnError />}
    </div>
  );
};

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = () => {};

  const handleTags = (event) => {
    const value = event.target.value;
    if (value.includes(".")) {
      const prevTags = [...tags];
      prevTags.push(value.replace(".", ""));
      setTags(prevTags);
      event.target.value = "";
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ask a Question</h1>

      <form action="">
        {/* question title */}
        <div className="mb-4">
          <label
            htmlFor="question"
            className="block text-gray-700 font-bold mb-2"
          >
            Question title <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Enter question title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="question"
            className="block text-gray-700 font-bold mb-2"
          >
            Describe Your Question :
          </label>
          <RichTextEditor placeholder="Describe your question ..." />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Select Category <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="category"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Start typing to select a category"
            list="categories"
            required
          />
          <datalist id="categories">
            {questionCategories.map((cat) => (
              <option key={cat} value={cat} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="tags" className="block mb-2">
            Tags <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            id="tags"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Enter some tags..."
            onChange={handleTags}
          />
          <div className="flex flex-wrap space-x-2">
            {tags.map((tag) => (
              <p className="bg-amber-50 p-1">{tag}</p>
            ))}
          </div>
        </div>

        <RequestUser />

        <input
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
          value="Submit Question"
        />
      </form>
    </div>
  );
};

const SolveAnError = () => {
  const [tags, setTags] = useState([]);
  const handleTags = (event) => {
    const value = event.target.value;
    if (value.includes(".")) {
      const prevTags = [...tags];
      prevTags.push(value.replace(".", ""));
      setTags(prevTags);
      event.target.value = "";
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Solve Your Issue</h1>
      <form action="">
        {/* error title */}
        <div className="mb-4">
          <label
            htmlFor="question"
            className="block text-gray-700 font-bold mb-2"
          >
            Error title <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Enter error title"
          />
        </div>

        {/* problem description */}
        <div className="mb-4">
          <label
            htmlFor="question"
            className="block text-gray-700 font-bold mb-2"
          >
            Problem Description <span className="text-[red]">*</span>
          </label>
          <RichTextEditor placeholder="Describe the problem ..." />
        </div>

        {/* error message */}
        <div className="mb-4">
          <label
            htmlFor="errorMessage"
            className="block text-gray-700 font-bold mb-2"
          >
            Error Message <span className="text-[red]">*</span>
          </label>
          <textarea
            id="errorMessage"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Paste the error message"
          ></textarea>
        </div>

        {/* code */}
        <div className="mb-4">
          <label
            htmlFor="codeSnippet"
            className="block text-gray-700 font-bold mb-2"
          >
            Share Your Code <span className="text-[red]">*</span>
          </label>
          <textarea
            id="codeSnippet"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            rows="6"
            placeholder="Paste your code"
          ></textarea>
        </div>

        {/* category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Select Category <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="category"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Start typing to select a category"
            list="categories"
            required
          />
          <datalist id="categories">
            {errorCategories.map((cat) => (
              <option key={cat} value={cat} />
            ))}
          </datalist>
        </div>

        {/* tags */}
        <div>
          <label htmlFor="tags" className="block mb-2">
            Tags <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            id="tags"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Enter some tags..."
            onChange={handleTags}
          />
          <div className="flex flex-wrap space-x-2">
            {tags.map((tag) => (
              <p className="bg-amber-50 p-1">{tag}</p>
            ))}
          </div>
        </div>

        <RequestUser />

        <input
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          value="Post Issue"
        />
      </form>
    </div>
  );
};

const User = () => {
  return (
    <div className="flex space-x-2">
      <img
        src="assets/images/image1.jpg"
        alt="profile photo"
        className="w-8 h-8 rounded-full mr-2 object-cover"
      />
      <p>name</p>
    </div>
  );
};

const RequestUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedUsers, setSuggestedUsers] = useState([
    {
      profilePhoto: "assets/images/image1.jpg",
      name: "santosh",
    },
    {
      profilePhoto: "assets/images/image1.jpg",
      name: "santosh",
    },
    {
      profilePhoto: "assets/images/image1.jpg",
      name: "santosh",
    },
    {
      profilePhoto: "assets/images/image1.jpg",
      name: "santosh",
    },
    {
      profilePhoto: "assets/images/image1.jpg",
      name: "santosh",
    },
  ]);

  const handleSearch = () => {};

  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-semibold mb-4">Request Users</h3>

      <div className="mb-4 flex justify-center items-center space-x-2">
        <input
          type="search"
          placeholder="Search users"
          className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i class="fa-brands fa-searchengin"></i>
      </div>

      <div className="flex justify-around">
        <div>
          <p>Searched Users</p>
          <div className="space-y-2">
            {suggestedUsers.map((user) => (
              <User />
            ))}
          </div>
        </div>

        <div>
          <p>Suggested Users</p>
          <div className="space-y-2">
            {suggestedUsers.map((user) => (
              <User />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 bg-blue-500 p-2">
        {[1, 2, 3, 4, 5, 6].map((user) => (
          <div className="flex justify-center items-center space-x-2">
            <User />
            <i class="fa-solid fa-trash"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskQuestionPage;

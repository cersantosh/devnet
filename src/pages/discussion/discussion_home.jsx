import { useState } from "react";
import NavBar from "../../components/navigation/nav_bar";
import SearchBar from "../../components/buttons/search_bar";
import { useNavigate } from "react-router-dom";
import { questionCategories } from "../../constants/discussion_constant";

const DiscussionHome = () => {
  const navigate = useNavigate();
  const [isGeneralButtonClicked, setIsGeneralButtonClicked] = useState(true);
  const [isVoteClicked, setIsVoteClicked] = useState(false);
  const [question, setQuestion] = useState({
    title: "How to use React Hooks ?",
    voteCount: 15,
    answersCount: 5,
    category: "React",
    askedTime: "2 hours ago",
    askedUser: {
      name: "John Doe",
      profilePhoto: "assets/images/image1.jpg",
    },
  });

  const handleVote = (event) => {
    event.stopPropagation()
    const updatedVoteClicked = !isVoteClicked;
    setIsVoteClicked(!isVoteClicked);
    if (updatedVoteClicked) {
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        voteCount: prevQuestion.voteCount + 1,
      }));
    } else {
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        voteCount: prevQuestion.voteCount - 1,
      }));
    }
  };

  return (
    <div className="container mx-auto space-y-2">
      <NavBar />
      <SearchBar placeholder="Search Questions..." />
      <FilterQuestionOptions />
      <div
        className="fixed right-0 top-[50%] translate-y-[-50%] rotate-90 bg-gray-400 cursor-pointer"
        onClick={() => navigate("/ask_question")}
      >
        Ask Question
      </div>
      <div className="flex space-x-4 justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsGeneralButtonClicked(true)}
        >
          General
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsGeneralButtonClicked(false)}
        >
          Error
        </button>
      </div>

      <div className="space-y-2">
        {[1, 2, 3, 4].map((q, index) => (
          <QuestionModal
            question={question}
            key={index}
            handleVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
};

const QuestionModal = ({ question, handleVote }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white p-4 rounded-md shadow-md hover:cursor-pointer"
      onClick={() => navigate("/question_details", { state: { question } })}
    >
      {/* Question Section */}
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
      {/* posted time */}
      <div className="flex justify-end">
        <time title="Posted Time">{question.askedTime}</time>
      </div>
      {/* vote, Answer Count and question category */}
      <div className="flex items-center justify-center mt-4 space-x-2">
        {/* vote count */}
        <div
          className="flex flex-col justify-center items-center hover:cursor-pointer"
          onClick={handleVote}
        >
          <p className="text-gray-600">{question.voteCount}</p>
          <span>Votes</span>
        </div>
        {/* answer count */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-600">{question.answersCount}</p>
          <span>Answers</span>
        </div>

        {/* Category */}
        <p
          className=" text-gray-600 bg-slate-300 p-1 rounded-lg"
          title="Category"
        >
          {question.category}
        </p>
      </div>
    </div>
  );
};

const FilterQuestionOptions = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    onFilterChange(selectedFilter);
  };

  return (
    <div className="flex justify-center space-x-4">
       
       {/* filter by category */}
       <div>
        <input
          type="text"
          id="filterOptions"
          className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
          placeholder="Categories ..."
          list="categories"
          onChange={handleFilterChange}
        />
        <datalist id="categories">
            {questionCategories.map((cat) => (
              <option key={cat} value={cat} />
            ))}
          </datalist>
      </div>
      {/* Filter by Unanswered or Answers */}
      <div>
        <input
          type="text"
          id="filterOptions"
          className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
          placeholder="Question status..."
          list="filterOptionsList"
          onChange={handleFilterChange}
        />
        <datalist id="filterOptionsList">
          <option value="Unanswered" />
          <option value="Answered" />
        </datalist>
      </div>

      {/* Asked Date */}
      <div className="">
        <input
          type="text"
          id="askedDate"
          className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
          placeholder="Asked time..."
          list="askedDateOptionsList"
          onChange={handleFilterChange}
        />
        <datalist id="askedDateOptionsList">
          <option value="Any Time" />
          <option value="Past 24 Hours" />
          <option value="Past 1 Month" />
        </datalist>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded space-x-2">
        <i className="fa-solid fa-filter"></i>
        <span>Filter</span>
      </button>
    </div>
  );
};

export default DiscussionHome;

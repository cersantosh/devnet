import { useState } from "react";
import JobModal from "../../components/job/job_modal";
import PostSettingsIcon from "../../components/post/post_settings_icon";
import { useNavigate } from "react-router-dom";

const JobsSettings = () => {
  const navigate = useNavigate();
  const companyLogo = "assets/images/image1.jpg";
  const companyName = "ProShorts";
  const jobTitle = "Senior Sotware Engineer";
  const jobLocation = "America";
  const jobType = "Remote";
  const postedDate = "2 days ago";
  const jobInfo = {
    companyLogo,
    companyName,
    jobTitle,
    jobLocation,
    jobType,
    postedDate,
  };
  const jobDetails = {
    id: 1,
    jobTitle: "Software Engineer",
    jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    jobLocation: "New York, NY",
    jobType: "Full Time",
    experience: "2-4 years",
    salaryRange: "$80,000 - $100,000",
    companyInformation: "ABC Tech Solutions",
    deadline: "2023-12-31",
    howToApply: "Send your resume to careers@abc-tech.com",
    skillsRequired: ["JavaScript", "React", "Node.js"],
    education: "Bachelor's degree in Computer Science",
    companyContactDetails: "John Doe - CEO | contact@abc-tech.com",
  };

  const showJobDetails = () => {
    navigate("/job_details", {
      state: {
        jobDetails,
      },
    });
  };
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [toggledCategories, setToggledCategories] = useState([]);

  const categories = [
    {
      id: 1,
      name: "Country",
      choices: [
        "United States",
        "United Kingdom",
        "Germany",
        "Canada",
        "Australia",
        "India",
        "Nepal",
        "Japan",
        "Netherlands",
        "Sweden",
        "Singapore",
        "Switzerland",
        "Ireland",
        "Norway",
        "Denmark",
        "Finland",
        "Israel",
        "Others",
      ],
    },
    {
      id: 2,
      name: "Job Category",
      choices: [
        "Web Developer",
        "Game Developer",
        "React.js Developer",
        "AngularJs Developer",
        "Vue.Js Developer",
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Mobile App Developer",
        "UI/UX Designer",
      ],
    },
    {
      id: 3,
      name: "Job Type",
      choices: ["Full-time", "Part-time", "Contract", "Internship", "Remote"],
    },
    {
      id: 4,
      name: "Experience Level",
      choices: ["Entry Level", "Junior", "Mid-Level", "Senior"],
    },
    {
      id: 5,
      name: "Salary Range",
      choices: [],
    },
  ];
  const handleSelect = (choice) => {
    setSelectedChoice(choice);
  };
  // Function to toggle category visibility
  const toggleCategory = (categoryId) => {
    if (toggledCategories.includes(categoryId)) {
      setToggledCategories(toggledCategories.filter((id) => id !== categoryId));
    } else {
      setToggledCategories([...toggledCategories, categoryId]);
    }
  };
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-center text-white p-4">
        {/* Header content */}
        Available Jobs
      </header>
      <div className="flex">
        <div className="fixed top-0 left-0 w-1/4 h-full mt-14 bg-gray-300 p-4 overflow-auto">
          {/* Display categories and choices */}
          {categories.map((category) => (
            <div key={category.id} className="mb-4">
              <div
                className="cursor-pointer flex items-center justify-between"
                onClick={() => toggleCategory(category.id)}
              >
                <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
                <svg
                  className={`w-6 h-6 transition-transform transform ${
                    toggledCategories.includes(category.id) ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              {toggledCategories.includes(category.id) && (
                <div className="flex flex-row flex-wrap">
                  {category.choices.map((choice) => (
                    <button
                      key={choice}
                      className={`mr-2 mb-2 px-4 py-2 border rounded-lg ${
                        selectedChoice === choice
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleSelect(choice)}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 mt-14 ml-1/4">
          {/* Container for scrollable content */}
          <div className="pl-60 overflow-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((job, index) => (
              <div className="relative">
                <JobModal
                  key={index}
                  jobInfo={jobInfo}
                  onClick={showJobDetails}
                />
                <PostSettingsIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsSettings;

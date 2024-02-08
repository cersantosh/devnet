import { useNavigate } from "react-router-dom";
import JobModal from "../../components/job/job_modal";
import NavBar from "../../components/navigation/nav_bar";
import {
  countries,
  experienceLevels,
  jobPostedTime,
  jobTypes,
  jobsCategories,
} from "../../constants/job_constant";

const JobsHomePage = () => {
  const navigate = useNavigate();
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

  const showJobDetails = () => {
    navigate("/job_details", {
      state: {
        jobDetails,
      },
    });
  };
  return (
    <div className="space-y-3">
      <NavBar />
      <JobSearchAndFilter />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((job, index) => (
        <JobModal key={index} jobInfo={jobInfo} onClick={showJobDetails} />
      ))}
    </div>
  );
};

const JobSearchAndFilter = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center">
      {/* Search Bar */}
      <div className="flex justify-center items-center space-x-3 w-full mb-3">
        <input
          type="text"
          id="category"
          className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
          placeholder="Search Jobs..."
          list="job-categories"
          required
        />
        <datalist id="job-categories">
          {jobsCategories.map((cat) => (
            <option key={cat} value={cat} />
          ))}
        </datalist>
        <i class="fa-brands fa-searchengin"></i>
      </div>

      {/* Filter Options */}
      <div className="flex space-x-4">
        <div className="flex items-center">
          <input
            type="text"
            id="category"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Select Time.."
            list="job-posted-time"
            required
          />
          <datalist id="job-posted-time">
            {jobPostedTime.map((time) => (
              <option key={time} value={time} />
            ))}
          </datalist>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            id="category"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Select Country.."
            list="job-locations"
            required
          />
          <datalist id="job-locations">
            {countries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            id="category"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Select job type..."
            list="job-type"
            required
          />
          <datalist id="job-type">
            {jobTypes.map((type) => (
              <option key={type} value={type} />
            ))}
          </datalist>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            id="category"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Select Experience level..."
            list="experience-level"
            required
          />
          <datalist id="experience-level">
            {experienceLevels.map((level) => (
              <option key={level} value={level} />
            ))}
          </datalist>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            id="salaryRange"
            className="ml-2 p-2 border border-gray-300 rounded"
            placeholder="Enter salary range in $.."
          />
        </div>
      </div>
      <button className="py-2 px-4 bg-blue-500 text-white rounded-md mt-2 w-[100px]">
        Filter
      </button>
    </div>
  );
};

export default JobsHomePage;

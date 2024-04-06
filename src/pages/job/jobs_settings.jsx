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

  return (
    <div>
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-2">All Posted Jobs</h1>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((job, index) => (
          <div className="relative">
            <JobModal key={index} jobInfo={jobInfo} onClick={showJobDetails} />
            <PostSettingsIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsSettings;

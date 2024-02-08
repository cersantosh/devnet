import React from "react";
import { useLocation } from "react-router-dom";

const JobDetailsPage = () => {
  const location = useLocation();
  const jobDetails = location.state && location.state.jobDetails;
  const {
    jobTitle,
    jobDescription,
    jobLocation,
    jobType,
    experience,
    salaryRange,
    companyInformation,
    deadline,
    howToApply,
    skillsRequired,
    education,
    companyContactDetails,
  } = jobDetails;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{jobTitle}</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div>
          <h2 className="font-bold mb-2">Company:</h2>
          <p className="text-gray-700">{companyInformation}</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Location:</h2>
          <p className="text-gray-700">{jobLocation}</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">Job Description:</h2>
        <p className="text-gray-700">{jobDescription}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div>
          <h2 className="font-bold mb-2">Type:</h2>
          <p className="text-gray-700">{jobType}</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Experience:</h2>
          <p className="text-gray-700">{experience}</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Salary:</h2>
          <p className="text-gray-700">{salaryRange}</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">Skills Required:</h2>
        <ul className="list-disc pl-4">
          {skillsRequired.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">Education Requirements:</h2>
        <p className="text-gray-700">{education}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">How to Apply:</h2>
        <p className="text-gray-700">{howToApply}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">Deadline:</h2>
        <p className="text-gray-700">{deadline}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">Company Contact:</h2>
        <p className="text-gray-700">{companyContactDetails}</p>
      </div>

      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetailsPage;

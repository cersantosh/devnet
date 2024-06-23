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

      <div className="mb-4">
        <h2 className="font-bold mb-2">Company Information :</h2>

        <div className="flex space-x-2 justify-center items-center mb-2">
          <img
            src="assets/images/image1.jpg"
            alt="company-logo"
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
          <p className="text-gray-700">ABC Tech Solutions</p>
        </div>
        <p>
          TechNex Solutions is a leading provider of innovative software
          solutions for businesses worldwide. Our team of experts specializes in
          developing cutting-edge applications and providing top-notch
          consulting services.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">Job Description:</h2>
        <p className="text-gray-700">{jobDescription}</p>
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

      <table className="divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Location
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Experience
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Salary
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Deadline
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{jobLocation}</td>
            <td className="px-6 py-4 whitespace-nowrap">{jobType}</td>
            <td className="px-6 py-4 whitespace-nowrap">{experience}</td>
            <td className="px-6 py-4 whitespace-nowrap">{salaryRange}</td>
            <td className="px-6 py-4 whitespace-nowrap">{deadline}</td>
          </tr>
        </tbody>
      </table>

      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        <a href="" target="_blank">
          Apply Now
        </a>
      </button>
    </div>
  );
};

export default JobDetailsPage;

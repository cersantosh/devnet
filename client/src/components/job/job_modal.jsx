import React from "react";

const JobModal = ({ jobInfo, onClick }) => {
  const { companyLogo, companyName, jobTitle, jobLocation, jobType, postedDate } = jobInfo;

  return (
    <div className=" bg-white p-6 rounded-md shadow-md flex items-center justify-around hover:cursor-pointer" onClick={onClick}>
      <div className="flex flex-col justify-center items-center">
        {/* Company Logo */}
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-16 h-16 mb-4 rounded-full"
        />

        {/* Company Name */}
        <p className="text-2xl font-bold text-center mb-2">{companyName}</p>
      </div>

      <div>
        {/* Job Title */}
        <p className="text-lg font-semibold text-center text-gray-700 mb-2">
          {jobTitle}
        </p>

        {/* Job Location and Type */}
        <p className="text-center text-sm text-gray-500 mb-4">
          {jobLocation} | {jobType}
        </p>
      </div>

      {/* job posted date */}
      <p className="text-sm text-gray-500">{postedDate}</p>
    </div>
  );
};

export default JobModal;

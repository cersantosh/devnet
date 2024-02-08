import React from "react";
import { useState } from "react";

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    skills: [],
  });

  const handleSkills = (event) => {
    const { value } = event.target;
    if (value.includes(".")) {
      const skills = formData.skills;
      skills.push(value.replace(".", ""));
      event.target.value = "";
      setFormData({ ...formData, skills });
    }
  };

  const deleteSkills = (index) => {
    const skills = formData.skills;
    skills.splice(index, 1);
    setFormData({ ...formData, skills });
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">Post a Job</h1>

      <form>
        {/* Job Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Job Title <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter the job title"
            required
          />
        </div>

        {/* Job Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Job Description <span className="text-[red]">*</span>
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md min-h-[100px]"
            rows="4"
            placeholder="Enter the job description"
            required
          ></textarea>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Location <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter the job location"
            required
          />
        </div>

        {/* Job Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Job Type <span className="text-[red]">*</span>
          </label>
          <div className="relative">
            <select
              className="block border w-full px-4 py-2 mt-1 leading-5 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
              name="jobType"
              id="jobType"
            >
              <option value="" disabled>
                Select Job Type
              </option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Experience <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter experience level (e.g., Entry-level, Mid-level)"
            required
          />
        </div>

        {/* Salary Range */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Salary Range <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter the salary range"
            required
          />
        </div>

        {/* Company Information */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Company Information <span className="text-[red]">*</span>
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md min-h-[100px]"
            rows="4"
            placeholder="Provide information about the company"
            required
          ></textarea>
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Application Deadline <span className="text-[red]">*</span>
          </label>
          <input
            type="date"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter the application deadline"
          />
        </div>

        {/* How to Apply */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            How to Apply <span className="text-[red]">*</span>
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md min-h-[100px]"
            rows="4"
            placeholder="Provide instructions on how to apply"
            required
          ></textarea>
        </div>

        {/* Skills Required */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Skills Required <span className="text-[red]">*</span>
          </label>
          <input
            onChange={handleSkills}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter required skills (comma-separated)"
            required
          />

          <div className="flex flex-wrap gap-2 mt-2">
            {formData.skills.map((skill, index) => (
              <div className="bg-blue-600 p-2 flex justify-center items-center space-x-2 text-white rounded-md">
                <p>{skill}</p>
                <i
                  className="fa-solid fa-circle-xmark hover:cursor-pointer"
                  onClick={() => deleteSkills(index)}
                ></i>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Education <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter required educational background"
            required
          />
        </div>

        {/* Company Contact Details */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Company Contact Details <span className="text-[red]">*</span>
          </label>
          <textarea
            name=""
            id=""
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Contact information"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobPostingForm;

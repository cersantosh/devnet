// ProfileForm.js
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateProfile = () => {
  const [selectedProfilePhoto, setSelectedProfilePhoto] = useState(null);
  const [formData, setFormData] = useState({
    profilePhoto: "",
    name: "",
    username : "",
    socialMedias: [],
    bio: "",
    skills: [],
  });

  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files[0];
    const uniqueName = `${uuidv4()}${file.name}`;
    setFormData({ ...formData, profilePhoto: uniqueName });
    setSelectedProfilePhoto(file);
  };
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create Profile</h1>

      <form>
        {/* User Profile Picture */}
        <div className="flex items-center flex-col">
          <div className="bg-[#9934fe] w-[100px] h-[100px] rounded-full flex justify-center items-center">
            {formData.profilePhoto && (
              <label htmlFor="profile-photo" className="w-full h-full">
                <img
                  src={URL.createObjectURL(selectedProfilePhoto)}
                  alt="profile-photo"
                  className="w-full h-full rounded-full"
                />
              </label>
            )}
            <input
              type="file"
              id="profile-photo"
              name="profilePhoto"
              className="hidden"
              accept="image/*"
              onChange={handleProfilePhotoUpload}
            />
            {!selectedProfilePhoto && (
              <label
                htmlFor="profile-photo"
                className="w-full h-full flex justify-center items-center flex-col"
              >
                <i className="fa-solid fa-file-arrow-up text-white"></i>
                <p className="text-[13px] text-center text-white">
                  Upload profile photo
                </p>
              </label>
            )}
          </div>

          {/* {isProfilePhotoEmpty && (
            <p className="text-[red]">Please select a profile photo.</p>
          )} */}
        </div>

        {/* User's Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            User's Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your full name"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your username"
          />
        </div>

        {/* Education */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Education
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your education details"
          />
        </div>

        {/* Skills and Technologies */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Skills and Technologies
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your skills and technologies (comma-separated)"
          />
        </div>

        {/* Hobbies */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Hobbies
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your hobbies"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Location
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your location"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Bio</label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            placeholder="Write a short bio about yourself"
          ></textarea>
        </div>

        {/* Social Media Links */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Social Media Links
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your social media links (comma-separated)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;

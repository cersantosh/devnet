// ProfileForm.js
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  hobbies,
  skillsList,
  socialMediasList,
} from "../../constants/profile_constant.js";
const CreateProfile = () => {
  const [selectedProfilePhoto, setSelectedProfilePhoto] = useState(null);
  const [isSkillsEmpty, setIsSkillsEmpty] = useState(false);
  const [isHobbiesEmpty, setIsHobbiesEmpty] = useState(false);
  const [formData, setFormData] = useState({
    profilePhoto: "",
    name: "",
    username: "",
    socialMedias: [],
    bio: "",
    skills: [],
    education: "",
    hobbies: [],
    location: "",
  });

  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files[0];
    const uniqueName = `${uuidv4()}${file.name}`;
    setFormData({ ...formData, profilePhoto: uniqueName });
    setSelectedProfilePhoto(file);
  };

  const handleSkillsToggle = (skill) => {
    const updatedSkills = formData.skills.includes(skill)
      ? formData.skills.filter((s) => s !== skill)
      : [...formData.skills, skill];
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleHobbiesToggle = (hobby) => {
    const updatedSkills = formData.hobbies.includes(hobby)
      ? formData.hobbies.filter((s) => s !== hobby)
      : [...formData.hobbies, hobby];
    setFormData({ ...formData, hobbies: updatedSkills });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSocailMedias = (event) => {
    const { value, name } = event.target;
    const socialMediaToChange = formData.socialMedias.findIndex(
      (socialMedia) => socialMedia.name === name
    );

    const socialMedias = formData.socialMedias;
    socialMedias[socialMediaToChange].url = value;
    setFormData({ ...formData, socialMedias });
  };

  const selectSocialMedia = (event) => {
    const { name } = event.target;
    const data = {
      name,
      url: "",
    };
    let socialMedias = formData.socialMedias;
    const isSocialMediaAlreadyClicked = socialMedias.some(
      (socialMedia) => socialMedia.name === name
    );
    if (isSocialMediaAlreadyClicked) {
      socialMedias = socialMedias.filter(
        (socialMedia) => socialMedia.name !== name
      );
    } else {
      socialMedias.push(data);
    }
    setFormData({ ...formData, socialMedias });
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
                  className="w-full h-full rounded-full object-cover"
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
              required
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
            Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your full name"
            required
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
            required
          />
        </div>

        {/* Education */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Education
          </label>
          <textarea
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your education details"
            required
          />
        </div>

        {/* Skills and Technologies */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Skills
          </label>
          <div className="flex flex-wrap">
            {skillsList.map((skill) => (
              <span
                key={skill}
                onClick={() => handleSkillsToggle(skill)}
                className={`p-4 border rounded-md cursor-pointer m-2 ${
                  formData.skills.includes(skill)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>

          {isSkillsEmpty && (
            <p className="text-[red]">Please select at least one skilss.</p>
          )}
        </div>

        {/* Hobbies */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Hobbies
          </label>
          <div className="flex flex-wrap">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                onClick={() => handleHobbiesToggle(hobby)}
                className={`p-4 border rounded-md cursor-pointer m-2 ${
                  formData.hobbies.includes(hobby)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {hobby}
              </span>
            ))}
          </div>

          {isHobbiesEmpty && (
            <p className="text-[red]">Please select at least one hobbies.</p>
          )}
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
            Social Medias
          </label>
          {socialMediasList.map((socialMedia, index) => (
            <div key={index} className="flex items-center mt-1">
              <input
                type="checkbox"
                id={socialMedia}
                name={socialMedia}
                className="mr-2"
                onChange={selectSocialMedia}
              />
              <label htmlFor={socialMedia}>{socialMedia}</label>
              {formData.socialMedias.some((s) => s.name === socialMedia) && (
                <input
                  type="url"
                  name={socialMedia}
                  id={socialMedia}
                  placeholder={`Enter ${socialMedia} URL`}
                  className="ml-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleSocailMedias}
                />
              )}
            </div>
          ))}
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

// ProfileForm.js
import React, { useState } from "react";
import {
  hobbies,
  skillsList,
  socialMediasList,
} from "../../constants/profile_constant.js";
import { useForm } from "react-hook-form";


const CreateProfile = () => {
  const {register, handleSubmit} = useForm();
  const [isSkillsEmpty, setIsSkillsEmpty] = useState(false);
  const [isHobbiesEmpty, setIsHobbiesEmpty] = useState(false);
  const [formData, setFormData] = useState({
    socialMedias: [],
    bio: "",
    skills: [],
    education: "",
    hobbies: [],
    location: "",
  });


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

  const profileSchema = {
      "education": "education",
      "skills": [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB"
      ],
      "hobbies": [
        "Reading",
        "Traveling",
        "Gaming"
      ],
      "bio": "bio",
      "social_medias": [
        {
          "name": "LinkedIn",
          "link": "https://www.linkedin.com/in/username"
        },
        {
          "name": "GitHub",
          "link": "https://github.com/username"
        },
        {
          "name": "Twitter",
          "link": "https://twitter.com/username"
        }
      ]
    
    
  }

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create Profile</h1>

      <form>

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

import React from "react";
import PostModal from "../../components/post/post_modal";
import PollsModal from "../../components/post/polls_modal";
import { useState } from "react";
import EventModal from "../../components/events/event_modal";
import JobModal from "../../components/job/job_modal";
import { useNavigate } from "react-router-dom";
import PostSettingsIcon from "../../components/post/post_settings_icon";
import PostSettings from "../../components/post/post_settings";
import SearchBar from "../../components/buttons/search_bar";

const OwnProfilePage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("posts");

  // events related
  const events = [
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1",
      organizerInfo: "organizer_info",
      registration: "registration_link_1",
    },
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1",
      organizerInfo: "organizer_info",
      registration: "registration_link_1",
    },
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1",
      organizerInfo: "organizer_info",
      registration: "registration_link_1",
    },
  ];

  const showEventDetails = (eventDetails) => {
    navigate("/event_details", {
      state: {
        eventDetails,
      },
    });
  };
  const myDetails = {
    profilePhoto: "",
    name: "santosh poudel",
    username: "santosh",
    education:
      "I pursued my academic journey with a Bachelor of Science in Computer Science from Tech University, where I graduated in 2020 with a GPA of 3.8 out of 4.0. Building upon this foundation, I furthered my education with a Master of Science in Software Engineering at Code Academy, completing my degree in 2023 with a perfect GPA of 4.0.",
    skills: ["React Js", "Javascript", "Node.js"],
    hobbies: ["Reading", "Cooking", "Photography"],
    location: "Pokhara",
    bio: "Passionate programmer with a knack for problem-solving and a keen eye for detail. Experienced in various programming languages including JavaScript, Python, and Java. Enthusiastic about learning new technologies and constantly seeking to expand my knowledge. Proficient in developing web applications, APIs, and database management systems",
    socialMedias: [
      { name: "linkedin", url: "some" },
      { name: "github", url: "some" },
      { name: "facebook", url: "some" },
      { name: "instagram", url: "some" },
      { name: "twitter", url: "some" },
      { name: "portfolio", url: "some" },
    ],
  };

  // job related
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

  // followers showing related
  const [followersOrFollowing, setFollowersOrFollowing] = useState("");

  const closeFollowersFollowingList = () => {
    setFollowersOrFollowing("");
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Profile</h1>
      <div>
        {/* Profile photo */}
        <div className="mb-4 flex justify-center">
          <img
            src="assets/images/image2.jpg"
            alt="profile-photo"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        {/* followers and following */}
        <div className="flex justify-center space-x-5 mb-2 text-center">
          <div
            className="cursor-pointer"
            onClick={() => setFollowersOrFollowing("followers")}
          >
            <p className="text-lg font-semibold">Followers</p>
            <p className="text-gray-700">2M</p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setFollowersOrFollowing("following")}
          >
            <p className="text-lg font-semibold">Following</p>
            <p className="text-gray-700">5</p>
          </div>
          {followersOrFollowing &&
            (followersOrFollowing == "followers" ? (
              <FollowersFollowingList
                usersList={[]}
                text="Followers"
                buttonText="Follow Back"
                closeList={closeFollowersFollowingList}
              />
            ) : (
              <FollowersFollowingList
                usersList={[]}
                text="Following"
                buttonText="Unfollow"
                closeList={closeFollowersFollowingList}
              />
            ))}
        </div>

        {/* Name and username */}
        <div className="mb-4 flex justify-center">
          <p className="text-xl font-bold text-gray-800">
            {myDetails.name} | @{myDetails.username}
          </p>
        </div>

        {/* Bio */}
        <div className="mb-4 flex justify-center">
          <p className="w-1/2 text-justify">{myDetails.bio}</p>
        </div>

        <div className="flex">
          <div className="bg-slate-400 w-[30%] h-screen overflow-auto">
            {/* Education */}
            <div className="mb-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="w-1/2 text-justify">{myDetails.education}</p>
            </div>

            {/* Skills */}
            <div className="mb-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <ul className="list-disc">
                {myDetails.skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Hobbies */}
            <div className="mb-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Hobbies</h3>
              <ul className="list-disc">
                {myDetails.hobbies.map((hobby) => (
                  <li>{hobby}</li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="mb-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p>{myDetails.location}</p>
            </div>

            {/* Social Media Links */}
            <div className="mb-4 flex justify-center">
              <div className="space-x-2">
                {myDetails.socialMedias.map((socialMedia) => {
                  if (socialMedia.name === "portfolio") {
                    return (
                      <a href={socialMedia.url}>
                        <i className="fa-solid fa-address-book"></i>
                      </a>
                    );
                  }
                  return (
                    <a href={socialMedia.url}>
                      <i className={`fa-brands fa-${socialMedia.name}`}></i>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* posts, polls, events and jobs */}
          <div className="bg-red-500 w-[70%]">
            {/* posts, events, polls and jobs buttons */}
            <div className="space-x-4 flex justify-center sticky top-1 bg-[red]">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedOption("posts")}
              >
                Posts
              </button>
              <button
                className="bg-yellow-500  hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedOption("polls")}
              >
                Polls
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedOption("events")}
              >
                Events
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedOption("jobs")}
              >
                Jobs
              </button>
            </div>

            <div className="p-3 space-y-2">
              {/* showing posts */}
              {selectedOption === "posts" && (
                <>
                  {[1, 2, 3, 4].map((post) => (
                    <div className="relative">
                      <PostModal />
                      <PostSettingsIcon />
                    </div>
                  ))}
                </>
              )}

              {/* showing polls */}
              {selectedOption === "polls" && (
                <>
                  {[1, 2, 3, 4].map((poll) => (
                    <div className="relative">
                      <PollsModal />
                      <PostSettingsIcon />
                    </div>
                  ))}
                </>
              )}

              {/* showing events */}
              {selectedOption === "events" && (
                <>
                  {events.map((event) => (
                    <div className="relative">
                      <EventModal
                        event={event}
                        onClick={() => showEventDetails(event)}
                      />
                      <PostSettingsIcon />
                    </div>
                  ))}
                </>
              )}

              {/* showing jobs */}
              {selectedOption === "jobs" && (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FollowersFollowingList = ({ usersList, closeList, text, buttonText }) => {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col bg-white justify-center items-center z-50 shadow-lg p-4 w-96 max-h-[70vh]">
      {/* followers text and close icon */}
      <div className="flex items-center justify-between mb-4 w-full">
        <h2 className="text-lg font-semibold">{text}</h2>
        <i
          className="fa-solid fa-xmark text-xl cursor-pointer"
          onClick={closeList}
        ></i>
      </div>

      {/* search bar */}
      <SearchBar placeholder={`Search ${text} ...`} />

      {/* follwers list */}
      <ul className="divide-y divide-gray-200 w-full overflow-auto mt-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user) => (
          <li key={user.id} className="py-2 flex items-center">
            {/* image */}
            <img
              src="assets/images/image2.jpg"
              alt="user1"
              className="h-8 w-8 rounded-full mr-2 object-cover"
            />
            {/* name and username */}
            <div>
              <p className="text-xs text-gray-600">santosh</p>
              <p className="text-sm font-semibold">@program</p>
            </div>
            {/* follow back button */}
            <button className="ml-auto bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
              {buttonText}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnProfilePage;

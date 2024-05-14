import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../settings/sidebar";
import AllMessages from "../../pages/messages/message_list";

const NavBar = () => {
  const [showPostOptions, setShowPostOptions] = useState(false);
  const [showUserSettings, setShowUserSettings] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const handlePostOptionsToggle = () => {
    setShowPostOptions(!showPostOptions);
  };
  const handleUserSettings = () => {
    setShowUserSettings(!showUserSettings);
  };
  const handleMessages = () => {
    setShowMessages(!showMessages);
  };

  return (
    <nav className="sticky top-0 left-0 z-10">
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        {/* Logo or Branding */}
        <div className="text-white font-bold">Logo</div>

        {/* Navigation Links */}
        <ul className="flex space-x-2">
          <NavLink to="/" label="Home" />
          <NavLink to="/jobs" label="Jobs" />
          <NavLink to="/events" label="Events" />
          <NavLink to="/discussion" label="Discussion" />
        </ul>

        <div className="flex space-x-4">
          <i
            className="fa-solid fa-bars text-white hover:cursor-pointer"
            title="Menu"
            onClick={handlePostOptionsToggle}
          ></i>
          <i
            className="fa-solid fa-user text-white"
            onClick={handleUserSettings}
          ></i>
          <i className="fa-solid fa-bell text-white"></i>
          <Link to="/message_list">
            <i className="fa-solid fa-message text-white"></i>
          </Link>
        </div>
      </div>
      {showPostOptions && <PostOptions />}
      {showUserSettings && <Sidebar />}
    </nav>
  );
};

const NavLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="text-white hover:text-gray-300 transition duration-300"
    >
      {label}
    </Link>
  </li>
);

const PostOptions = () => {
  return (
    <div className="absolute right-1 bg-gray-800 p-2 text-white">
      <ul className="space-y-2 p-1">
        <li>
          <Link to="/create_post">Create Post</Link>
        </li>
        <li>
          <Link to="/upload_event">Create Events</Link>
        </li>
        <li>
          <Link to="/polls">Create Polls</Link>
        </li>
        <li>
          <Link to="/post_job">Post Job</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

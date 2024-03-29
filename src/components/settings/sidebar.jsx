import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="absolute right-0 w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">User Menu</h2>
        <ul>
          <li className="mb-2">
            <Link to="/create_profile" className="block py-2 px-4 hover:bg-gray-700">
            Create Profile
            </Link>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Jobs
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Events
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Questions
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Account Settings
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Privacy Settings
            </a>
          </li>
        </ul>
      </div>
      <a href="#" className="block py-2 px-4 hover:bg-gray-700">
        Log Out
      </a>
    </div>
  );
};

export default Sidebar;

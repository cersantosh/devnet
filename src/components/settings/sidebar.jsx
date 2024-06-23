import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DialogBox from "../dialog_box/dialog_box";
import authService from "../../services/auth_service";
const Sidebar = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const showDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    await authService.logout();
    setTimeout(() => {
      navigate("/login");
    }, 300);
  };

  return (
    <div className="absolute right-0 w-64 bg-gray-800 text-white flex flex-col border border-[red] h-[calc(100vh-56px)]">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">User Menu</h2>
        <ul>
          <li className="mb-2">
            <Link
              to="/own_profile"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/jobs_settings"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Jobs
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="/events_settings"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Events
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="/questions_settings"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Questions
            </Link>
          </li>

          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Groups
            </a>
          </li>

          <li className="mb-2">
            <Link
              to="/account_settings"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Account Settings
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p
          className="block py-2 px-4 hover:bg-gray-700 cursor-pointer"
          onClick={showDialog}
        >
          Log Out
        </p>
        {isDialogOpen && (
          <DialogBox
            isOpen={isDialogOpen}
            onClose={closeDialog}
            onAction={logout}
            details={{
              title: "Logout",
              message: "Are you sure want to logout",
              actionName: "Logout",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;

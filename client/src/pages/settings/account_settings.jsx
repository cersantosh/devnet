import { useState } from "react";
import DialogBox from "../../components/dialog_box/dialog_box";
const AccountSettings = () => {
  const [optionClicked, setOptionClicked] = useState("account_info");
  const accountInfo = {
    name: "Santosh Poudel",
    username: "uniqueboy",
    email: "uniqueboy@gmail.com",
  };
  const changeOptionClicked = (option) => {
    setOptionClicked(option);
  };
  return (
    <div className="flex">
      <div className="w-[30%]">
        <LeftSideBar changeOptionClicked={changeOptionClicked} />
      </div>

      <div className="w-[70%]">
        {optionClicked === "account_info" && (
          <AccountInfo accountInfo={accountInfo} />
        )}
        {optionClicked === "change_password" && <ChangePassword />}
        {optionClicked === "delete_account" && <DeleteAccount />}
      </div>
    </div>
  );
};

const DeleteAccount = ({isDialogOpen, closeDialog, deleteAccount}) => {
  return (
    <div>
      <DialogBox
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onAction={deleteAccount}
        details={{
          title: "Delete Account",
          message: "Are you sure want to delete the account. It can't be undo.",
          actionName: "Delete",
        }}
      />
    </div>
  );
};

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password change logic here
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match.");
      return;
    }
    // Proceed with password change
    console.log("Changing password...");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <h2 className="text-lg font-semibold mb-4">Change Password</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="currentPassword"
          >
            Current Password
          </label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          type="submit"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

const AccountInfo = ({ accountInfo }) => {
  return (
    <div className="p-6">
      <div className="mb-4 flex space-x-2">
        <p className="font-medium text-gray-500 uppercase">Name : </p>
        <p className="font-semibold text-gray-800">{accountInfo.name}</p>
      </div>

      <div className="mb-4 flex space-x-2">
        <p className=" text-gray-500 uppercase font-medium">Username : </p>
        <p className="font-semibold text-gray-800">{accountInfo.username}</p>
      </div>

      <div className="flex space-x-2">
        <p className=" text-gray-500 uppercase font-medium">Email : </p>
        <p className="font-semibold text-gray-800">{accountInfo.email}</p>
      </div>
    </div>
  );
};

const LeftSideBar = ({ changeOptionClicked }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const showDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const deleteAccount = () => {};

  return (
    <div className="bg-gray-200 h-screen p-4">
      {/* Sidebar Header */}
      <h2 className="text-lg font-semibold mb-4">Account Settings</h2>

      {/* Account Settings Options */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <p
            onClick={() => changeOptionClicked("account_info")}
            className="cursor-pointer"
          >
            Account Information
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <p
            onClick={() => changeOptionClicked("change_password")}
            className="cursor-pointer"
          >
            Change Password
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <p
            onClick={() => {
                showDialog();
            }}
            className="cursor-pointer"
          >
            Delete Account
          </p>
          {isDialogOpen && <DeleteAccount isDialogOpen={isDialogOpen} closeDialog={closeDialog} onAction = {deleteAccount}/>}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

import { useState } from "react";
import DialogBox from "../dialog_box/dialog_box.jsx";
const PostSettings = ({ onClose }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleEdit = () => {
    // Handle edit action
  };

  const showDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const deletePost = () => {};

  const handleChangePrivacy = () => {
    // Handle change privacy action
  };

  return (
    <div className="absolute right-1 top-5 bg-white shadow-md rounded-md p-4 w-48 z-20">
      <ul className="space-y-2">
        <li className="flex items-center cursor-pointer" onClick={handleEdit}>
          <span className="mr-2">Edit</span>
          <i className="fas fa-edit"></i>
        </li>
        <li className="flex items-center cursor-pointer">
          <span className="mr-2" onClick={showDialog}>
            Delete
          </span>
          <i className="fas fa-trash-alt"></i>
          {isDialogOpen && (
            <DialogBox
              isOpen={isDialogOpen}
              onClose={closeDialog}
              onAction={deletePost}
              details={{
                title: "Delete Post",
                message:
                  "Are you sure want to delete this post. It can't be undo.",
                actionName: "Delete",
              }}
            />
          )}
        </li>
        <li
          className="flex items-center cursor-pointer"
          onClick={handleChangePrivacy}
        >
          <details>
            <summary className="mr-2">
              Change Privacy <i className="fas fa-lock"></i>
            </summary>

            <div className="flex flex-col items-center justify-center">
              <div className="w-full flex justify-around">
                <input type="radio" id="public" name="privacy" />
                <label htmlFor="public">Public</label>
              </div>
              <div className="w-full flex justify-around">
                <input type="radio" id="private" name="privacy" />
                <label htmlFor="private">Private</label>
              </div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </details>
        </li>
      </ul>
      <button
        onClick={onClose}
        className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default PostSettings;

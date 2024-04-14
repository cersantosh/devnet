import { useState } from "react";
import PostSettings from "../../components/post/post_settings";

const PostSettingsIcon = () => {
    const [isSettingClicked, setIsSettingClicked] = useState(false);
    const closePostSettings = () => {
      setIsSettingClicked(false);
    };
    const togglePostSettings = () => {
      setIsSettingClicked(!isSettingClicked);
    };
    return (
      <>
        <i
          className="fa-solid fa-ellipsis mr-2 absolute right-1 top-1"
          onClick={togglePostSettings}
        ></i>
  
        {isSettingClicked && <PostSettings onClose={closePostSettings} />}
      </>
    );
  };

  export default PostSettingsIcon;
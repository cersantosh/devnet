import UserService from "../../service/user/user_service.js";
const userService = new UserService();
import { upload } from "../upload/upload_images.js";

const isUserAndUsernameExist = async (req, res, next) => {
  console.log("ma user exist middleware");
  console.log("user exist req.body", req.body);
  try {
    const { email, username } = req.body;
    const isUserExist = await userService.checkUserExist(email);
    const isUsernameExist = await userService.checkUsernameExist(username);
    if (isUserExist) {
      return res.status(409).json({
        success: true,
        code: "USER_EXIST",
        message: "User exist with this email.",
      });
    }

    if (isUsernameExist) {
      return res.status(409).json({
        success: true,
        code: "USERNAME_EXIST",
        message: "Username already taken.",
      });
    }

    if (!isUserExist && !isUsernameExist) {
      next();
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

// const isUserAndUsernameExist = async (req, res, next) => {
//   try {
//     // Wait for multer to parse the form data
//     await upload.none()(req, res, () => {});
//     console.log("req.body from user exist", req.body);

//     const { email, username } = req.body;
//     const isUserExist = await userService.checkUserExist(email);
//     const isUsernameExist = await userService.checkUsernameExist(username);

//     if (isUserExist) {
//       return res.status(409).json({
//         success: false,
//         code: "USER_EXIST",
//         message: "User exists with this email.",
//       });
//     }

//     if (isUsernameExist) {
//       return res.status(409).json({
//         success: false,
//         code: "USERNAME_EXIST",
//         message: "Username already taken.",
//       });
//     }

//     next();
//   } catch (error) {
//     console.error("Error checking user existence:", error);
//     res.status(500).json({ success: false, message: error });
//   }
// };

export default isUserAndUsernameExist;

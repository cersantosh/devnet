import UserService from "../../../../service/user/user_service.js";
import isOwnResource from "../../../../utills/auth/own_resource.js";
import hashPassword from "../../../../utills/password/hash_password.js";
import AuthController from "../auth/auth_controller.js";
const userService = new UserService();
class UserController {
  async addUser(req, res) {
    try {
      const data = req.body;
      const { email, username, password } = req.body;
      const isUserExist = await userService.checkUserExist(email);
      const isUsernameExist = await userService.checkUsernameExist(username);
      const hashedPassword = await hashPassword(password);
      if (isUserExist) {
        return res.status(200).json({
          success: true,
          code: "USER_EXIST",
          message: "User exist with this email.",
        });
      }

      if (isUsernameExist) {
        return res.status(200).json({
          success: true,
          code: "USERNAME_EXIST",
          message: "Username already taken.",
        });
      }

      if (!isUserExist && !isUsernameExist) {
        const user = await userService.addUser({
          ...data,
          password: hashedPassword,
        });
        return res.status(200).json({
          success: true,
          message: "User created successfully",
          response: user,
        });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllUsers(req, res) {
    try {
      const allUsers = await userService.getAllUsers();
      res.status(200).json({
        success: true,
        message: "All users fetched successfully",
        total : allUsers.length,
        response: allUsers,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async readUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.readUserById(id);
      res.status(200).json({
        success: true,
        message: "User fetched with id",
        response: user,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editUserById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const userExist = await userService.checkUserExistById(id);
      if (!userExist) {
        return res.status(404).json({
          success: false,
          message: "User does not exist",
        });
      }
      const isOwnner = isOwnResource(req.user, id);
      if (!isOwnner) {
        return res.status(403).json({
          success: true,
          message: "You are not allowed to edit this user.",
        });
      }

      const { email, username } = req.body;
      let isUserExist = null;
      let isUsernameExist = null;
      const databaseUser = await userService.readUserById(id);
      if (databaseUser.email !== email) {
        isUserExist = await userService.checkUserExist(email);
      }

      if (databaseUser.username !== username) {
        isUsernameExist = await userService.checkUsernameExist(username);
      }

      if (isUserExist) {
        return res.status(200).json({
          success: true,
          code: "USER_EXIST",
          message: "User exist with this email.",
        });
      }

      if (isUsernameExist) {
        return res.status(200).json({
          success: true,
          code: "USERNAME_EXIST",
          message: "Username already taken.",
        });
      }

      const user = await userService.editUserById(id, data);
      res.status(200).json({
        success: true,
        message: "User updated with id",
        response: user,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteUserById(req, res) {
    try {
      const { id } = req.params;
      const userExist = await userService.checkUserExistById(id);
      if (!userExist) {
        return res.status(404).json({
          success: false,
          message: "User does not exist",
        });
      }
      const isOwner = isOwnResource(req.user, id);
      if (!isOwner) {
        return res.status(403).json({
          success: true,
          message: "You are not allowed to delete this user.",
        });
      }
      const user = await userService.deleteUserById(id);
      res.cookie("token", "", {
        httpOnly: true,
        secure: false,
        sameSite: "None",
        expires: new Date(0),
      });
      res.status(200).json({
        success: true,
        message: "User deleted with given id",
        response: user,
      });

    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchUser(req, res) {
    try {
      const { search_term } = req.query;
      const user = await userService.searchUser(search_term);
      res.status(200).json({
        success: true,
        message: "User searched with given search term",
        total : user.length,
        response: user,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterUser(req, res) {
    userService.filterUser(query);
  }
}

export default UserController;

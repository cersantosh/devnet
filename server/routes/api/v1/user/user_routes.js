import express from "express";
import UserController from "../../../../controllers/api/v1/user/user_controller.js";
let userRoutes = express.Router();

let userController = new UserController();

const routes = {
  create_user: "/create",
  all_users: "/all",
  read_user: "/fetch/:id",
  edit_user: "/edit/:id",
  delete_user: "/delete/:id",
  search_user: "/search",
  filter_user: "/filter",
};

userRoutes.post(routes.create_user, userController.addUser);
userRoutes.get(routes.all_users, userController.getAllUsers);
userRoutes.get(routes.read_user, userController.readUserById);
userRoutes.patch(routes.edit_user, userController.editUserById);
userRoutes.delete(routes.delete_user, userController.deleteUserById);
userRoutes.get(routes.search_user, userController.searchUser);
userRoutes.get(routes.filter_user, userController.filterUser);

export default userRoutes;

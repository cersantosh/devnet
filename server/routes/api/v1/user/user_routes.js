import express from "express";
import UserController from "../../../../controllers/api/v1/user/user_controller.js";
let userRoutes = express.Router();

let userController = new UserController();

const routes = {
  add_user: "/add_user",
  all_users: "/all_users",
  read_user: "/read_user/:id",
  edit_user: "/edit_user/:id",
  delete_user: "/delete_user/:id",
  search_user: "/search_user",
  filter_user: "/filter_user",
};

userRoutes.post(routes.add_user, userController.addUser);
userRoutes.get(routes.all_users, userController.getAllUsers);
userRoutes.get(routes.read_user, userController.readUserById);
userRoutes.patch(routes.edit_user, userController.editUserById);
userRoutes.delete(routes.delete_user, userController.deleteUserById);
userRoutes.get(routes.search_user, userController.searchUser);
userRoutes.get(routes.filter_user, userController.filterUser);

export default userRoutes;

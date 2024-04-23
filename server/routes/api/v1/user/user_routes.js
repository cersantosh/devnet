import express from "express";
import UserController from "../../../../controllers/api/v1/user/user_controller.js";
let userRoutes = express.Router();

let userController = new UserController();

userRoutes.post("/add_user", userController.addUser);
userRoutes.get("/all_users", userController.getAllUsers);
userRoutes.get("/read_user/:id", userController.readUserById);
userRoutes.patch("/edit_user/:id", userController.editUserById);
userRoutes.delete("/delete_user/:id", userController.deleteUserById);
userRoutes.get("/search_user", userController.searchUser);
userRoutes.get("/filter_user", userController.filterUser);

export default userRoutes;

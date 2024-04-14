import express from "express";
import UserController from "../../../../controllers/api/v1/user/user_controller";
let userRoutes = express.Router();

let userController = new UserController();

userRoutes.post("/add_user", userController.addUser);
userRoutes.get("/all_users", userController.allUsers);
userRoutes.get("/read_user/:id", userController.readUserById);
userRoutes.put("/edit_user/:id", userController.editUserById);
userRoutes.delete("/delete_user/:id", userController.deleteUserById);
userRoutes.get("/search_user", userController.searchQuery);
userRoutes.get("/filter_user", userController.filterQuery);

export default userRoutes;

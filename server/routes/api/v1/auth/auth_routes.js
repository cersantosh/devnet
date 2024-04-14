import express from "express";
const authRoutes = express.Router();
import AuthController from "../../../../controllers/api/v1/auth/auth_controller.js";
const authController = new AuthController();

authRoutes.post("/login", authController.login);
authRoutes.post("/signup", authController.signup);

export default authRoutes;

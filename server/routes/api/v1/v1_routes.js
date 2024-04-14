import express from "express";
import authRoutes from "./auth/auth_routes.js";
import userRoutes from "./user/user_routes.js";
const v1Routes = express.Router();

v1Routes.use("/auth", authRoutes);
v1Routes.use("/user", userRoutes);

export default v1Routes;

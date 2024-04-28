import express from "express";
import authRoutes from "./auth/auth_routes.js";
import userRoutes from "./user/user_routes.js";
import generalQuestionRoutes from "./discussion/general_question_routes.js";
import errorQuestionRoutes from "./discussion/error_question_routes.js";
import generalAnswerRoutes from "./discussion/general_answer_routes.js";
import errorAnswerRoutes from "./discussion/error_answer_routes.js";
import profileRoutes from "./profile/user_profile_routes.js";
import jobRoutes from "./job/job_routes.js";
import eventRoutes from "./event/event_routes.js";

const v1Routes = express.Router();

v1Routes.use("/auth", authRoutes);
v1Routes.use("/user", userRoutes);
v1Routes.use("/general_question", generalQuestionRoutes);
v1Routes.use("/error_question", errorQuestionRoutes);
v1Routes.use("/answer/general", generalAnswerRoutes);
v1Routes.use("/answer/error", errorAnswerRoutes);
v1Routes.use("/profile", profileRoutes);
v1Routes.use("/job", jobRoutes);
v1Routes.use("/event", eventRoutes);

export default v1Routes;

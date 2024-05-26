import express from "express";
import authRoutes from "./auth/auth_routes.js";
import userRoutes from "./user/user_routes.js";
import generalQuestionRoutes from "./discussion/general_question_routes.js";
import errorQuestionRoutes from "./discussion/error_question_routes.js";
import generalAnswerRoutes from "./discussion/general_answer_routes.js";
import errorAnswerRoutes from "./discussion/error_answer_routes.js";
import jobRoutes from "./job/job_routes.js";
import eventRoutes from "./event/event_routes.js";
import postRoutes from "./post/post_routes.js";
import pollRoutes from "./post/poll_routes.js";
import commentRoutes from "./post/comment_routes.js";
import groupRoutes from "./group/group_routes.js";
import replyRoutes from "./post/reply_routes.js";
import userProfileRoutes from "./profile/user_profile_routes.js";
import companyProfileRoutes from "./profile/company_profile_routes.js";

const v1Routes = express.Router();

v1Routes.use("/auth", authRoutes);
v1Routes.use("/user", userRoutes);
v1Routes.use("/general_question", generalQuestionRoutes);
v1Routes.use("/error_question", errorQuestionRoutes);
v1Routes.use("/answer/general", generalAnswerRoutes);
v1Routes.use("/answer/error", errorAnswerRoutes);
v1Routes.use("/user_profile", userProfileRoutes);
v1Routes.use("company_profile", companyProfileRoutes);
v1Routes.use("/job", jobRoutes);
v1Routes.use("/event", eventRoutes);
v1Routes.use("/poll", pollRoutes);
v1Routes.use("/post", postRoutes);
v1Routes.use("/comment", commentRoutes);
v1Routes.use("/reply", replyRoutes);
v1Routes.use("/group", groupRoutes);

export default v1Routes;

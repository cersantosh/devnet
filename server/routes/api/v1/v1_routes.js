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
import messageRoutes from "./message/message_routes.js";
import authMiddleware from "../../../middleware/auth/auth_middleware.js";
import roleRoutes from "./role/role_routes.js";
const v1Routes = express.Router();

v1Routes.use("/auth", authRoutes);
v1Routes.use("/user", userRoutes);
v1Routes.use("/general_question", authMiddleware, generalQuestionRoutes);
v1Routes.use("/error_question", authMiddleware, errorQuestionRoutes);
v1Routes.use("/answer/general", authMiddleware, generalAnswerRoutes);
v1Routes.use("/answer/error", authMiddleware, errorAnswerRoutes);
v1Routes.use("/user_profile", authMiddleware, userProfileRoutes);
v1Routes.use("/company_profile", authMiddleware, companyProfileRoutes);
v1Routes.use("/job", authMiddleware, jobRoutes);
v1Routes.use("/event", authMiddleware, eventRoutes);
v1Routes.use("/poll", authMiddleware, pollRoutes);
v1Routes.use("/post", authMiddleware, postRoutes);
v1Routes.use("/comment", authMiddleware, commentRoutes);
v1Routes.use("/reply", authMiddleware, replyRoutes);
v1Routes.use("/group", authMiddleware, groupRoutes);
v1Routes.use("/message", authMiddleware, messageRoutes);
v1Routes.use("/role", authMiddleware, roleRoutes);

export default v1Routes;

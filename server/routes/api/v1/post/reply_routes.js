import express from "express";
import ReplyController from "../../../../controllers/api/v1/post/reply_controller.js";
let replyRoutes = express.Router();

let replyController = new ReplyController();

const routes = {
  create_reply: "/create",
  all_replies: "comment/replies/:comment_id",
  fetch_reply: "/fetch/:id",
  edit_reply: "/edit/:id",
  delete_reply: "/delete/:id",
  search_reply: "/search",
  filter_reply: "/filter",
};

replyRoutes.post(routes.create_reply, replyController.createReply);
replyRoutes.get(routes.all_replies, replyController.getAllRepliesOfComment);
replyRoutes.get(routes.fetch_reply, replyController.fetchReplyById);
replyRoutes.patch(routes.edit_reply, replyController.editReplyById);
replyRoutes.delete(routes.delete_reply, replyController.deleteReplyById);
replyRoutes.get(routes.search_reply, replyController.searchReply);
replyRoutes.get(routes.filter_reply, replyController.filterReply);

export default replyRoutes;

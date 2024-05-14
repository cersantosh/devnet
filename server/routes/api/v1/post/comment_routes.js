import express from "express";
import CommentController from "../../../../controllers/api/v1/post/comment_controller.js";
let commentRoutes = express.Router();

let commentController = new CommentController();

const routes = {
  create_comment: "/create",
  all_comments_post: "/post/all/:post_id",
  all_comments_poll: "/poll/all/:poll_id",
  fetch_comment: "/fetch/:id",
  edit_comment: "/edit/:id",
  delete_post_comment: "/post/delete/:id",
  delete_poll_comment: "/poll/delete/:id",
  search_comment: "/search",
  filter_comment: "/filter",
};

commentRoutes.post(routes.create_comment, commentController.createComment);
commentRoutes.get(routes.all_comments_post, commentController.getAllCommentsOfPost);
commentRoutes.get(routes.all_comments_poll, commentController.getAllCommentsOfPoll);
commentRoutes.get(routes.fetch_comment, commentController.fetchCommentById);
commentRoutes.patch(routes.edit_comment, commentController.editCommentById);
commentRoutes.delete(routes.delete_post_comment, commentController.deletePostComment);
commentRoutes.delete(routes.delete_poll_comment, commentController.deletePollComment);
commentRoutes.get(routes.search_comment, commentController.searchComment);
commentRoutes.get(routes.filter_comment, commentController.filterComment);

export default commentRoutes;

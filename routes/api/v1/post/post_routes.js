import express from "express";
import PostController from "../../../../controllers/api/v1/post/post_controller.js";
import {uploadImages} from "../../../../middleware/upload/upload_images.js";
let postRoutes = express.Router();

let postController = new PostController();

const routes = {
  create_post: "/create",
  all_posts: "/all/:user_id",
  fetch_post: "/fetch/:id",
  edit_post: "/edit/:id",
  delete_post: "/delete/:id",
  search_post: "/search",
  filter_post: "/filter",
  fetch_likes: "/likes/:post_id",
  fetch_comments: "/comments/:post_id",
  fetch_public_post: "/public/:user_id",
  update_likes: "/likes/update/:poll_id",
};

const uploadPostImages = uploadImages("images", "post/images");
postRoutes.post(
  routes.create_post,
  uploadPostImages,
  postController.createPost
);
postRoutes.get(routes.all_posts, postController.getAllPosts);
postRoutes.get(routes.fetch_post, postController.fetchPostById);
postRoutes.patch(routes.edit_post, postController.editPostById);
postRoutes.delete(routes.delete_post, postController.deletePostById);
postRoutes.get(routes.search_post, postController.searchPost);
postRoutes.get(routes.filter_post, postController.filterPost);
postRoutes.get(routes.fetch_likes, postController.fetchLikes);
postRoutes.get(routes.fetch_comments, postController.fetchComments);
postRoutes.get(routes.fetch_public_post, postController.fetchPublicPost);
postRoutes.patch(routes.update_likes, postController.updateLikes);

export default postRoutes;

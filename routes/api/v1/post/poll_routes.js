import express from "express";
import PollController from "../../../../controllers/api/v1/post/poll_controller.js";
let pollRoutes = express.Router();

let pollController = new PollController();

const routes = {
  create_poll: "/create",
  all_polls: "/all/:user_id",
  fetch_poll: "/fetch/:id",
  edit_poll: "/edit/:id",
  delete_poll: "/delete/:id",
  search_poll: "/search",
  filter_poll: "/filter",
  fetch_likes : "/likes/:poll_id",
  fetch_comments : "/comments/:poll_id",
  update_likes : "/likes/update/:poll_id",
};

pollRoutes.post(routes.create_poll, pollController.createPoll);
pollRoutes.get(routes.all_polls, pollController.getAllPolls);
pollRoutes.get(routes.fetch_poll, pollController.fetchPollById);
pollRoutes.patch(routes.edit_poll, pollController.editPollById);
pollRoutes.delete(routes.delete_poll, pollController.deletePollById);
pollRoutes.get(routes.search_poll, pollController.searchPoll);
pollRoutes.get(routes.filter_poll, pollController.filterPoll);
pollRoutes.get(routes.fetch_likes, pollController.fetchLikes);
pollRoutes.get(routes.fetch_comments, pollController.fetchComments);
pollRoutes.patch(routes.update_likes, pollController.updateLikes);




export default pollRoutes;

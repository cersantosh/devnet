import express from "express";
import ErrorAnswerController from "../../../../controllers/api/v1/discussion/error_answer_controller.js";
let errorAnswerRoutes = express.Router();

let errorAnswerController = new ErrorAnswerController();
const routes = {
  add_answer: "/create",
  all_answers: "/all/:question_id",
  fetch_answer: "/fetch/:id",
  edit_answer: "/edit/:id",
  delete_answer: "/delete/:id",
  search_answer: "/search",
  filter_answer: "/filter",
};

errorAnswerRoutes.post(routes.add_answer, errorAnswerController.addAnswer);
errorAnswerRoutes.get(routes.all_answers, errorAnswerController.getAllAnswersOfQuestion);
errorAnswerRoutes.get(routes.fetch_answer, errorAnswerController.fetchAnswerById);
errorAnswerRoutes.patch(routes.edit_answer, errorAnswerController.editAnswerById);
errorAnswerRoutes.delete(routes.delete_answer, errorAnswerController.deleteAnswerById);
errorAnswerRoutes.get(routes.search_answer, errorAnswerController.searchAnswer);
errorAnswerRoutes.get(routes.filter_answer, errorAnswerController.filterAnswer);

export default errorAnswerRoutes;

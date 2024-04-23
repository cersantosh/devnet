import express from "express";
import GeneralAnswerController from "../../../../controllers/api/v1/discussion/general_answer_controller.js";
let generalAnswerRoutes = express.Router();

let generalAnswerController = new GeneralAnswerController();
const routes = {
  add_answer: "/add_answer",
  all_answers: "/all_answers/:question_id",
  fetch_answer: "/fetch_answer/:id",
  edit_answer: "/edit_answer/:id",
  delete_answer: "/delete_answer/:id",
  search_answer: "/search_answer",
  filter_answer: "/filter_answer",
};

generalAnswerRoutes.post(routes.add_answer, generalAnswerController.addAnswer);
generalAnswerRoutes.get(routes.all_answers, generalAnswerController.getAllAnswersOfQuestion);
generalAnswerRoutes.get(routes.fetch_answer, generalAnswerController.fetchAnswerById);
generalAnswerRoutes.patch(routes.edit_answer, generalAnswerController.editAnswerById);
generalAnswerRoutes.delete(routes.delete_answer, generalAnswerController.deleteAnswerById);
generalAnswerRoutes.get(routes.search_answer, generalAnswerController.searchAnswer);
generalAnswerRoutes.get(routes.filter_answer, generalAnswerController.filterAnswer);

export default generalAnswerRoutes;

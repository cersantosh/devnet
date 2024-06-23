import express from "express";
import ErrorQuestionController from "../../../../controllers/api/v1/discussion/error_question_controller.js";
let errorQuestionRoutes = express.Router();

let errorQuestionController = new ErrorQuestionController();
const routes = {
  create_question: "/create",
  all_questions: "/all",
  fetch_question: "/fetch/:id",
  edit_question: "/edit/:id",
  delete_question: "/delete/:id",
  search_question: "/search",
  filter_question: "/filter",
};

errorQuestionRoutes.post(
  routes.create_question,
  errorQuestionController.addQuestion
);
errorQuestionRoutes.get(
  routes.all_questions,
  errorQuestionController.getAllQuestions
);
errorQuestionRoutes.get(
  routes.fetch_question,
  errorQuestionController.fetchQuestionById
);
errorQuestionRoutes.patch(
  routes.edit_question,
  errorQuestionController.editQuestionById
);
errorQuestionRoutes.delete(
  routes.delete_question,
  errorQuestionController.deleteQuestionById
);
errorQuestionRoutes.get(
  routes.search_question,
  errorQuestionController.searchQuestion
);
errorQuestionRoutes.get(
  routes.filter_question,
  errorQuestionController.filterQuestion
);

export default errorQuestionRoutes;

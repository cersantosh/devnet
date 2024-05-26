import express from "express";
import GeneralQuestionController from "../../../../controllers/api/v1/discussion/general_question_controller.js";
let generalQuestionRoutes = express.Router();

let generalQuestionController = new GeneralQuestionController();
const routes = {
  create_question: "/create",
  all_questions: "/all",
  fetch_question: "/fetch/:id",
  edit_question: "/edit/:id",
  delete_question: "/delete/:id",
  search_question: "/search",
  filter_question: "/filter",
};

generalQuestionRoutes.post(
  routes.create_question,
  generalQuestionController.addQuestion
);
generalQuestionRoutes.get(
  routes.all_questions,
  generalQuestionController.getAllQuestions
);
generalQuestionRoutes.get(
  routes.fetch_question,
  generalQuestionController.fetchQuestionById
);
generalQuestionRoutes.patch(
  routes.edit_question,
  generalQuestionController.editQuestionById
);
generalQuestionRoutes.delete(
  routes.delete_question,
  generalQuestionController.deleteQuestionById
);
generalQuestionRoutes.get(
  routes.search_question,
  generalQuestionController.searchQuestion
);
generalQuestionRoutes.get(
  routes.filter_question,
  generalQuestionController.filterQuestion
);

export default generalQuestionRoutes;

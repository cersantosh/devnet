import express from "express";
import ErrorQuestionController from "../../../../controllers/api/v1/discussion/error_question_controller.js";
let errorQuestionRoutes = express.Router();

let errorQuestionController = new ErrorQuestionController();

errorQuestionRoutes.post("/add_question", errorQuestionController.addQuestion);
errorQuestionRoutes.get(
  "/all_questions",
  errorQuestionController.getAllQuestions
);
errorQuestionRoutes.get(
  "/fetch_question/:id",
  errorQuestionController.fetchQuestionById
);
errorQuestionRoutes.patch(
  "/edit_question/:id",
  errorQuestionController.editQuestionById
);
errorQuestionRoutes.delete(
  "/delete_question/:id",
  errorQuestionController.deleteQuestionById
);
errorQuestionRoutes.get(
  "/search_question",
  errorQuestionController.searchQuestion
);
errorQuestionRoutes.get(
  "/filter_question",
  errorQuestionController.filterQuestion
);

export default errorQuestionRoutes;

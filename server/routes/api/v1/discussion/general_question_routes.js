import express from "express";
import GeneralQuestionController from "../../../../controllers/api/v1/discussion/general_question_controller.js";
let generalQuestionRoutes = express.Router();

let generalQuestionController = new GeneralQuestionController();

generalQuestionRoutes.post("/add_question", generalQuestionController.addQuestion);
generalQuestionRoutes.get("/all_questions", generalQuestionController.getAllQuestions);
generalQuestionRoutes.get("/fetch_question/:id", generalQuestionController.fetchQuestionById);
generalQuestionRoutes.patch("/edit_question/:id", generalQuestionController.editQuestionById);
generalQuestionRoutes.delete("/delete_question/:id", generalQuestionController.deleteQuestionById);
generalQuestionRoutes.get("/search_question", generalQuestionController.searchQuestion);
generalQuestionRoutes.get("/filter_question", generalQuestionController.filterQuestion);

export default generalQuestionRoutes;

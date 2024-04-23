import GeneralQuestionService from "../../../../service/discussion/general_question_service.js";
const generalQuestionService = new GeneralQuestionService();
class GeneralQuestionController {
  async addQuestion(req, res) {
    try {
      const data = req.body;
      const question = await generalQuestionService.addQuestion(data);
      return res.status(200).json({
        success: true,
        message: "Question added successfully",
        response: question,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllQuestions(req, res) {
    try {
      const allQuestions = await generalQuestionService.getAllQuestions();
      res.status(200).json({
        success: true,
        message: "All questions fetched successfully",
        response: allQuestions,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async fetchQuestionById(req, res) {
    try {
      const { id } = req.params;
      const question = await generalQuestionService.fetchQuestionById(id);
      res.status(200).json({
        success: true,
        message: "Question fetched with id",
        response: question,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editQuestionById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const question = await generalQuestionService.editQuestionById(id, data);
      res.status(200).json({
        success: true,
        message: "Question updated with id",
        response: question,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteQuestionById(req, res) {
    try {
      const { id } = req.params;
      const question = await generalQuestionService.deleteQuestionById(id);
      res.status(200).json({
        success: true,
        message: "Question deleted with given id",
        response: question,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchQuestion(req, res) {
    try {
      console.log(req.query);
      const { search_term } = req.query;
      const question = await generalQuestionService.searchQuestion(search_term);
      res.status(200).json({
        success: true,
        message: "Question searched with given search term",
        response: question,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterQuestion(req, res) {
    try {
      const query = req.query;
      const questions = await generalQuestionService.filterQuestion(query);
      res.status(200).json({
        success: true,
        message: "Question filtered with given filter options",
        response: questions,
      });
    } catch (error) {}
  }
}

export default GeneralQuestionController;

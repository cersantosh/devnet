import GeneralAnswerService from "../../../../service/discussion/general_answer_service.js";
const generalAnswerService = new GeneralAnswerService();
class GeneralAnswerController {
  async addAnswer(req, res) {
    try {
      const data = req.body;
      const answer = await generalAnswerService.addAnswer(data);
      return res.status(200).json({
        success: true,
        message: "Answer added successfully",
        response: answer,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllAnswersOfQuestion(req, res) {
    try {
      const { question_id } = req.params;
      const allAnswers = await generalAnswerService.getAllAnswersOfQuestion(
        question_id
      );
      res.status(200).json({
        success: true,
        message: "All answers fetched successfully",
        response: allAnswers,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async fetchAnswerById(req, res) {
    try {
      const { id } = req.params;
      const answer = await generalAnswerService.fetchAnswerById(id);
      res.status(200).json({
        success: true,
        message: "Answer fetched with id",
        response: answer,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editAnswerById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const answer = await generalAnswerService.editAnswerById(id, data);
      res.status(200).json({
        success: true,
        message: "Answer updated with id",
        response: answer,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteAnswerById(req, res) {
    try {
      const { id } = req.params;
      const answer = await generalAnswerService.deleteAnswerById(id);
      res.status(200).json({
        success: true,
        message: "Answer deleted with given id",
        response: answer,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchAnswer(req, res) {
    try {
      console.log(req.query);
      const { search_term } = req.query;
      const answer = await generalAnswerService.searchAnswer(search_term);
      res.status(200).json({
        success: true,
        message: "Answer searched with given search term",
        response: answer,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterAnswer(req, res) {
    try {
      const query = req.query;
      const answers = await generalAnswerService.filterAnswer(query);
      res.status(200).json({
        success: true,
        message: "Answer filtered with given filter options",
        response: answers,
      });
    } catch (error) {}
  }
}

export default GeneralAnswerController;

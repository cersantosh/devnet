import mongoose from "mongoose";
import answerModel from "../../models/discussion/answer_model.js";
import generalQuestionModel from "../../models/discussion/general_question_model.js";
import userModel from "../../models/user/user_model.js";
class GeneralAnswerService {
  async addAnswer(data) {
    try {
      const answer = await answerModel.create(data);
      const updateData = {
        $push: { "question_analytics.answers": answer._id },
      };
      await generalQuestionModel.findByIdAndUpdate(
        data.general_question_info,
        updateData
      );
      await userModel.findByIdAndUpdate(data.user_info, {
        $push: { general_answers: answer._id },
      });

      return answer;
    } catch (error) {
      console.log(`Error while adding answer : ${error.message}`);
    }
  }

  async getAllAnswersOfQuestion(question_id) {
    try {
      const response = await generalQuestionModel
        .findById(question_id)
        .select("question_analytics.answers")
        .populate({
          path: "question_analytics.answers",
          populate: {
            path: "user_info",
          },
        });
      return response.question_analytics;
    } catch (error) {
      console.log(`Error while fetching all answers : ${error.message}`);
    }
  }

  async fetchAnswerById(id) {
    try {
      return await answerModel.findById(id).populate("user_info");
    } catch (error) {
      console.log(`Error while fetching answer by id : ${error.message}`);
    }
  }
  async editAnswerById(id, data) {
    try {
      return await answerModel.findByIdAndUpdate(id, data, {
        new: true,
      });
    } catch (error) {
      console.log(`Error while editing answer with id : ${error}`);
    }
  }
  async deleteAnswerById(id) {
    try {
      const answer = await answerModel.findByIdAndDelete(id);
      await generalQuestionModel.findByIdAndUpdate(
        answer.general_question_info,
        {
          $pull: { "question_analytics.answers": answer._id },
        }
      );
      await userModel.findByIdAndUpdate(data.user_info, {
        $pull: { general_answers: answer._id },
      });
      return answer;
    } catch (error) {
      console.log(`Error while deleting answer with id : ${error}`);
    }
  }
  async searchAnswer(search_term) {
    try {
      return await answerModel.find({
        $or: [{ answer: { $regex: search_term, $options: "i" } }],
      });
    } catch (error) {
      console.log(`Error while searching answer : ${error}`);
    }
  }
  async filterAnswer(filterOptions) {
    try {
      let query = {};
      let sortOption = {};
      // filtering according to upvote

      if (filterOptions.up_vote) {
        if (filterOptions.up_vote === "high") {
          sortOption.up_vote = -1;
        } else {
          sortOption.up_vote = 1;
        }
      }

      // filtering according to downvote

      if (filterOptions.down_vote) {
        if (filterOptions.down_vote === "high") {
          sortOption.down_vote = -1;
        } else {
          sortOption.down_vote = 1;
        }
      }

      // filtering according to posted time
      if (filterOptions.posted_time === "24_hours") {
        const currentDate = new Date();
        const currentHours = currentDate.getHours();
        currentDate.setHours(currentHours - 24);
        query.createdAt = { $gt: currentDate };
      } else if (filterOptions.posted_time === "1_month") {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 1);
        query.createdAt = { $gte: currentDate };
      } else {
      }

      return await answerModel.find(query).sort(sortOption);
    } catch (error) {
      console.log(`Error while filtering answers : ${error}`);
    }
  }
}

export default GeneralAnswerService;

import mongoose from "mongoose";
import generalQuestionModel from "../../models/discussion/general_question_model.js";
class GeneralQuestionService {
  async addQuestion(data) {
    try {
      return await generalQuestionModel.create(data);
    } catch (error) {
      console.log(`Error while adding question : ${error.message}`);
    }
  }

  async getAllQuestions() {
    try {
      return await generalQuestionModel.aggregate([
        {
          $match: {
            is_public: true,
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_info",
            foreignField: "_id",
            as: "user_info",
          },
        },
        {
          $unwind: "$user_info",
        },
      ]);
    } catch (error) {
      console.log(`Error while fetching all questions : ${error.message}`);
    }
  }
  async fetchQuestionById(id) {
    try {
      return await generalQuestionModel.aggregate([
        {
          $match: {
            _id: new mongoose.Types.ObjectId(id),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_info",
            foreignField: "_id",
            as: "user_info",
          },
        },
        {
          $unwind: "$user_info",
        },
      ]);
    } catch (error) {
      console.log(`Error while fetching question by id : ${error.message}`);
    }
  }
  async editQuestionById(id, data) {
    try {
      return await generalQuestionModel.findByIdAndUpdate(id, data, {
        new: true,
      });
    } catch (error) {
      console.log(`Error while editing question with id : ${error}`);
    }
  }
  async deleteQuestionById(id) {
    try {
      return await generalQuestionModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(`Error while deleting question with id : ${error}`);
    }
  }
  async searchQuestion(search_term) {
    try {
      return await generalQuestionModel.find({
        $or: [
          { title: { $regex: search_term, $options: "i" } },
          { description: { $regex: search_term, $options: "i" } },
          { category: { $regex: search_term, $options: "i" } },
          { tags: { $in: search_term } },
        ],
      });
    } catch (error) {
      console.log(`Error while searching question : ${error}`);
    }
  }
  async filterQuestion(filterOptions) {
    try {
      let query = {};
      // filtering according to question category
      if (filterOptions.category) {
        query.category = filterOptions.category;
      }
      // filtering according to question status
      if (filterOptions.question_status === "answered") {
        query["question_analytics.answers"] = { $ne: [] };
      } else {
        query["question_analytics.answers"] = { $eq: [] };
      }

      // filtering according to
      if (filterOptions.asked_time === "24_hours") {
        const currentDate = new Date();
        const currentHours = currentDate.getHours();
        currentDate.setHours(currentHours - 24);
        query.createdAt = { $gt: currentDate };
      } else if (filterOptions.asked_time === "1_month") {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 1);
        query.createdAt = { $gte: currentDate };
      } else {
      }

      return await generalQuestionModel.find(query);
    } catch (error) {
      console.log(`Error while filtering questions : ${error}`);
    }
  }
}

export default GeneralQuestionService;

import mongoose from "mongoose";
import pollModel from "../../models/post/poll_model.js";
import userModel from "../../models/user/user_model.js";
class PollService {
  async createPoll(data) {
    try {
      const poll = await pollModel.create(data);
      await userModel.findByIdAndUpdate(data.user_info, {
        $push: { polls: poll._id },
      });
      return poll;
    } catch (error) {
      console.log(`Error while creating poll : ${error.message}`);
    }
  }

  async getAllPolls(user_id) {
    try {
      return await pollModel
        .find({ user_info: new mongoose.Types.ObjectId(user_id) })
        .populate("user_info");
    } catch (error) {
      console.log(`Error while fetching all polls : ${error.message}`);
    }
  }
  async fetchPollById(id) {
    try {
      return await pollModel.findById(id).populate("user_info");
    } catch (error) {
      console.log(`Error while fetching poll by id : ${error.message}`);
    }
  }
  async editPollById(id, data) {
    try {
      return await pollModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.log(`Error while editing poll with id : ${error}`);
    }
  }

  async updateLikes(poll_id, user_id) {
    try {
      const response = await pollModel.findById(poll_id).select("likes");
      const likes = response.likes;
      let newLikes = [];
      if (likes.includes(user_id)) {
        newLikes = await pollModel
          .findByIdAndUpdate(
            poll_id,
            {
              $pull: { likes: user_id },
            },
            { new: true }
          )
          .select("likes");
      } else {
        newLikes = await pollModel
          .findByIdAndUpdate(
            poll_id,
            {
              $addToSet: { likes: user_id },
            },
            { new: true }
          )
          .select("likes");
      }
      return newLikes;
    } catch (error) {
      console.log(`Error while updating poll likes : ${error}`);
    }
  }

  async deletePollById(id) {
    try {
      const poll = await pollModel.findByIdAndDelete(id);
      await userModel.findByIdAndUpdate(poll.user_info, {
        $pull: { polls: poll._id },
      });
      return poll;
    } catch (error) {
      console.log(`Error while deleting poll with id : ${error}`);
    }
  }
  async searchPoll(search_term) {
    try {
      return await pollModel
        .find({
          $or: [
            { question: { $regex: search_term, $options: "i" } },
            { options: { $in: search_term } },
          ],
        })
        .populate("user_info");
    } catch (error) {
      console.log(`Error while searching poll : ${error}`);
    }
  }
  async filterPoll(filterOptions) {
    try {
      const query = {};
      return await pollModel.find(query).populate("user_info");
    } catch (error) {
      console.log(`Error while filtering polls : ${error}`);
    }
  }

  async fetchLikes(poll_id) {
    try {
      return await pollModel
        .findById(poll_id)
        .select("likes")
        .populate("likes");
    } catch (error) {
      console.log(`Error while fetching likes of a poll : ${error}`);
    }
  }

  async fetchComments(poll_id) {
    try {
      return await pollModel
        .findById(poll_id)
        .select("comments")
        .populate("comments");
    } catch (error) {
      console.log(`Error while fetching comments of a poll : ${error}`);
    }
  }
}

export default PollService;

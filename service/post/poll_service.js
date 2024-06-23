import mongoose from "mongoose";
import pollModel from "../../models/post/poll_model.js";
import userModel from "../../models/user/user_model.js";
class PollService {
  async createPoll(data, userId) {
    const poll = await pollModel.create(data);
    await userModel.findByIdAndUpdate(userId, {
      $push: { polls: poll._id },
    });
    return poll;
  }

  async getAllPolls(user_id) {
    return await pollModel
      .find({ user_info: new mongoose.Types.ObjectId(user_id) })
      .populate("user_info");
  }
  async fetchPollById(id) {
    return await pollModel.findById(id).populate("user_info");
  }
  async editPollById(id, data) {
    return await pollModel.findByIdAndUpdate(id, data, { new: true });
  }

  async updateLikes(poll_id, user_id) {
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
  }

  async deletePollById(id) {
    const poll = await pollModel.findByIdAndDelete(id);
    await userModel.findByIdAndUpdate(poll.user_info, {
      $pull: { polls: poll._id },
    });
    return poll;
  }
  async searchPoll(search_term) {
    return await pollModel
      .find({
        $or: [
          { question: { $regex: search_term, $options: "i" } },
          { options: { $in: search_term } },
        ],
      })
      .populate("user_info");
  }
  async filterPoll(filterOptions) {
    const query = {};
    return await pollModel.find(query).populate("user_info");
  }

  async fetchLikes(poll_id) {
    return await pollModel.findById(poll_id).select("likes").populate("likes");
  }

  async fetchComments(poll_id) {
    return await pollModel
      .findById(poll_id)
      .select("comments")
      .populate("comments");
  }
}

export default PollService;

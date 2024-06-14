import mongoose from "mongoose";
import replyModel from "../../models/post/reply_model.js";
import commentModel from "../../models/post/comment_model.js";
class ReplyService {
  async createReply(data, userId) {
    try {
      const reply = await replyModel.create(data);
      //   updating comment replies also
      await commentModel.findByIdAndUpdate(data.comment, {
        $push: {
          replies: reply._id,
        },
      });

      return reply;
    } catch (error) {
      return(`Error while creating reply : ${error.message}`);
    }
  }

  async getAllRepliesOfComment(commentId) {
    try {
      return await commentModel
        .findById(commentId)
        .select("replies")
        .populate({
          path: "replies",
          populate: {
            path: "user_info",
          },
        });
    } catch (error) {
      return(
        `Error while fetching all replies of a comment : ${error.message}`
      );
    }
  }

  async fetchReplyById(id) {
    try {
      return await replyModel.findById(id).populate("user_info");
    } catch (error) {
      return(`Error while fetching reply by id : ${error.message}`);
    }
  }
  async editReplyById(id, data) {
    try {
      return await replyModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      return(`Error while editing reply with id : ${error}`);
    }
  }

  async deleteReplyById(id) {
    try {
      const reply = await replyModel.findByIdAndDelete(id);
      await commentModel.findByIdAndUpdate(reply.comment, {
        $pull: { replies: id },
      });
      return reply;
    } catch (error) {
      return(`Error while deleting reply with id : ${error}`);
    }
  }

  async searchReply(search_term) {
    try {
      return await replyModel
        .find({
          $or: [{ reply: { $regex: search_term, $options: "i" } }],
        })
        .populate("user_info");
    } catch (error) {
      return(`Error while searching reply : ${error}`);
    }
  }
  async filterReply(filterOptions) {
    try {
      const query = {};
      const sort = {};
      if (filterOptions.top_replies) {
        sort.likes = 1;
      }
      if (filterOptions.recent_replies) {
        sort.createdAt = 1;
      }
      return await replyModel.find(query).populate("user_info").sort(sort);
    } catch (error) {
      return(`Error while filtering replies : ${error}`);
    }
  }
}

export default ReplyService;

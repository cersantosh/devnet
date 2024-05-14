import mongoose from "mongoose";
import commentModel from "../../models/post/comment_model.js";
import pollModel from "../../models/post/poll_model.js";
import postModel from "../../models/post/post_model.js";
class CommentService {
  async createComment(data) {
    try {
      const comment = await commentModel.create(data);
      // updating post comments
      if (data.post_type === "polls") {
        await pollModel.findByIdAndUpdate(data.post, {
          $push: { comments: comment._id },
        });
      } else if (data.post_type === "posts") {
        await postModel.findByIdAndUpdate(data.post, {
          $push: { comments: comment._id },
        });
      }

      return comment;
    } catch (error) {
      console.log(`Error while creating comment : ${error.message}`);
    }
  }

  async getAllCommentsOfPost(post_id) {
    try {
      return await postModel
        .findById(post_id)
        .select("comments")
        .populate({
          path: "comments",
          populate: {
            path: "user_info",
          },
        });
    } catch (error) {
      console.log(
        `Error while fetching all comments of a post : ${error.message}`
      );
    }
  }

  async getAllCommentsOfPoll(poll_id) {
    try {
      return await pollModel
        .findById(poll_id)
        .select("comments")
        .populate({
          path: "comments",
          populate: {
            path: "user_info",
          },
        });
    } catch (error) {
      console.log(
        `Error while fetching all comments of a poll : ${error.message}`
      );
    }
  }

  async fetchCommentById(id) {
    try {
      return await commentModel.findById(id).populate("user_info");
    } catch (error) {
      console.log(`Error while fetching comment by id : ${error.message}`);
    }
  }
  async editCommentById(id, data) {
    try {
      return await commentModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.log(`Error while editing comment with id : ${error}`);
    }
  }

  async deletePostComment(id) {
    try {
      const comment = await commentModel.findByIdAndDelete(id);
      await postModel.findByIdAndUpdate(comment.post, {
        $pull: { comments: id },
      });
      return comment;
    } catch (error) {
      console.log(`Error while deleting comment with id : ${error}`);
    }
  }

  async deletePollComment(id) {
    try {
      const comment = await commentModel.findByIdAndDelete(id);
      await pollModel.findByIdAndUpdate(comment.post, {
        $pull: { comments: id },
      });
      return comment;
    } catch (error) {
      console.log(`Error while deleting comment with id : ${error}`);
    }
  }

  async searchComment(search_term) {
    try {
      return await commentModel
        .find({
          $or: [{ comment: { $regex: search_term, $options: "i" } }],
        })
        .populate("user_info");
    } catch (error) {
      console.log(`Error while searching comment : ${error}`);
    }
  }
  async filterComment(filterOptions) {
    try {
      const query = {};
      const sort = {};
      if (filterOptions.top_comments) {
        sort.likes = 1;
      }
      if (filterOptions.recent_comments) {
        sort.createdAt = 1;
      }
      return await commentModel.find(query).populate("user_info").sort(sort);
    } catch (error) {
      console.log(`Error while filtering comments : ${error}`);
    }
  }
}

export default CommentService;

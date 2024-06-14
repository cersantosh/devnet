import mongoose from "mongoose";
import postModel from "../../models/post/post_model.js";
import userModel from "../../models/user/user_model.js";
class PostService {
  async createPost(data, userId) {
    try {
      const post = await postModel.create(data);
      await userModel.findByIdAndUpdate(userId, {
        $push: { posts: post._id },
      });
      return post;
    } catch (error) {
      return `Error while creating post : ${error.message}`;
    }
  }

  async getAllPosts(user_id) {
    try {
      return await postModel
        .find({ user_info: new mongoose.Types.ObjectId(user_id) })
        .populate("user_info");
    } catch (error) {
      return `Error while fetching all posts : ${error.message}`;
    }
  }
  async fetchPublicPost(user_id) {
    try {
      return await postModel
        .find({
          user_info: new mongoose.Types.ObjectId(user_id),
          is_public: "public",
        })
        .populate("user_info");
    } catch (error) {
      return `Error while fetching all public posts : ${error.message}`;
    }
  }

  async updateLikes(post_id, user_id) {
    try {
      const response = await postModel.findById(post_id).select("likes");
      const likes = response.likes;
      let newLikes = [];
      if (likes.includes(user_id)) {
        newLikes = await postModel
          .findByIdAndUpdate(
            post_id,
            {
              $pull: { likes: user_id },
            },
            { new: true }
          )
          .select("likes");
      } else {
        newLikes = await postModel
          .findByIdAndUpdate(
            post_id,
            {
              $addToSet: { likes: user_id },
            },
            { new: true }
          )
          .select("likes");
      }
      return newLikes;
    } catch (error) {
      return `Error while updating post likes : ${error}`;
    }
  }

  async fetchPostById(id) {
    try {
      return await postModel.findById(id).populate("user_info");
    } catch (error) {
      return `Error while fetching post by id : ${error.message}`;
    }
  }
  async editPostById(id, data) {
    try {
      return await postModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      return `Error while editing post with id : ${error}`;
    }
  }
  async deletePostById(id) {
    try {
      const post = await postModel.findByIdAndDelete(id);
      await userModel.findByIdAndUpdate(post.user_info, {
        $pull: { posts: post._id },
      });
      return post;
    } catch (error) {
      return `Error while deleting post with id : ${error}`;
    }
  }
  async searchPost(search_term) {
    try {
      return await postModel
        .find({
          $or: [{ text: { $regex: search_term, $options: "i" } }],
        })
        .populate("user_info");
    } catch (error) {
      return `Error while searching post : ${error}`;
    }
  }
  async filterPost(filterOptions) {
    try {
      const query = {};
      return await postModel.find(query).populate("user_info");
    } catch (error) {
      return `Error while filtering posts : ${error}`;
    }
  }

  async fetchLikes(post_id) {
    try {
      return await postModel
        .findById(post_id)
        .select("likes")
        .populate("likes");
    } catch (error) {
      return `Error while fetching likes of a post : ${error}`;
    }
  }

  async fetchComments(post_id) {
    try {
      return await postModel
        .findById(post_id)
        .select("comments")
        .populate("comments");
    } catch (error) {
      return `Error while fetching comments of a post : ${error}`;
    }
  }
}

export default PostService;

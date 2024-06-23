import mongoose from "mongoose";
import postModel from "../../models/post/post_model.js";
import userModel from "../../models/user/user_model.js";
class PostService {
  async createPost(data, userId) {
    const post = await postModel.create(data);
    await userModel.findByIdAndUpdate(userId, {
      $push: { posts: post._id },
    });
    return post;
  }

  async getAllPosts(user_id) {
    return await postModel
      .find({ user_info: new mongoose.Types.ObjectId(user_id) })
      .populate("user_info");
  }
  async fetchPublicPost(user_id) {
    return await postModel
      .find({
        user_info: new mongoose.Types.ObjectId(user_id),
        is_public: "public",
      })
      .populate("user_info");
  }

  async updateLikes(post_id, user_id) {
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
  }

  async fetchPostById(id) {
    return await postModel.findById(id).populate("user_info");
  }
  async editPostById(id, data) {
    return await postModel.findByIdAndUpdate(id, data, { new: true });
  }
  async deletePostById(id) {
    const post = await postModel.findByIdAndDelete(id);
    await userModel.findByIdAndUpdate(post.user_info, {
      $pull: { posts: post._id },
    });
    return post;
  }
  async searchPost(search_term) {
    return await postModel
      .find({
        $or: [{ text: { $regex: search_term, $options: "i" } }],
      })
      .populate("user_info");
  }
  async filterPost(filterOptions) {
    const query = {};
    return await postModel.find(query).populate("user_info");
  }

  async fetchLikes(post_id) {
    return await postModel.findById(post_id).select("likes").populate("likes");
  }

  async fetchComments(post_id) {
    return await postModel
      .findById(post_id)
      .select("comments")
      .populate("comments");
  }
}

export default PostService;

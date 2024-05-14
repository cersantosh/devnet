import PostService from "../../../../service/post/post_service.js";
const postService = new PostService();

class PostController {
  async createPost(req, res) {
    try {
      const images = [];
      for (let file of req.files) {
        images.push(file.filename);
      }
      req.body.images = images;
      const post = await postService.createPost(req.body);
      res.status(200).json({
        success: true,
        message: "Post created successfully",
        response: post,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllPosts(req, res) {
    try {
      const { user_id } = req.params;
      const allPosts = await postService.getAllPosts(user_id);
      res.status(200).json({
        success: true,
        message: "All posts fetched successfully",
        count: allPosts.length,
        response: allPosts,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async fetchPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await postService.fetchPostById(id);
      res.status(200).json({
        success: true,
        message: "Post fetched with id",
        response: post,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editPostById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const post = await postService.editPostById(id, data);
      res.status(200).json({
        success: true,
        message: "Post updated with id",
        response: post,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deletePostById(req, res) {
    try {
      const { id } = req.params;
      const post = await postService.deletePostById(id);
      res.status(200).json({
        success: true,
        message: "Post deleted with given id",
        response: post,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchPost(req, res) {
    try {
      const { search_term } = req.query;
      const posts = await postService.searchPost(search_term);
      res.status(200).json({
        success: true,
        message: "Post searched with given search term",
        response: posts,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterPost(req, res) {
    try {
      const query = req.query;
      const posts = await postService.filterPost(query);
      res.status(200).json({
        success: true,
        message: "Post filtered with given filter options",
        response: posts,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async fetchLikes(req, res) {
    try {
      const { post_id } = req.params;
      const likes = await postService.fetchLikes(post_id);
      res.status(200).json({
        success: true,
        message: "All likes of post are fetched",
        response: likes,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async fetchComments(req, res) {
    try {
      const { post_id } = req.params;
      const comments = await postService.fetchComments(post_id);
      res.status(200).json({
        success: true,
        message: "All comments of post are fetched",
        response: comments,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async fetchPublicPost(req, res) {
    try {
      const { user_id } = req.params;
      const posts = await postService.fetchPublicPost(user_id);
      res.status(200).json({
        success: true,
        message: "All public posts are fetched",
        response: posts,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async updateLikes(req, res) {
    try {
      const { poll_id } = req.params;
      const user_id = req.body.user_id;
      const poll = await postService.updateLikes(poll_id, user_id);
      res.status(200).json({
        success: true,
        message: "Post likes updated",
        response: poll,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
}

export default PostController;

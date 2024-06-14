import CommentService from "../../../../service/post/comment_service.js";
const commentService = new CommentService();

class CommentController {
  async createComment(req, res) {
    try {
      const userId = req.user._id;
      const comment = await commentService.createComment({user_info : userId, ...req.body}, userId);
      res.status(200).json({
        success: true,
        message: "Comment created successfully",
        response: comment,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllCommentsOfPost(req, res) {
    try {
      const { post_id } = req.params;
      const allComments = await commentService.getAllCommentsOfPost(post_id);
      res.status(200).json({
        success: true,
        message: "All comments of a post fetched successfully",
        count: allComments.length,
        response: allComments,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllCommentsOfPoll(req, res) {
    try {
      const { poll_id } = req.params;
      const allComments = await commentService.getAllCommentsOfPoll(poll_id);
      res.status(200).json({
        success: true,
        message: "All comments of a poll fetched successfully",
        count: allComments.length,
        response: allComments,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async fetchCommentById(req, res) {
    try {
      const { id } = req.params;
      const comment = await commentService.fetchCommentById(id);
      res.status(200).json({
        success: true,
        message: "Comment fetched with id",
        response: comment,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editCommentById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const comment = await commentService.editCommentById(id, data);
      res.status(200).json({
        success: true,
        message: "Comment updated with id",
        response: comment,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deletePostComment(req, res) {
    try {
      const { id } = req.params;
      const comment = await commentService.deletePostComment(id);
      res.status(200).json({
        success: true,
        message: "Post comment deleted.",
        response: comment,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deletePollComment(req, res) {
    try {
      const { id } = req.params;
      const comment = await commentService.deletePollComment(id);
      res.status(200).json({
        success: true,
        message: "Poll comment deleted",
        response: comment,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async searchComment(req, res) {
    try {
      const { search_term } = req.query;
      const comments = await commentService.searchComment(search_term);
      res.status(200).json({
        success: true,
        message: "Comment searched with given search term",
        response: comments,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterComment(req, res) {
    try {
      const query = req.query;
      const comments = await commentService.filterComment(query);
      res.status(200).json({
        success: true,
        message: "Comment filtered with given filter options",
        response: comments,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
}

export default CommentController;

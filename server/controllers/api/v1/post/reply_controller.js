import ReplyService from "../../../../service/post/reply_service.js";
const replyService = new ReplyService();

class ReplyController {
  async createReply(req, res) {
    try {
      const reply = await replyService.createReply(req.body);
      res.status(200).json({
        success: true,
        message: "Reply created successfully",
        response: reply,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllRepliesOfComment(req, res) {
    try {
      const { comment_id } = req.params;
      const allReplies = await replyService.getAllRepliesOfComment(comment_id);
      res.status(200).json({
        success: true,
        message: "All replies of a post fetched successfully",
        count: allReplies.length,
        response: allReplies,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async fetchReplyById(req, res) {
    try {
      const { id } = req.params;
      const reply = await replyService.fetchReplyById(id);
      res.status(200).json({
        success: true,
        message: "Reply fetched with id",
        response: reply,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editReplyById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const reply = await replyService.editReplyById(id, data);
      res.status(200).json({
        success: true,
        message: "Reply updated with id",
        response: reply,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteReplyById(req, res) {
    try {
      const { id } = req.params;
      const reply = await replyService.deleteReplyById(id);
      res.status(200).json({
        success: true,
        message: "Reply deleted.",
        response: reply,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async searchReply(req, res) {
    try {
      const { search_term } = req.query;
      const replies = await replyService.searchReply(search_term);
      res.status(200).json({
        success: true,
        message: "Reply searched with given search term",
        response: replies,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterReply(req, res) {
    try {
      const query = req.query;
      const replies = await replyService.filterReply(query);
      res.status(200).json({
        success: true,
        message: "Reply filtered with given filter options",
        response: replies,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
}

export default ReplyController;

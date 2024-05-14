import PollService from "../../../../service/post/poll_service.js";
const pollService = new PollService();

class PollController {
  async createPoll(req, res) {
    try {
      const poll = await pollService.createPoll(req.body);
      res.status(200).json({
        success: true,
        message: "Poll created successfully",
        response: poll,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllPolls(req, res) {
    try {
      const {user_id} = req.params;
      const allPolls = await pollService.getAllPolls(user_id);
      res.status(200).json({
        success: true,
        message: "All polls fetched successfully",
        count: allPolls.length,
        response: allPolls,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async fetchPollById(req, res) {
    try {
      const { id } = req.params;
      const poll = await pollService.fetchPollById(id);
      res.status(200).json({
        success: true,
        message: "Poll fetched with id",
        response: poll,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editPollById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const poll = await pollService.editPollById(id, data);
      res.status(200).json({
        success: true,
        message: "Poll updated with id",
        response: poll,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async updateLikes(req, res) {
    try {
      const { poll_id } = req.params;
      const user_id = req.body.user_id;
      const poll = await pollService.updateLikes(poll_id, user_id);
      res.status(200).json({
        success: true,
        message: "Poll likes updated",
        response: poll,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deletePollById(req, res) {
    try {
      const { id } = req.params;
      const poll = await pollService.deletePollById(id);
      res.status(200).json({
        success: true,
        message: "Poll deleted with given id",
        response: poll,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchPoll(req, res) {
    try {
      const { search_term } = req.query;
      const polls = await pollService.searchPoll(search_term);
      res.status(200).json({
        success: true,
        message: "Poll searched with given search term",
        response: polls,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterPoll(req, res) {
    try {
      const query = req.query;
      const polls = await pollService.filterPoll(query);
      res.status(200).json({
        success: true,
        message: "Poll filtered with given filter options",
        response: polls,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async fetchLikes(req, res) {
    try {
     const {poll_id} = req.params;
      const likes = await pollService.fetchLikes(poll_id);
      res.status(200).json({
        success: true,
        message: "All likes of poll are fetched",
        response: likes,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async fetchComments(req, res) {
    try {
     const {poll_id} = req.params;
      const comments = await pollService.fetchComments(poll_id);
      res.status(200).json({
        success: true,
        message: "All comments of poll are fetched",
        response: comments,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }


}

export default PollController;

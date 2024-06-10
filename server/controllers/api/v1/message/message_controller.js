import MessageService from "../../../../service/message/message_service.js";
const messageService = new MessageService();
class MessageController {
  async addMessage(req, res) {
    try {
      const message = await messageService.addMessage(req.body);
      return res.status(200).json({
        success: true,
        message: "Message created successfully",
        response: message,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllMessages(req, res) {
    try {
      const { sender_id, receiver_id } = req.query;
      const allMessages = await messageService.getAllMessages(sender_id, receiver_id);
      res.status(200).json({
        success: true,
        message: "All messages fetched successfully",
        response: allMessages,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async readMessageById(req, res) {
    try {
      const { id } = req.params;
      const message = await messageService.readMessageById(id);
      res.status(200).json({
        success: true,
        message: "Message fetched with id",
        response: message,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editMessageById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const message = await messageService.editMessageById(id, data);
      res.status(200).json({
        success: true,
        message: "Message updated with id",
        response: message,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteMessageById(req, res) {
    try {
      const { id } = req.params;
      const message = await messageService.deleteMessageById(id);
      res.status(200).json({
        success: true,
        message: "Message deleted with given id",
        response: message,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchMessage(req, res) {
    try {
      const { search_term } = req.query;
      const message = await messageService.searchMessage(search_term);
      res.status(200).json({
        success: true,
        message: "Message searched with given search term",
        response: message,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterMessage(req, res) {
    messageService.filterMessage(query);
  }
}

export default MessageController;

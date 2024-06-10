import messageModel from "../../models/message/message_model.js";

class MessageService {
  async addMessage(data) {
    try {
      return await messageModel.create(data);
    } catch (error) {
      console.log(`Error while adding user : ${error.message}`);
    }
  }

  async getAllMessages(senderId, receiverId) {
    try {
      return await messageModel.find({
        $or: [
          {
            sender: senderId,
            receiver: receiverId,
          },
          {
            sender: receiverId,
            receiver: senderId,
          },
        ],
      });
    } catch (error) {
      console.log(`Error while fetching all users : ${error.message}`);
    }
  }
  async readMessageById(id) {
    try {
      return await messageModel.findById(id);
    } catch (error) {
      console.log(`Error while reading user by id : ${error.message}`);
    }
  }
  async editMessageById(id, data) {
    try {
      return await messageModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.log(`Error while editing user with id : ${error}`);
    }
  }
  async deleteMessageById(id) {
    try {
      return await messageModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(`Error while deleting user with id : ${error}`);
    }
  }
  async searchMessage(search_term) {
    try {
      return await messageModel.find({
        $or: [{ message: { $regex: search_term, $options: "i" } }],
      });
    } catch (error) {
      console.log(`Error while searching user : ${error}`);
    }
  }
  filterMessage() {}
}

export default MessageService;

import express from "express";
import MessageController from "../../../../controllers/api/v1/message/message_controller.js";
let messageRoutes = express.Router();

let messageController = new MessageController();

const routes = {
  create_message: "/create",
  all_messages: "/all",
  read_message: "/fetch/:id",
  edit_message: "/edit/:id",
  delete_message: "/delete/:id",
  search_message: "/search",
  filter_message: "/filter",
};

messageRoutes.post(routes.create_message, messageController.addMessage);
messageRoutes.get(routes.all_messages, messageController.getAllMessages);
messageRoutes.get(routes.read_message, messageController.readMessageById);
messageRoutes.patch(routes.edit_message, messageController.editMessageById);
messageRoutes.delete(routes.delete_message, messageController.deleteMessageById);
messageRoutes.get(routes.search_message, messageController.searchMessage);
messageRoutes.get(routes.filter_message, messageController.filterMessage);

export default messageRoutes;

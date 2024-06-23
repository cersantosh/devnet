import express from "express";
import GroupController from "../../../../controllers/api/v1/group/group_controller.js";
let groupRoutes = express.Router();

let groupController = new GroupController();

const routes = {
  create_group: "/create",
  all_groups: "/all",
  fetch_group: "/fetch/:id",
  edit_group: "/edit/:id",
  delete_group: "/delete/:id",
  search_group: "/search",
  filter_group: "/filter",
};

groupRoutes.post(routes.create_group, groupController.createGroup);
groupRoutes.get(routes.all_groups, groupController.getAllGroups);
groupRoutes.get(routes.fetch_group, groupController.fetchGroupById);
groupRoutes.patch(routes.edit_group, groupController.editGroupById);
groupRoutes.delete(routes.delete_group, groupController.deleteGroupById);
groupRoutes.get(routes.search_group, groupController.searchGroup);
groupRoutes.get(routes.filter_group, groupController.filterGroup);

export default groupRoutes;

import express from "express";
import RoleController from "../../../../controllers/api/v1/role/role_controller.js";
let roleRoutes = express.Router();

let roleController = new RoleController();

const routes = {
  create_role: "/create",
  all_roles: "/all",
  fetch_role: "/fetch/:id",
  edit_role: "/edit/:id",
  delete_role: "/delete/:id",
  search_role: "/search",
  filter_role: "/filter",
};

roleRoutes.post(routes.create_role, roleController.addRole);
roleRoutes.get(routes.all_roles, roleController.getAllRoles);
roleRoutes.get(routes.fetch_role, roleController.readRoleById);
roleRoutes.patch(routes.edit_role, roleController.editRoleById);
roleRoutes.delete(
  routes.delete_role,

  roleController.deleteRoleById
);
roleRoutes.get(routes.search_role, roleController.searchRole);
roleRoutes.get(routes.filter_role, roleController.filterRole);

export default roleRoutes;

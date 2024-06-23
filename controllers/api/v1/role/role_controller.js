import RoleService from "../../../../service/role/role_service.js";
const roleService = new RoleService();
class RoleController {
  async addRole(req, res) {
    try {
      const data = req.body;

      const role = await roleService.addRole(data);
      return res.status(200).json({
        success: true,
        message: "Role created successfully",
        response: role,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllRoles(req, res) {
    try {
      const allRoles = await roleService.getAllRoles();
      res.status(200).json({
        success: true,
        message: "All roles fetched successfully",
        response: allRoles,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async readRoleById(req, res) {
    try {
      const { id } = req.params;
      const role = await roleService.readRoleById(id);
      res.status(200).json({
        success: true,
        message: "Role fetched with id",
        response: role,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editRoleById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const role = await roleService.editRoleById(id, data);
      res.status(200).json({
        success: true,
        message: "Role updated with id",
        response: role,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteRoleById(req, res) {
    try {
      const { id } = req.params;
      const role = await roleService.deleteRoleById(id);
      res.status(200).json({
        success: true,
        message: "Role deleted with given id",
        response: role,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchRole(req, res) {
    try {
      const { search_term } = req.query;
      const role = await roleService.searchRole(search_term);
      res.status(200).json({
        success: true,
        message: "Role searched with given search term",
        response: role,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterRole(req, res) {
    roleService.filterRole(query);
  }
}

export default RoleController;

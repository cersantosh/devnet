import roleModel from "../../models/role/role_model.js";
class RoleService {
  async addRole(data) {
    try {
      return await roleModel.create(data);
    } catch (error) {
      return `Error while adding role : ${error.message}`;
    }
  }

  async getAllRoles() {
    try {
      return await roleModel.find();
    } catch (error) {
      return `Error while fetching all roles : ${error.message}`;
    }
  }
  async readRoleById(id) {
    try {
      return await roleModel.findById(id);
    } catch (error) {
      return `Error while reading role by id : ${error.message}`;
    }
  }
  async editRoleById(id, data) {
    try {
      return await roleModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      return `Error while editing role with id : ${error}`;
    }
  }
  async deleteRoleById(id) {
    try {
      return await roleModel.findByIdAndDelete(id);
    } catch (error) {
      return `Error while deleting role with id : ${error}`;
    }
  }
  async searchRole(search_term) {
    try {
      return await roleModel.find({
        $or: [
          { description: { $regex: search_term, $options: "i" } },
          { name: { $regex: search_term, $options: "i" } },
        ],
      });
    } catch (error) {
      return `Error while searching role : ${error}`;
    }
  }
  filterRole() {}
}

export default RoleService;

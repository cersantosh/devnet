import userModel from "../../models/user/user_model.js";
class UserService {
  async checkUserExist(email) {
    const response = await userModel.find({
      email,
    });
    return response.length > 0;
  }
  async checkUsernameExist(username) {
    const response = await userModel.find({
      username,
    });
    return response.length > 0;
  }
  async addUser(data) {
    try {
      return await userModel.create(data);
    } catch (error) {
     return(`Error while adding user : ${error.message}`);
    }
  }

  async getAllUsers() {
    try {
      return await userModel.find();
    } catch (error) {
     return(`Error while fetching all users : ${error.message}`);
    }
  }
  async readUserById(id) {
    try {
      return await userModel.findById(id);
    } catch (error) {
     return(`Error while reading user by id : ${error.message}`);
    }
  }
  async editUserById(id, data) {
    try {
      return await userModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
     return(`Error while editing user with id : ${error}`);
    }
  }
  async deleteUserById(id) {
    try {
      return await userModel.findByIdAndDelete(id);
    } catch (error) {
     return(`Error while deleting user with id : ${error}`);
    }
  }
  async searchUser(search_term) {
    try {
      return await userModel.find({
        $or: [
          { username: { $regex: search_term, $options: "i" } },
          { name: { $regex: search_term, $options: "i" } },
        ],
      });
    } catch (error) {
     return(`Error while searching user : ${error}`);
    }
  }
  filterUser() {}
}

export default UserService;

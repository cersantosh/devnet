import userModel from "../../models/user/user_model.js";
import isOwnResource from "../../utills/auth/own_resource.js";
class UserService {
  async checkUserExistById(id) {
    const response = await userModel.findById(id);
    return response ? true : false;
  }

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
    return await userModel.create(data);
  }

  async uploadProfile(email, fileName) {
    return await userModel.findOneAndUpdate(
      { email },
      { $set: { photo: fileName } }
    );
  }

  async getAllUsers() {
    return await userModel.find();
  }
  async readUserById(id) {
    return await userModel.findById(id);
  }
  async editUserById(id, data) {
    return await userModel.findByIdAndUpdate(id, data, { new: true });
  }
  async deleteUserById(id) {
    return await userModel.findByIdAndDelete(id);
  }
  async searchUser(search_term) {
    return await userModel.find({
      $or: [
        { username: { $regex: search_term, $options: "i" } },
        { name: { $regex: search_term, $options: "i" } },
      ],
    });
  }
  filterUser() {}
}

export default UserService;

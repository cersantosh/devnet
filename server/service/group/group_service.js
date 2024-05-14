import mongoose from "mongoose";
import groupModel from "../../models/group/group_model.js";
import userModel from "../../models/user/user_model.js";
class GroupService {
  async createGroup(data) {
    try {
      const group = await groupModel.create(data);
      await userModel.findByIdAndUpdate(data.user_info, {
        groups: {
          $push: group._id,
        },
      });
      return group;
    } catch (error) {
      console.log(`Error while creating group : ${error.message}`);
    }
  }

  async getAllGroups() {
    try {
      return await groupModel.find().populate("user_info");
    } catch (error) {
      console.log(`Error while fetching all groups : ${error.message}`);
    }
  }

  async fetchGroupById(id) {
    try {
      return await groupModel.findById(id).populate("user_info");
    } catch (error) {
      console.log(`Error while fetching group by id : ${error.message}`);
    }
  }
  async editGroupById(id, data) {
    try {
      return await groupModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.log(`Error while editing group with id : ${error}`);
    }
  }

  async deleteGroupById(id) {
    try {
      const group = await groupModel.findByIdAndDelete(id);
      await userModel.findByIdAndUpdate(group.user_info, {
        $pull: { groups: id },
      });
      return group;
    } catch (error) {
      console.log(`Error while deleting group with id : ${error}`);
    }
  }

  async searchGroup(search_term) {
    try {
      return await groupModel
        .find({
          $or: [
            { name: { $regex: search_term, $options: "i" } },
            { description: { $regex: search_term, $options: "i" } },
            { category: { $regex: search_term, $options: "i" } },
            { tags: { $in: search_term } },
          ],
        })
        .populate("user_info");
    } catch (error) {
      console.log(`Error while searching group : ${error}`);
    }
  }
  async filterGroup(filterOptions) {
    try {
      let query = {};
      return await groupModel.find(query);
    } catch (error) {
      console.log(`Error while filtering groups : ${error}`);
    }
  }
}

export default GroupService;

import userProfileModel from "../../models/profile/user_profile_model.js";
import userModel from "../../models/user/user_model.js";
class UserProfileService {
  async checkProfileExistById(id) {
    try {
      const profile = await userProfileModel.findById(id);
      return profile ? true : false;
    } catch (error) {
      return `Error while fetching profile by id : ${error.message}`;
    }
  }

  async createProfile(data, userId) {
    console.log("userId", userId);
    try {
      const previousProfile = await userProfileModel.findOne({
        user_info: userId,
      });
      if (!previousProfile) {
        const profile = await userProfileModel.create(data);
        await userModel.findByIdAndUpdate(userId, {
          user_profile_info: profile._id,
        });
        return profile;
      }
      return null;
    } catch (error) {
      return `Error while creating proifle : ${error.message}`;
    }
  }

  async getAllProfiles() {
    try {
      return await userProfileModel.find().populate("user_info");
    } catch (error) {
      return `Error while fetching all profiles : ${error.message}`;
    }
  }
  async fetchProfileById(id) {
    try {
      return await userProfileModel.findById(id).populate("user_info");
    } catch (error) {
      return `Error while fetching profile by id : ${error.message}`;
    }
  }
  async editProfileById(id, data) {
    try {
      return await userProfileModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      return `Error while editing profile with id : ${error}`;
    }
  }
  async deleteProfileById(id) {
    try {
      const profile = await userProfileModel.findByIdAndDelete(id);
      await userModel.findByIdAndUpdate(profile.user_info, {
        $unset: { user_profile_info: "" },
      });
      return profile;
    } catch (error) {
      return `Error while deleting profile with id : ${error}`;
    }
  }
  async searchProfile(search_term) {
    try {
      return await userProfileModel.find({
        $or: [
          { education: { $regex: search_term, $options: "i" } },
          { skills: { $in: search_term } },
          { hobbies: { $in: search_term } },
          { bio: { $regex: search_term, $options: "i" } },
        ],
      });
    } catch (error) {
      return `Error while searching profile : ${error}`;
    }
  }
  filterProfile() {}
}

export default UserProfileService;

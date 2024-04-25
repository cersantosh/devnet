import userProfileModel from "../../models/profile/user_profile_model.js";
import userModel from "../../models/user/user_model.js";
class UserProfileService {
  async createProfile(data) {
    try {
      const previousProfile = await userProfileModel.findOne({
        user_info: data.user_info,
      });
      if (!previousProfile) {
        const profile = await userProfileModel.create(data);
        await userModel.findByIdAndUpdate(data.user_info, {
          profile_info: profile._id,
        });
        return profile;
      }
      return null;
    } catch (error) {
      console.log(`Error while creating proifle : ${error.message}`);
    }
  }

  async getAllProfiles() {
    try {
      return await userProfileModel.find().populate("user_info");
    } catch (error) {
      console.log(`Error while fetching all profiles : ${error.message}`);
    }
  }
  async fetchProfileById(id) {
    try {
      return await userProfileModel.findById(id).populate("user_info");
    } catch (error) {
      console.log(`Error while fetching profile by id : ${error.message}`);
    }
  }
  async editProfileById(id, data) {
    try {
      return await userProfileModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.log(`Error while editing profile with id : ${error}`);
    }
  }
  async deleteProfileById(id) {
    try {
      const profile = await userProfileModel.findByIdAndDelete(id);
      await userModel.findByIdAndUpdate(profile.user_info, {
        $unset: { profile_info: "" },
      });
      return profile;
    } catch (error) {
      console.log(`Error while deleting profile with id : ${error}`);
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
      console.log(`Error while searching profile : ${error}`);
    }
  }
  filterProfile() {}
}

export default UserProfileService;

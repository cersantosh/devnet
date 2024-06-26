import companyProfileModel from "../../models/profile/company_profile_model.js";
import userModel from "../../models/user/user_model.js";
class CompanyProfileService {
  async createProfile(data, userId) {
    try {
      const previousProfile = await companyProfileModel.findOne({
        company_info: userId,
      });
      if (!previousProfile) {
        const profile = await companyProfileModel.create(data);
        await userModel.findByIdAndUpdate(userId, {
          company_profile_info: profile._id,
        });
        return profile;
      }
      return null;
    } catch (error) {
      return(`Error while creating company proifle : ${error.message}`);
    }
  }

  async getAllProfiles() {
    try {
      return await companyProfileModel.find().populate("company_info");
    } catch (error) {
      return(
        `Error while fetching all company profiles : ${error.message}`
      );
    }
  }
  async fetchProfileById(id) {
    try {
      return await companyProfileModel.findById(id).populate("company_info");
    } catch (error) {
      return(
        `Error while fetching company profile by id : ${error.message}`
      );
    }
  }
  async editProfileById(id, data) {
    try {
      return await companyProfileModel.findByIdAndUpdate(id, data, {
        new: true,
      });
    } catch (error) {
      return(`Error while editing company profile with id : ${error}`);
    }
  }
  async deleteProfileById(id) {
    try {
      const profile = await companyProfileModel.findByIdAndDelete(id);
      await userModel.findByIdAndUpdate(profile.company_info, {
        $unset: { company_profile_info: "" },
      });
      return profile;
    } catch (error) {
      return(`Error while deleting company profile with id : ${error}`);
    }
  }
  async searchProfile(search_term) {
    try {
      return await companyProfileModel.find({
        $or: [
          { bio: { $regex: search_term, $options: "i" } },
          { company_size: { $regex: search_term, $options: "i" } },
          { headquater: { $regex: search_term, $options: "i" } },
        ],
      });
    } catch (error) {
      return(`Error while searching company profile : ${error}`);
    }
  }
  filterProfile() {}
}

export default CompanyProfileService;

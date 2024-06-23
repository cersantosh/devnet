import UserProfileService from "../../../../service/profile/user_profile_service.js";
const userProfileService = new UserProfileService();
class UserProfileController {
  async createProfile(req, res) {
    try {
      const userId = req.user._id;
      const profile = await userProfileService.createProfile(
        { user_info: userId, ...req.body },
        userId
      );
      if (profile) {
        return res.status(200).json({
          success: true,
          message: "User profile created successfully",
          response: profile,
        });
      }
      return res.status(200).json({
        success: true,
        message: "User profile already exists for this user",
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllProfiles(req, res) {
    console.log();
    try {
      const allProfiles = await userProfileService.getAllProfiles();
      res.status(200).json({
        success: true,
        message: "All user profiles fetched successfully",
        total: allProfiles.length,

        response: allProfiles,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async fetchProfileById(req, res) {
    try {
      const { id } = req.params;
      const profileExist = await userProfileService.checkProfileExistById(id);
      if (!profileExist) {
        return res.status(404).json({
          success: false,
          message: "User profile does not exist",
        });
      }
      const profile = await userProfileService.fetchProfileById(id);
      res.status(200).json({
        success: true,
        message: "User profile fetched with id",
        response: profile,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editProfileById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const profileExist = await userProfileService.checkProfileExistById(id);
      if (!profileExist) {
        return res.status(404).json({
          success: false,
          message: "User profile does not exist",
        });
      }
      const profile = await userProfileService.editProfileById(id, data);
      res.status(200).json({
        success: true,
        message: "User profile updated with id",
        response: profile,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteProfileById(req, res) {
    try {
      const { id } = req.params;
      const profileExist = await userProfileService.checkProfileExistById(id);
      if (!profileExist) {
        return res.status(404).json({
          success: false,
          message: "User profile does not exist",
        });
      }
      const profile = await userProfileService.deleteProfileById(id);
      res.status(200).json({
        success: true,
        message: "User profile deleted with given id",
        response: profile,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchProfile(req, res) {
    try {
      const { search_term } = req.query;
      const profile = await userProfileService.searchProfile(search_term);
      res.status(200).json({
        success: true,
        message: "User profile searched with given search term",
        total: profile.length,
        response: profile,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterProfile(req, res) {
    userProfileService.filterUser(query);
  }
}

export default UserProfileController;

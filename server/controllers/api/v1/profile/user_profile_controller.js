import UserProfileService from "../../../../service/profile/user_profile_service.js";
const userProfileService = new UserProfileService();
class UserProfileController {
  async createProfile(req, res) {
    try {
      const profile = await userProfileService.createProfile(req.body);
      if (profile) {
        return res.status(200).json({
          success: true,
          message: "Profile created successfully",
          response: profile,
        });
      }
      return res.status(200).json({
        success: true,
        message: "Profile already exists for this user",
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllProfiles(req, res) {
    try {
      const allProfiles = await userProfileService.getAllUsers();
      res.status(200).json({
        success: true,
        message: "All profiles fetched successfully",
        response: allProfiles,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async fetchProfileById(req, res) {
    try {
      const { id } = req.params;
      const profile = await userProfileService.readUserById(id);
      res.status(200).json({
        success: true,
        message: "Profile fetched with id",
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
      const profile = await userProfileService.editUserById(id, data);
      res.status(200).json({
        success: true,
        message: "Profile updated with id",
        response: profile,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteProfileById(req, res) {
    try {
      const { id } = req.params;
      const profile = await userProfileService.deleteUserById(id);
      res.status(200).json({
        success: true,
        message: "Profile deleted with given id",
        response: profile,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchProfile(req, res) {
    try {
      const { search_term } = req.query;
      const profile = await userProfileService.searchUser(search_term);
      res.status(200).json({
        success: true,
        message: "Profile searched with given search term",
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

import CompanyProfileService from "../../../../service/profile/company_profile_service.js";

const companyProfileService = new CompanyProfileService();
class CompanyProfileController {
  async createProfile(req, res) {
    try {
      const userId = req.user._id;
      const profile = await companyProfileService.createProfile(
        { company_info: userId, ...req.body },
        userId
      );
      if (profile) {
        return res.status(200).json({
          success: true,
          message: "Company profile created successfully",
          response: profile,
        });
      }
      return res.status(200).json({
        success: true,
        message: "Company profile already exists for this user",
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllProfiles(req, res) {
    try {
      const allProfiles = await companyProfileService.getAllProfiles();
      res.status(200).json({
        success: true,
        message: "All company profiles fetched successfully",
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
      const profile = await companyProfileService.fetchProfileById(id);
      res.status(200).json({
        success: true,
        message: "Company profile fetched with id",
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
      const profile = await companyProfileService.editProfileById(id, data);
      res.status(200).json({
        success: true,
        message: "Company profile updated with id",
        response: profile,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteProfileById(req, res) {
    try {
      const { id } = req.params;
      const profile = await companyProfileService.deleteProfileById(id);
      res.status(200).json({
        success: true,
        message: "Company profile deleted with given id",
        response: profile,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchProfile(req, res) {
    try {
      const { search_term } = req.query;
      const profile = await companyProfileService.searchProfile(search_term);
      res.status(200).json({
        success: true,
        message: "Company profile searched with given search term",
        total: profile.length,
        response: profile,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterProfile(req, res) {
    companyProfileService.filterCompany(query);
  }
}

export default CompanyProfileController;

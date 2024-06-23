import express from "express";
import CompanyProfileController from "../../../../controllers/api/v1/profile/company_profile_controller.js";
let companyProfileRoutes = express.Router();

let companyProfileController = new CompanyProfileController();

const routes = {
  create_profile: "/create",
  all_profiles: "/",
  fetch_profile: "/fetch/:id",
  edit_profile: "/edit/:id",
  delete_profile: "/delete/:id",
  search_profile: "/search",
  filter_profile: "/filter",
};

companyProfileRoutes.post(
  routes.create_profile,
  companyProfileController.createProfile
);
companyProfileRoutes.get(
  routes.all_profiles,
  companyProfileController.getAllProfiles
);
companyProfileRoutes.get(
  routes.fetch_profile,
  companyProfileController.fetchProfileById
);
companyProfileRoutes.patch(
  routes.edit_profile,
  companyProfileController.editProfileById
);
companyProfileRoutes.delete(
  routes.delete_profile,
  companyProfileController.deleteProfileById
);
companyProfileRoutes.get(
  routes.search_profile,
  companyProfileController.searchProfile
);
companyProfileRoutes.get(
  routes.filter_profile,
  companyProfileController.filterProfile
);

export default companyProfileRoutes;

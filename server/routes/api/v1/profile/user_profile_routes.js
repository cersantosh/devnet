import express from "express";
import UserProfileController from "../../../../controllers/api/v1/profile/user_profile_controller.js";
let profileRoutes = express.Router();

let userProfileController = new UserProfileController();

const routes = {
  create_profile: "/create",
  all_profiles: "/",
  fetch_profile: "/fetch/:id",
  edit_profile: "/edit/:id",
  delete_profile: "/delete/:id",
  search_profile: "/search",
  filter_profile: "/filter",
};

profileRoutes.post(routes.create_profile, userProfileController.createProfile);
profileRoutes.get(routes.all_profiles, userProfileController.getAllProfiles);
profileRoutes.get(routes.fetch_profile, userProfileController.fetchProfileById);
profileRoutes.patch(routes.edit_profile, userProfileController.editProfileById);
profileRoutes.delete(
  routes.delete_profile,
  userProfileController.deleteProfileById
);
profileRoutes.get(routes.search_profile, userProfileController.searchProfile);
profileRoutes.get(routes.filter_profile, userProfileController.filterProfile);

export default profileRoutes;

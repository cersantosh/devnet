import express from "express";
import UserProfileController from "../../../../controllers/api/v1/profile/user_profile_controller.js";
let userProfileRoutes = express.Router();

let userProfileController = new UserProfileController();

const routes = {
  create_profile: "/create",
  all_profiles: "/all",
  fetch_profile: "/fetch/:id",
  edit_profile: "/edit/:id",
  delete_profile: "/delete/:id",
  search_profile: "/search",
  filter_profile: "/filter",
};

userProfileRoutes.post(routes.create_profile, userProfileController.createProfile);
userProfileRoutes.get(routes.all_profiles, userProfileController.getAllProfiles);
userProfileRoutes.get(routes.fetch_profile, userProfileController.fetchProfileById);
userProfileRoutes.patch(routes.edit_profile, userProfileController.editProfileById);
userProfileRoutes.delete(
  routes.delete_profile,
  userProfileController.deleteProfileById
);
userProfileRoutes.get(routes.search_profile, userProfileController.searchProfile);
userProfileRoutes.get(routes.filter_profile, userProfileController.filterProfile);

export default userProfileRoutes;

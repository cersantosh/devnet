import express from "express";
import JobController from "../../../../controllers/api/v1/job/job_controller.js";
let jobRoutes = express.Router();

let jobController = new JobController();

const routes = {
  create_job: "/create",
  all_jobs: "/",
  fetch_job: "/fetch/:id",
  edit_job: "/edit/:id",
  delete_job: "/delete/:id",
  search_job: "/search",
  filter_job: "/filter",
};

jobRoutes.post(routes.create_job, jobController.createJob);
jobRoutes.get(routes.all_jobs, jobController.getAllJobs);
jobRoutes.get(routes.fetch_job, jobController.fetchJobById);
jobRoutes.patch(routes.edit_job, jobController.editJobById);
jobRoutes.delete(routes.delete_job, jobController.deleteJobById);
jobRoutes.get(routes.search_job, jobController.searchJob);
jobRoutes.get(routes.filter_job, jobController.filterJob);

export default jobRoutes;

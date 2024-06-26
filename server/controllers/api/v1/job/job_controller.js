import JobService from "../../../../service/job/job_service.js";
const jobService = new JobService();
class JobController {
  async createJob(req, res) {
    try {
      const userId = req.user._id;
      const job = await jobService.createJob({user_info : userId, ...req.body}, userId);
      res.status(200).json({
        success: true,
        message: "Job created successfully",
        response: job,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllJobs(req, res) {
    try {
      const allJobs = await jobService.getAllJobs();
      res.status(200).json({
        success: true,
        message: "All jobs fetched successfully",
        count : allJobs.length,
        response: allJobs
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async fetchJobById(req, res) {
    try {
      const { id } = req.params;
      const job = await jobService.fetchJobById(id);
      res.status(200).json({
        success: true,
        message: "Job fetched with id",
        response: job,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editJobById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const job = await jobService.editJobById(id, data);
      res.status(200).json({
        success: true,
        message: "Job updated with id",
        response: job,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteJobById(req, res) {
    try {
      const { id } = req.params;
      const job = await jobService.deleteJobById(id);
      res.status(200).json({
        success: true,
        message: "Job deleted with given id",
        response: job,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchJob(req, res) {
    try {
      const { search_term } = req.query;
      const job = await jobService.searchJob(search_term);
      res.status(200).json({
        success: true,
        message: "Job searched with given search term",
        response: job,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterJob(req, res) {
    try {
      const query = req.query;
      const jobs = await jobService.filterJob(query);
      res.status(200).json({
        success: true,
        message: "Job filtered with given filter options",
        response: jobs,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
}

export default JobController;

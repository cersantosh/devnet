import jobModel from "../../models/job/job_model.js";
import userModel from "../../models/user/user_model.js";
class JobService {
  async createJob(data) {
    try {
      const job = await jobModel.create(data);
      await userModel.findByIdAndUpdate(data.user_info, {
        $push: { posted_jobs: job._id },
      });
      return job;
    } catch (error) {
      console.log(`Error while creating job : ${error.message}`);
    }
  }

  async getAllJobs() {
    try {
      return await jobModel.find().populate("user_info company_info");
    } catch (error) {
      console.log(`Error while fetching all jobs : ${error.message}`);
    }
  }
  async fetchJobById(id) {
    try {
      return await jobModel.findById(id).populate("user_info company_info");
    } catch (error) {
      console.log(`Error while fetching job by id : ${error.message}`);
    }
  }
  async editJobById(id, data) {
    try {
      return await jobModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.log(`Error while editing job with id : ${error}`);
    }
  }
  async deleteJobById(id) {
    try {
      const job = await jobModel.findByIdAndDelete(id);
      await userModel.findByIdAndUpdate(data.user_info, {
        $pull: { posted_jobs: job._id },
      });
      return job;
    } catch (error) {
      console.log(`Error while deleting job with id : ${error}`);
    }
  }
  async searchJob(search_term) {
    try {
      return await jobModel
        .find({
          $or: [
            { title: { $regex: search_term, $options: "i" } },
            { skills_required: { $in: search_term } },
            { description: { $regex: search_term, $options: "i" } },
            { location: { $regex: search_term, $options: "i" } },
            { job_type: { $regex: search_term, $options: "i" } },
            { experience: { $regex: search_term, $options: "i" } },
            { experience_level: { $regex: search_term, $options: "i" } },

            { education: { $regex: search_term, $options: "i" } },
            { salary_range: { $regex: search_term, $options: "i" } },
            { country: { $regex: search_term, $options: "i" } },
          ],
        })
        .populate("user_info company_info");
    } catch (error) {
      console.log(`Error while searching job : ${error}`);
    }
  }
  async filterJob(filterOptions) {
    try {
      let query = {};

      // filtering according to posted time
      if (filterOptions.posted_time === "24_hours") {
        const currentDate = new Date();
        const currentHours = currentDate.getHours();
        currentDate.setHours(currentHours - 24);
        query.createdAt = { $gte: currentDate };
      } else if (filterOptions.posted_time === "1_month") {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 1);
        query.createdAt = { $gte: currentDate };
      } else if (filterOptions.posted_time === "1_week") {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 7);
        query.createdAt = { $gte: currentDate };
      } else {
      }

      if (filterOptions.country) {
        query.country = filterOptions.country;
      }

      if (filterOptions.job_type) {
        query.job_type = filterOptions.job_type;
      }

      if (filterOptions.experience_level) {
        query.experience_level = filterOptions.experience_level;
      }

      // if (filterOptions.salary_range) {
      //   const range = filterOptions.salary_range.split("-");
      //   const low = range[0];
      //   const high = range[1];
      //   query.salary_range = filterOptions.salary_range;
      // }

      return await jobModel.find(query).populate("user_info company_info");
    } catch (error) {
      console.log(`Error while filtering jobs : ${error}`);
    }
  }
}

export default JobService;

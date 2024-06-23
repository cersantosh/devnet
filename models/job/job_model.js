import mongoose from "mongoose";
const jobSchema = new mongoose.Schema(
  {
    user_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required : true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    job_type: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },
    experience_level: {
      type: String,
      required: true,
    },
    skills_required: {
      type: [String],
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    salary_range: {
      type: String,
      required: true,
    },
    application_deadline: {
      type: Date,
      required: true,
    },
    registration_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const jobModel = mongoose.model("jobs", jobSchema);
export default jobModel;

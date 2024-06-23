import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["individual", "company"],
      required: true,
    },
    general_answers: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "answers",
        },
      ],
    },
    error_answers: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "answers",
        },
      ],
    },
    general_questions: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "general_questions",
        },
      ],
    },
    error_questions: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "error_questions",
        },
      ],
    },
    user_profile_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_profiles",
    },
    company_profile_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company_profiles",
    },
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "groups",
      },
    ],
    posted_jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jobs",
      },
    ],
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jobs",
      },
    ],
    polls: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "polls",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
export default userModel;

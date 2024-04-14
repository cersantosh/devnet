import mongoose from "mongoose";
const errorQuestionSchema = new mongoose.Schema(
  {
    userInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    requested_users: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    },
  },
  {
    timestamps: true,
  }
);

const errorQuestionModel = mongoose.model(
  "error_questions",
  errorQuestionSchema
);
export default errorQuestionModel;

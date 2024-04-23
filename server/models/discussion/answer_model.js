import mongoose from "mongoose";
const answerSchema = new mongoose.Schema(
  {
    user_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    general_question_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "general_questions",
    },
    error_question_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "error_questions",
    },
    answer: {
      type: String,
      required: true,
    },
    up_vote: {
      type: Number,
      default: 0,
    },
    down_vote: {
      type: Number,
      default: 0,
    },
    answer_type: {
      type: String,
      enum: ["error", "general"],
      required: true,
    },
    is_public : {
      type : Boolean,
      default: true
    }
  },
  {
    timestamps: true,
  }
);

const answerModel = mongoose.model("answers", answerSchema);
export default answerModel;

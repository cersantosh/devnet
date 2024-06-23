import mongoose from "mongoose";
const generalQuestionSchema = new mongoose.Schema(
  {
    user_info: {
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
    is_public: {
      type: Boolean,
      default: true,
    },
    question_analytics: {
      vote_count: {
        type: Number,
        default: 0,
      },
      answers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "answers",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const generalQuestionModel = mongoose.model(
  "general_questions",
  generalQuestionSchema
);
export default generalQuestionModel;

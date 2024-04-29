import mongoose from "mongoose";
const pollSchema = new mongoose.Schema(
  {
    user_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    is_public: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [
        {
          name: String,
          vote_count: {
            type: Number,
            default: 0,
          },
        },
      ],
    },
    likes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
      ],
    },
    comments: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "comments",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const pollModel = mongoose.model("polls", pollSchema);
export default pollModel;

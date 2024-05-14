import mongoose from "mongoose";
const replySchema = new mongoose.Schema(
  {
    user_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
      required: true,
    },
    reply: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const replyModel = mongoose.model("replies", replySchema);
export default replyModel;

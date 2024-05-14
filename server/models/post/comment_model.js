import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    user_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    post_type: {
      type: String,
      enum: ["polls", "posts"],
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "post_type",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    replies: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "replies",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const commentModel = mongoose.model("comments", commentSchema);
export default commentModel;

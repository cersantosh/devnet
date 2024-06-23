import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
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
    text: {
      type: String,
      required: true,
    },
    images: {
      type: [
        {
          type: String,
        },
      ],
    },
    gifs: {
      type: [
        {
          type: String,
        },
      ],
    },
    tagged_people: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
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

const postModel = mongoose.model("posts", postSchema);
export default postModel;

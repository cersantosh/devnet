import mongoose from "mongoose";
const groupSchema = new mongoose.Schema(
  {
    user_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    privacy: {
      type: String,
      enum: ["public", "private"],
    },
    tags: [String],
    photo: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
    },
    members: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const groupModel = mongoose.model("groups", groupSchema);
export default groupModel;

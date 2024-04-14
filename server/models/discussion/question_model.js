import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
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

const questionModel = mongoose.model("questions", questionSchema);
export default questionModel;

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
      required: true,
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
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
export default userModel;

import mongoose from "mongoose";
const userProfileSchema = new mongoose.Schema(
  {
    user_info : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "users",
      required : true
    },
    education: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
    },
    hobbies: {
      type: [String],
    },
    bio: {
      type: String,
      required: true,
    },
    social_medias: {
      type: [
        {
          name: {
            type: String,
            required : true,
          },
          link: {
            type: String,
            required : true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const userProfileModel = mongoose.model("user_profiles", userProfileSchema);
export default userProfileModel;

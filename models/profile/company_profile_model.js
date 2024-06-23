import mongoose from "mongoose";
const companyProfileSchema = new mongoose.Schema(
  {
    company_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    headquater: {
      type: String,
      required: true,
    },
    company_size: {
      type: String,
      required: true,
    },
    social_medias: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          link: {
            type: String,
            required: true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const companyProfileModel = mongoose.model(
  "company_profiles",
  companyProfileSchema
);
export default companyProfileModel;

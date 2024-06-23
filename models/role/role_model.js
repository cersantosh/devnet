import mongoose from "mongoose";
const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    permissions: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const roleModel = mongoose.model("roles", roleSchema);
export default roleModel;

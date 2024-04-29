import mongoose from "mongoose";
const eventSchema = new mongoose.Schema(
  {
    user_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required : true,
    },
    event_poster: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    event_type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    event_date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    organizer_info: {
      type: String,
      required: true,
    },
    registration_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const eventModel = mongoose.model("events", eventSchema);
export default eventModel;

import mongoose from "mongoose";
const eventSchema = new mongoose.Schema(
  {
    userInfo : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "users",
      required : true
    },
    companyInfo : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "companies",
      required : true
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
    date_time: {
      date: {
        type: Date,
      },
      time: {
        type: Time,
      },
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

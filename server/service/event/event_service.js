import eventModel from "../../models/event/event_model.js";
import userModel from "../../models/user/user_model.js";
class EventService {
  async createEvent(data, userId) {
    try {
      const event = await eventModel.create(data);
      await userModel.findByIdAndUpdate(userId, {
        $push: { events: event._id },
      });
      return event;
    } catch (error) {
      return(`Error while creating event : ${error.message}`);
    }
  }

  async getAllEvents() {
    try {
      return await eventModel.find().populate("user_info");
    } catch (error) {
      return(`Error while fetching all events : ${error.message}`);
    }
  }
  async fetchEventById(id) {
    try {
      return await eventModel.findById(id).populate("user_info");
    } catch (error) {
      return(`Error while fetching event by id : ${error.message}`);
    }
  }
  async editEventById(id, data) {
    try {
      return await eventModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      return(`Error while editing event with id : ${error}`);
    }
  }
  async deleteEventById(id) {
    try {
      const event = await eventModel.findByIdAndDelete(id);
      await userModel.findByIdAndUpdate(event.user_info, {
        $pull: { events: event._id },
      });
      return event;
    } catch (error) {
      return(`Error while deleting event with id : ${error}`);
    }
  }
  async searchEvent(search_term) {
    try {
      return await eventModel
        .find({
          $or: [
            { title: { $regex: search_term, $options: "i" } },
            { description: { $regex: search_term, $options: "i" } },
            { location: { $regex: search_term, $options: "i" } },
            { event_type: { $regex: search_term, $options: "i" } },
            { organizer_info: { $regex: search_term, $options: "i" } },
          ],
        })
        .populate("user_info");
    } catch (error) {
      return(`Error while searching event : ${error}`);
    }
  }
  async filterEvent(filterOptions) {
    try {
      let query = {};
      if (filterOptions.event_type) {
        query.event_type = filterOptions.event_type;
      }
      if (filterOptions.from_date && filterOptions.to_date) {
        query.event_date = {
          $gte: new Date(filterOptions.from_date),
          $lte: new Date(filterOptions.to_date),
        };
      }

      return await eventModel.find(query).populate("user_info");
    } catch (error) {
      return(`Error while filtering events : ${error}`);
    }
  }
}

export default EventService;

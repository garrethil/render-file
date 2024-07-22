const { ObjectId } = require("mongoose").Types;
const { Event } = require("../models");

module.exports = {
  // Get all events
  async getEvents(req, res) {
    try {
      const events = await Event.find();
      const eventObj = {
        events,
      };
      return res.json(eventObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // create a new event
  async createEvent(req, res) {
    try {
      const event = await Event.create(req.body);
      res.json(event);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete an event
  async deleteEvent(req, res) {
    try {
      const student = await Event.findOneAndRemove({
        _id: req.params.eventId,
      });

      if (!student) {
        return res.status(404).json({ message: "No such event exists" });
      }

      res.json({ message: "Event successfully deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Update an event
  async updateEvent(req, res) {
    try {
      const event = await Event.findOneAndUpdate(
        { _id: req.params.eventId },
        { $set: req.body },
        { new: true, runValidators: true }
      );

      if (!event) {
        return res.status(404).json({ message: "No such event exists" });
      }

      res.json(event);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

const router = require("express").Router();
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../../controllers/eventController.js");

// /api/courses
router.route("/").get(getEvents).post(createEvent);

// /api/courses/:courseId
router.route("/:eventId").put(updateEvent).delete(deleteEvent);

module.exports = router;

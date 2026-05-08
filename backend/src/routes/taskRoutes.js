const express = require("express");

const {
  createTask,
  getTasks,
  updateTaskStatus,
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// ADMIN ONLY
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  createTask
);

// ALL LOGGED-IN USERS
router.get(
  "/",
  authMiddleware,
  getTasks
);

// UPDATE TASK STATUS
router.put(
  "/:id",
  authMiddleware,
  updateTaskStatus
);

module.exports = router;
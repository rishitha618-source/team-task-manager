const express = require("express");

const {
  createProject,
  getProjects,
} = require("../controllers/projectController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// ADMIN ONLY
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  createProject
);

// ALL LOGGED-IN USERS
router.get(
  "/",
  authMiddleware,
  getProjects
);

module.exports = router;
const express = require('express');
const router = express.Router();

const {
    register, login
} = require('../controllers/authController')

const {
  enrollUser,
  getUserDetails,
  getUserEnrolledCourses,
  suggestJobsBasedOnCourses
} = require("../controllers/userController");

const {
authenticateUser
} = require('../middleware/authentication')
router
  .post("/register", register)
  .post("/login", login)
  .get("/get-user-details", authenticateUser, getUserDetails)
  .post("/enroll/:courseId", authenticateUser, enrollUser)
  .get("/suggest-jobs", authenticateUser, suggestJobsBasedOnCourses)
  .get("/get-enrolled-courses", authenticateUser, getUserEnrolledCourses);


module.exports = router
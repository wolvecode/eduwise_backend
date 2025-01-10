const express = require("express");
const router = express.Router();

const { register, login, forgotPassword, resetPassword } = require("../controllers/authController");

const {
  enrollUser,
  getUserDetails,
  getUserEnrolledCourses,
  suggestJobsBasedOnCourses,
  markLessonWatched,
  getUserCourseProgress,
  updateUserDetails,
  suggestJobsBasedOnInterests,
} = require("../controllers/userController");

const { authenticateUser } = require("../middleware/authentication");

router
  .post("/register", register)
  .post("/login", login)
  .post("/forgot-password", forgotPassword)
  .patch("/reset-password/:token", resetPassword)
  .patch("/update/user", authenticateUser, updateUserDetails)
  .get("/get-user-details", authenticateUser, getUserDetails)
  .post("/enroll/:courseId", authenticateUser, enrollUser)
  .get("/suggest-jobs", authenticateUser, suggestJobsBasedOnCourses)
  .get("/suggest-job/interest", authenticateUser, suggestJobsBasedOnInterests)
  .get("/get-enrolled-courses", authenticateUser, getUserEnrolledCourses)
  .patch(
    "/courses/:courseId/sections/:sectionTitle/lessons/:lessonTitle/watched",
    authenticateUser,
    markLessonWatched
  )
  .get("/courses/:courseId/progress", authenticateUser, getUserCourseProgress);

module.exports = router;

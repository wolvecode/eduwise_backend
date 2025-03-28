const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotPassword,
  changePassword,
  resetPassword,
} = require("../controllers/authController");

const {
  getUserCount,
  enrollUser,
  getUserDetails,

  getUserEnrolledCourses,
  suggestJobsBasedOnCourses,
  markLessonWatched,
  getUserCourseProgress,
  updateUserDetails,
  suggestJobsBasedOnInterests,
  createAdmin,
  toggleAdminStatus
} = require("../controllers/userController");

const { authenticateUser, authorizePermissions } = require("../middleware/authentication");

router
  .post("/register", register)
  .post("/login", login)
  .patch("/change-password", authenticateUser, changePassword)
  .post("/forgot-password", forgotPassword)
  .patch("/reset-password/:token", resetPassword)
  .patch("/update/user", authenticateUser, updateUserDetails)
  .get("/get-user-details", authenticateUser, getUserDetails)
  .post("/enroll/:courseId", authenticateUser, enrollUser)
  .get("/suggest-jobs", authenticateUser, suggestJobsBasedOnCourses)
  .get("/suggest-job/interest", authenticateUser, suggestJobsBasedOnInterests)
  .get("/get-enrolled-courses", authenticateUser, getUserEnrolledCourses)
  .get("/total-students", authenticateUser, getUserCount)
  .patch(
    "/courses/:courseId/sections/:sectionTitle/lessons/:lessonTitle/watched",
    authenticateUser,
    markLessonWatched
  )
  .get("/courses/:courseId/progress", authenticateUser, getUserCourseProgress)
  .post("/create-admin", authorizePermissions("super_admin"), createAdmin)
  .patch("/toggle-admin/:id", authorizePermissions("super_admin"), toggleAdminStatus);

module.exports = router;

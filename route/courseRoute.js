const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getSuggestedCoursesForUser,
  createCourse,
  editCourse,
  addContentToCourse,
  editContentInCourse,
  deleteCourse,
  addQuizToCourse,
  submitQuizAnswers
} = require("../controllers/courseController"); 

const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

router
  .get("/all-courses", getAllCourses)
  .get("/suggested-courses", authenticateUser, getSuggestedCoursesForUser)
  .post(
    "/create-course",
    authenticateUser,
    authorizePermissions("admin"),
    createCourse
  )
  .patch(
    "/edit-course/:id",
    authenticateUser,
    authorizePermissions("admin"),
    editCourse
  )
  .post(
    "/add-content/:id",
    authenticateUser,
    authorizePermissions("admin"),
    addContentToCourse
  )
  .patch(
    "/edit-content/:id/:contentId",
    authenticateUser,
    authorizePermissions("admin"),
    editContentInCourse
  )
  .delete(
    "/delete-course/:id",
    authenticateUser,
    authorizePermissions("admin"),
    deleteCourse
  )
  .post("/courses/:courseId/quizzes", addQuizToCourse)
  .post("/courses/:courseId/quizzes/:quizId/submit", submitQuizAnswers);

module.exports = router;

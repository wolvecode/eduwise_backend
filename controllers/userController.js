const User = require("../models/UserModel");
const Course = require("../models/CourseModel");
const Job = require('../models/JobModel')

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate(
      "enrolledCourses",
      "title description"
    );

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    const userDetails = user.toObject();

    delete userDetails.password;

    res.status(200).json({ status: "success", user: userDetails });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};


const getUserEnrolledCourses = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate(
      "enrolledCourses"
    );

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      enrolledCourses: user.enrolledCourses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};


const enrollUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { courseId } = req.params;

    // Find the course by ID
    const course = await Course.findById(courseId);
    if (!course) {
      return res
        .status(404)
        .json({ status: "error", message: "Course not found" });
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    // Check if the user is already enrolled in the course
    if (user.enrolledCourses.includes(courseId)) {
      return res.status(400).json({
        status: "error",
        message: "User is already enrolled in this course",
      });
    }

    // Add the course to the user's enrolled courses
    user.enrolledCourses.push(courseId);
    await user.save();

    // Increment the enrolledStudents count for the course
    course.enrolledStudents += 1;
    await course.save();

    // Respond with success
    res.status(200).json({
      status: "success",
      message: "User successfully enrolled in the course",
      enrolledCourses: user.enrolledCourses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};




const suggestJobsBasedOnCourses = async (req, res) => {
  try {
    const userId = req.user.userId;
  
    const user = await User.findById(userId).populate("enrolledCourses");
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    

    if (!user.enrolledCourses || user.enrolledCourses.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "User is not enrolled in any courses",
      });
    }
    const categories = [
      ...new Set(
        user.enrolledCourses.flatMap((course) => course.targetAudience)
      ),
    ];

 
    

    if (categories.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "No categories found for the enrolled courses",
      });
    }

    const jobs = await Job.find({ category: { $in: categories } });
   
    

    res.status(200).json({
      status: "success",
      message: "Suggested jobs based on enrolled courses",
      nbHits: jobs.length,
      jobs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};


module.exports = { enrollUser, getUserDetails, getUserEnrolledCourses , suggestJobsBasedOnCourses};

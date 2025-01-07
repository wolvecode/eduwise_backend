const User = require("../models/UserModel");
const createTokenUser = require("../utils/createTokenUser");
const { createToken } = require("../utils/token");
const { handleValidationError } = require("../utils/handleError");
const Course = require("../models/CourseModel");
const cloudinary = require("cloudinary").v2; 
const fs = require("fs")


const register = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    let interests = req.body.interests;
    if (!Array.isArray(interests)) {
      if (typeof interests === "string" && interests.trim()) {
        interests = [interests];
      } else {
        interests = [];
      }
    }

    if (interests.length === 0) {
      return res
        .status(400)
        .json({ error: "Please select at least one interest." });
    }

    const validInterests = [
      "Machine Learning",
      "Robotics",
      "Natural Language Processing (NLP)",
      "Cognitive Computing",
      "AI in Gaming",
    ];

    const invalidInterests = interests.filter(
      (interest) => !validInterests.includes(interest)
    );
    if (invalidInterests.length > 0) {
      return res.status(400).json({
        error: `${invalidInterests.join(", ")} is/are not valid interest(s)`,
      });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const { userImage } = req.files;

    // Ensure the user image is provided
    if (!req.files || !userImage) {
      return res.status(400).json({
        status: "failed",
        error: "User image is required!",
      });
    }

    // Validate file types (allow only JPEG and PNG)
    const allowedMimeTypes = ["image/jpeg", "image/png"];
    if (!allowedMimeTypes.includes(userImage.mimetype)) {
      return res.status(400).json({
        status: "failed",
        error: "Only JPEG and PNG images are allowed for user image!",
      });
    }

    // Upload the user image to Cloudinary
    const userImageResult = await cloudinary.uploader.upload(
      userImage.tempFilePath,
      {
        use_filename: true,
        folder: "edwise_images",
      }
    );

    // Delete the temporary file after upload
    fs.unlinkSync(userImage.tempFilePath);

    // Create the user
    const user = await User.create({
      fullName,
      email,
      password,
      interests,
      role,
      userImage: userImageResult.secure_url,
    });

    const tokenUser = createTokenUser(user);
    const token = createToken({ user: tokenUser });

    return res.status(201).json({
      token,
      status: "success",
      message: "User created successfully",
      user: tokenUser,
      userImage: user.userImage,
    });
  } catch (error) {
    console.error(error);

    // Ensure the temporary file is deleted if an error occurs before upload completes
    if (req.files && req.files.userImage && req.files.userImage.tempFilePath) {
      fs.unlinkSync(req.files.userImage.tempFilePath);
    }

    const { statusCode = 500, error: errorMessage = "Internal Server Error" } =
      handleValidationError(error);
    return res.status(statusCode).json({ error: errorMessage });
  }
};




const getSuggestedCourses = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const suggestedCourses = await Course.find({
      targetAudience: { $in: user.interests },
    });
    return suggestedCourses;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching suggested courses: " + error.message);
  }
};



const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide email and password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Email or password incorrect" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(404).json({ error: "Email or password incorrect" });
    }

    const tokenUser = createTokenUser(user);
    const token = createToken({ user: tokenUser });

    const suggestedCourses = await getSuggestedCourses(user._id);

    return res.status(200).json({
      token,
      status: "success",
      message: "Login successful",
      user: tokenUser,
      // suggestedCourses, 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
};

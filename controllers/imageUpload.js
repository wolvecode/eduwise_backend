const cloudinary = require("cloudinary").v2;
const User = require("../models/UserModel");
const fs = require("fs"); 

const userImage = async (req, res) => {
  try {
    if (!req.files || !req.files.image) {
      return res
        .status(400)
        .json({ error: "Please provide a valid image for upload." });
    }

    const userImage = req.files.image;

    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedMimeTypes.includes(userImage.mimetype)) {
      return res
        .status(400)
        .json({ error: "Only JPEG, PNG, and GIF images are allowed." });
    }

    const MAX_SIZE_MB = 5;
    if (userImage.size > MAX_SIZE_MB * 1024 * 1024) {
      return res
        .status(400)
        .json({ error: `Image size should not exceed ${MAX_SIZE_MB}MB.` });
    }

    const result = await cloudinary.uploader.upload(userImage.tempFilePath, {
      use_filename: true,
      folder: "edwise_image",
    });

    fs.unlinkSync(userImage.tempFilePath);

    const userId = req.user.userId; 
    const user = await User.findByIdAndUpdate(
      userId,
      { userImage : result.secure_url },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({
      status: "success",
      message: "Image uploaded successfully.",
      userImage: result.secure_url,
    });
  } catch (error) {
    console.error(error);

    if (req.files && req.files.image && req.files.image.tempFilePath) {
      fs.unlinkSync(req.files.image.tempFilePath);
    }

    res.status(500).json({
      status: "error",
      message: "An error occurred while uploading the image.",
      details: error.message,
    });
  }
};

module.exports = {
  userImage,
};

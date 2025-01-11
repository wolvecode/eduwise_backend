const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
    },
    location: {
      type: String,
      required: [true, "Job location is required"],
    },
    jobType: {
      type: String,
      default: "Not specified",
    },
    skills: {
      type: [String],
      required: [true, "Skills are required"],
    },
    link: {
      type: String,
      required: [true, "Job link is required"],
      validate: {
        validator: (v) =>
          /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+)([.\-_]?)*\.[a-z]{2,}(:[0-9]{1,5})?(\/.*)?$/.test(
            v
          ),
        message: "Invalid URL format.",
      },
    },
    price: {
      type: String
    },
    category: {
      type: String,
      enum: [
        "Machine Learning",
        "Robotics",
        "Natural Language Processing (NLP)",
        "Cognitive Computing",
        "AI in Gaming",
      ],
      required: [true, "Category is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);

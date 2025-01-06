const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    duration: { type: Number, required: true },
    teacher: { type: String, required: true },
    enrolledStudents: { type: Number, required: true },
    description: { type: String, required: true },
    objectives: { type: String, required: true },
    targetAudience: {
      type: [String],
      enum: [
        "Machine Learning",
        "Robotics",
        "Natural Language Processing (NLP)",
        "Cognitive Computing",
        "AI in Gaming",
      ],
    },
    language: {
      type: String,
      enum: ["english", "spanish", "french", "german"],
    },
    level: { type: String, enum: ["beginner", "intermediate", "advanced"] },
    price: { type: Number, required: true, min: 0 },
    certificate: { type: Boolean, default: true },
    imageUrl: {
      type: String,
      validate: {
        validator: (v) => /\.(jpg|jpeg|png|gif|webp)$/i.test(v),
        message: "Invalid image format.",
      },
    },
    contents: [
      {
        sectionNumber: { type: Number, required: true },
        sectionTitle: { type: String, required: true },
        releaseDate: { type: Date },
        lessons: [
          {
            lessonTitle: { type: String, required: true },
            videoUrl: {
              type: String,
              required: true,
              validate: {
                validator: (v) =>
                  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+)([.\-_]?)*\.[a-z]{2,}(:[0-9]{1,5})?(\/.*)?$/.test(
                    v
                  ),
                message: "Invalid URL format.",
              },
            },
            duration: { type: Number, required: true },
          },
        ],
      },
    ],
    progress: { type: Number, default: 0, min: 0, max: 100 },
    isActive: { type: Boolean, default: true },

    quizzes: [
      {
        questions: [
          {
            questionText: String,
            options: [
              {
                optionText: String,
                isCorrect: Boolean,
              },
            ],
          },
        ],
      },
    ],
  },

  { timestamps: true }
);

CourseSchema.pre("save", function (next) {
  if (this.isNew && this.contents.length > 0) {
    // Loop through each section and assign sectionNumber
    this.contents.forEach((section, index) => {
      // Assign sectionNumber only if it's not already set
      if (!section.sectionNumber) {
        section.sectionNumber = index + 1; // Assign section number based on index
      }
    });
  }
  next();
});


module.exports = mongoose.model("Course", CourseSchema);

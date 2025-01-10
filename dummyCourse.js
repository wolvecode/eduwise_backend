// const mongoose = require("mongoose");
// const Course = require("./models/CourseModel"); // Adjust the path

// // Connect to MongoDB
// mongoose
//   .connect('mongodb://localhost:27017/edwise', {
//     family: 4,
//     serverSelectionTimeoutMS: 30000, // Increase timeout if necessary
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");

//     const courses = [
//       {
//         title: "Introduction to Machine Learning",
//         duration: 45,
//         teacher: "Dr. Alan Turing",
//         enrolledStudents: 120,
//         description: "Learn the basics of machine learning algorithms.",
//         objectives: "Understand supervised and unsupervised learning.",
//         targetAudience: ["Machine Learning"],
//         language: "english",
//         level: "beginner",
//         price: 100,
//         certificate: true,
//         image: "",
//       },
//       {
//         title: "Robotics Fundamentals",
//         duration: 50,
//         teacher: "Isaac Asimov",
//         enrolledStudents: 90,
//         description: "Dive into the fundamentals of robotics and automation.",
//         objectives: "Learn kinematics, sensors, and robotic systems.",
//         targetAudience: ["Robotics"],
//         language: "english",
//         level: "beginner",
//         price: 120,
//         certificate: true,
//         image: "https://robotics_fundamentals.jpg",
//       },
//       {
//         title: "Natural Language Processing Basics",
//         duration: 40,
//         teacher: "Noam Chomsky",
//         enrolledStudents: 150,
//         description: "Explore the basics of NLP and text processing.",
//         objectives: "Understand tokenization, parsing, and sentiment analysis.",
//         targetAudience: ["Natural Language Processing (NLP)"],
//         language: "english",
//         level: "beginner",
//         price: 90,
//         certificate: true,
//         image: "https://nlp_basics.jpg",
//       },
//       {
//         title: "Advanced AI in Gaming",
//         duration: 55,
//         teacher: "Sid Meier",
//         enrolledStudents: 110,
//         description: "Learn how AI is revolutionizing the gaming industry.",
//         objectives: "Understand AI-driven game design and decision-making.",
//         targetAudience: ["AI in Gaming"],
//         language: "english",
//         level: "advanced",
//         price: 150,
//         certificate: true,
//         image: "https://ai_gaming.jpg",
//       },
//       {
//         title: "Cognitive Computing: The Future",
//         duration: 50,
//         teacher: "Marvin Minsky",
//         enrolledStudents: 85,
//         description: "Explore the future of cognitive computing and AI.",
//         objectives: "Understand the principles of cognitive systems.",
//         targetAudience: ["Cognitive Computing"],
//         language: "english",
//         level: "intermediate",
//         price: 130,
//         certificate: true,
//         image: "https://cognitive_computing.jpg",
//       },
//       {
//         title: "Deep Learning with Python",
//         duration: 60,
//         teacher: "Andrew Ng",
//         enrolledStudents: 140,
//         description: "Master deep learning techniques with Python.",
//         objectives: "Understand neural networks and TensorFlow basics.",
//         targetAudience: ["Machine Learning"],
//         language: "english",
//         level: "advanced",
//         price: 160,
//         certificate: true,
//         image: "https://deep_learning_python.jpg",
//       },
//       {
//         title: "Autonomous Robotics",
//         duration: 55,
//         teacher: "Sophia Robotics",
//         enrolledStudents: 95,
//         description: "Learn the basics of autonomous systems in robotics.",
//         objectives: "Understand SLAM, path planning, and control systems.",
//         targetAudience: ["Robotics"],
//         language: "english",
//         level: "intermediate",
//         price: 140,
//         certificate: true,
//         image: "https://autonomous_robotics.jpg",
//       },
//       {
//         title: "Advanced NLP Techniques",
//         duration: 45,
//         teacher: "Dan Jurafsky",
//         enrolledStudents: 130,
//         description: "Dive deeper into advanced NLP methodologies.",
//         objectives: "Learn transformers, BERT, and GPT architectures.",
//         targetAudience: ["Natural Language Processing (NLP)"],
//         language: "english",
//         level: "advanced",
//         price: 200,
//         certificate: true,
//         image: "https://advanced_nlp.jpg",
//       },
//       {
//         title: "AI for Game Development",
//         duration: 50,
//         teacher: "Shigeru Miyamoto",
//         enrolledStudents: 125,
//         description: "Learn AI algorithms used in modern games.",
//         objectives:
//           "Understand decision trees, pathfinding, and game AI design.",
//         targetAudience: ["AI in Gaming"],
//         language: "english",
//         level: "intermediate",
//         price: 170,
//         certificate: true,
//         image: "https://ai_game_dev.jpg",
//       },
//       {
//         title: "Cognitive Computing Applications",
//         duration: 48,
//         teacher: "Watson IBM",
//         enrolledStudents: 100,
//         description: "Explore real-world applications of cognitive systems.",
//         objectives: "Learn healthcare, finance, and educational use cases.",
//         targetAudience: ["Cognitive Computing"],
//         language: "english",
//         level: "intermediate",
//         price: 135,
//         certificate: true,
//         image: "https://cognitive_applications.jpg",
//       },
//       {
//         title: "Machine Learning in Healthcare",
//         duration: 50,
//         teacher: "Dr. House",
//         enrolledStudents: 90,
//         description: "Discover how machine learning transforms healthcare.",
//         objectives: "Understand medical data processing and AI diagnostics.",
//         targetAudience: ["Machine Learning"],
//         language: "english",
//         level: "intermediate",
//         price: 150,
//         certificate: true,
//         image: "https://ml_healthcare.jpg",
//       },
//       {
//         title: "Building Smart Robots",
//         duration: 60,
//         teacher: "Robo Builder",
//         enrolledStudents: 80,
//         description: "Learn to design and program intelligent robots.",
//         objectives: "Understand sensors, actuators, and programming.",
//         targetAudience: ["Robotics"],
//         language: "english",
//         level: "advanced",
//         price: 180,
//         certificate: true,
//         image: "https://smart_robots.jpg",
//       },
//       {
//         title: "Sentiment Analysis with NLP",
//         duration: 40,
//         teacher: "Sentiment Guru",
//         enrolledStudents: 110,
//         description: "Master sentiment analysis for social media and reviews.",
//         objectives: "Learn text preprocessing and sentiment scoring.",
//         targetAudience: ["Natural Language Processing (NLP)"],
//         language: "english",
//         level: "intermediate",
//         price: 100,
//         certificate: true,
//         image: "https://sentiment_analysis.jpg",
//       },
//       {
//         title: "AI in Virtual Reality",
//         duration: 55,
//         teacher: "VR AI Expert",
//         enrolledStudents: 70,
//         description: "Understand AI applications in virtual environments.",
//         objectives: "Learn real-time decision-making and user interactions.",
//         targetAudience: ["AI in Gaming"],
//         language: "english",
//         level: "advanced",
//         price: 190,
//         certificate: true,
//         image: "https://ai_vr.jpg",
//       },
//       {
//         title: "Cognitive Computing Tools",
//         duration: 50,
//         teacher: "Cognitive Expert",
//         enrolledStudents: 75,
//         description: "Learn tools and frameworks for cognitive development.",
//         objectives: "Understand IBM Watson and Microsoft Cognitive Toolkit.",
//         targetAudience: ["Cognitive Computing"],
//         language: "english",
//         level: "advanced",
//         price: 160,
//         certificate: true,
//         image: "https://cognitive_tools.jpg",
//       },
//     ];

//     // Insert dummy courses
//     Course.insertMany(courses)
//       .then(() => console.log("Dummy courses added successfully"))
//       .catch((error) => console.error("Error adding courses:", error));
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });


const url = "https://api.coresignal.com/cdapi/v1/website/job/search/filter";
const data = {
  title: "(Data Scientist)",
  application_active: true,
  deleted: false,
  location: "New York",
};
const customHeaders = {
  "Content-Type": "application/json",
  Authorization: "Bearer ",
};

fetch(url, {
  method: "POST",
  headers: customHeaders,
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.info(data))
  .catch((error) => console.error(error));
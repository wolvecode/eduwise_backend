const Course = require("./models/CourseModel"); // Import the Course model

const createCourses = async () => {
  // Array to hold all courses to create
  const courses = [
    {
      title: "Machine Learning for Beginners",
      duration: 40,
      teacher: "Dr. John Doe",
      enrolledStudents: 50,
      description: "An introductory course to Machine Learning",
      objectives: "Learn the basics of ML, regression, classification, etc.",
      targetAudience: ["Machine Learning", "AI in Gaming"],
      language: "english",
      level: "beginner",
      price: 199,
      certificate: true,
      imageUrl: "https://example.com/course-image1.jpg",
      contents: [
        {
          sectionTitle: "Introduction to ML",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "What is Machine Learning?",
              videoUrl: "https://example.com/video1.mp4",
              duration: 10,
            },
            {
              lessonTitle: "History of ML",
              videoUrl: "https://example.com/video2.mp4",
              duration: 12,
            },
            {
              lessonTitle: "Types of Machine Learning",
              videoUrl: "https://example.com/video3.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Applications of ML",
              videoUrl: "https://example.com/video4.mp4",
              duration: 10,
            },
            {
              lessonTitle: "Tools for ML",
              videoUrl: "https://example.com/video5.mp4",
              duration: 8,
            },
          ],
        },
        {
          sectionTitle: "Supervised Learning",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Linear Regression",
              videoUrl: "https://example.com/video6.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Logistic Regression",
              videoUrl: "https://example.com/video7.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Decision Trees",
              videoUrl: "https://example.com/video8.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Support Vector Machines",
              videoUrl: "https://example.com/video9.mp4",
              duration: 22,
            },
            {
              lessonTitle: "KNN Algorithm",
              videoUrl: "https://example.com/video10.mp4",
              duration: 10,
            },
          ],
        },
        {
          sectionTitle: "Unsupervised Learning",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "K-Means Clustering",
              videoUrl: "https://example.com/video11.mp4",
              duration: 12,
            },
            {
              lessonTitle: "Hierarchical Clustering",
              videoUrl: "https://example.com/video12.mp4",
              duration: 15,
            },
            {
              lessonTitle: "PCA (Principal Component Analysis)",
              videoUrl: "https://example.com/video13.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Association Rules",
              videoUrl: "https://example.com/video14.mp4",
              duration: 14,
            },
            {
              lessonTitle: "Anomaly Detection",
              videoUrl: "https://example.com/video15.mp4",
              duration: 12,
            },
          ],
        },
        {
          sectionTitle: "Reinforcement Learning",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Introduction to Reinforcement Learning",
              videoUrl: "https://example.com/video16.mp4",
              duration: 10,
            },
            {
              lessonTitle: "Q-Learning",
              videoUrl: "https://example.com/video17.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Policy Gradients",
              videoUrl: "https://example.com/video18.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Deep Q-Networks",
              videoUrl: "https://example.com/video19.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Applications of RL",
              videoUrl: "https://example.com/video20.mp4",
              duration: 10,
            },
          ],
        },
        {
          sectionTitle: "ML Tools & Libraries",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Introduction to TensorFlow",
              videoUrl: "https://example.com/video21.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Introduction to PyTorch",
              videoUrl: "https://example.com/video22.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Data Preprocessing with Pandas",
              videoUrl: "https://example.com/video23.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Model Evaluation with Scikit-Learn",
              videoUrl: "https://example.com/video24.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Model Deployment",
              videoUrl: "https://example.com/video25.mp4",
              duration: 12,
            },
          ],
        },
      ],
    },
    {
      title: "Deep Learning Masterclass",
      duration: 50,
      teacher: "Dr. Jane Smith",
      enrolledStudents: 30,
      description:
        "Learn the fundamentals and advanced techniques of Deep Learning.",
      objectives: "Understand neural networks, CNNs, RNNs, and more.",
      targetAudience: ["Machine Learning", "Deep Learning"],
      language: "english",
      level: "intermediate",
      price: 249,
      certificate: true,
      imageUrl: "https://example.com/course-image2.jpg",
      contents: [
        {
          sectionTitle: "Introduction to Neural Networks",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "What is a Neural Network?",
              videoUrl: "https://example.com/video26.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Understanding Perceptrons",
              videoUrl: "https://example.com/video27.mp4",
              duration: 12,
            },
            {
              lessonTitle: "Activation Functions",
              videoUrl: "https://example.com/video28.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Gradient Descent",
              videoUrl: "https://example.com/video29.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Backpropagation",
              videoUrl: "https://example.com/video30.mp4",
              duration: 25,
            },
          ],
        },
        {
          sectionTitle: "Deep Neural Networks",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Training Deep Networks",
              videoUrl: "https://example.com/video31.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Activation Functions (Advanced)",
              videoUrl: "https://example.com/video32.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Optimization Techniques",
              videoUrl: "https://example.com/video33.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Vanishing Gradient Problem",
              videoUrl: "https://example.com/video34.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Hyperparameter Tuning",
              videoUrl: "https://example.com/video35.mp4",
              duration: 10,
            },
          ],
        },
        {
          sectionTitle: "Convolutional Neural Networks (CNNs)",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Introduction to CNNs",
              videoUrl: "https://example.com/video36.mp4",
              duration: 18,
            },
            {
              lessonTitle: "CNN Architecture",
              videoUrl: "https://example.com/video37.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Pooling Layers",
              videoUrl: "https://example.com/video38.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Backpropagation in CNNs",
              videoUrl: "https://example.com/video39.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Applications of CNNs",
              videoUrl: "https://example.com/video40.mp4",
              duration: 12,
            },
          ],
        },
        {
          sectionTitle: "Recurrent Neural Networks (RNNs)",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Introduction to RNNs",
              videoUrl: "https://example.com/video41.mp4",
              duration: 20,
            },
            {
              lessonTitle: "LSTMs and GRUs",
              videoUrl: "https://example.com/video42.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Applications of RNNs",
              videoUrl: "https://example.com/video43.mp4",
              duration: 18,
            },
            {
              lessonTitle: "RNN for Sequence Modeling",
              videoUrl: "https://example.com/video44.mp4",
              duration: 25,
            },
            {
              lessonTitle: "Attention Mechanism",
              videoUrl: "https://example.com/video45.mp4",
              duration: 15,
            },
          ],
        },
        {
          sectionTitle: "Advanced Deep Learning Techniques",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Transfer Learning",
              videoUrl: "https://example.com/video46.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Generative Adversarial Networks (GANs)",
              videoUrl: "https://example.com/video47.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Autoencoders",
              videoUrl: "https://example.com/video48.mp4",
              duration: 25,
            },
            {
              lessonTitle: "Deep Reinforcement Learning",
              videoUrl: "https://example.com/video49.mp4",
              duration: 30,
            },
            {
              lessonTitle: "Neural Style Transfer",
              videoUrl: "https://example.com/video50.mp4",
              duration: 20,
            },
          ],
        },
      ],
    },
    {
      title: "Robotics Fundamentals",
      duration: 45,
      teacher: "Prof. Albert Brown",
      enrolledStudents: 40,
      description:
        "A complete guide to robotics from the basics to advanced topics.",
      objectives: "Learn about robotic systems, sensors, actuators, etc.",
      targetAudience: ["Robotics", "AI in Gaming"],
      language: "english",
      level: "beginner",
      price: 220,
      certificate: true,
      imageUrl: "https://example.com/course-image3.jpg",
      contents: [
        {
          sectionTitle: "Introduction to Robotics",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "What is Robotics?",
              videoUrl: "https://example.com/video51.mp4",
              duration: 15,
            },
            {
              lessonTitle: "History of Robotics",
              videoUrl: "https://example.com/video52.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Applications of Robotics",
              videoUrl: "https://example.com/video53.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Types of Robots",
              videoUrl: "https://example.com/video54.mp4",
              duration: 12,
            },
            {
              lessonTitle: "Components of Robots",
              videoUrl: "https://example.com/video55.mp4",
              duration: 15,
            },
          ],
        },
        {
          sectionTitle: "Sensors and Actuators in Robotics",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Introduction to Sensors",
              videoUrl: "https://example.com/video56.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Types of Sensors",
              videoUrl: "https://example.com/video57.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Actuators in Robotics",
              videoUrl: "https://example.com/video58.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Sensor Fusion",
              videoUrl: "https://example.com/video59.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Robot Locomotion",
              videoUrl: "https://example.com/video60.mp4",
              duration: 25,
            },
          ],
        },
        {
          sectionTitle: "Robot Control Systems",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Introduction to Control Systems",
              videoUrl: "https://example.com/video61.mp4",
              duration: 20,
            },
            {
              lessonTitle: "PID Controllers",
              videoUrl: "https://example.com/video62.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Model Predictive Control",
              videoUrl: "https://example.com/video63.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Feedback Systems",
              videoUrl: "https://example.com/video64.mp4",
              duration: 25,
            },
            {
              lessonTitle: "Motion Planning",
              videoUrl: "https://example.com/video65.mp4",
              duration: 20,
            },
          ],
        },
        {
          sectionTitle: "Robotics Software",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Introduction to ROS (Robot Operating System)",
              videoUrl: "https://example.com/video66.mp4",
              duration: 25,
            },
            {
              lessonTitle: "Using Gazebo for Simulation",
              videoUrl: "https://example.com/video67.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Robot Perception",
              videoUrl: "https://example.com/video68.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Autonomous Navigation",
              videoUrl: "https://example.com/video69.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Robot Vision",
              videoUrl: "https://example.com/video70.mp4",
              duration: 15,
            },
          ],
        },
        {
          sectionTitle: "Future of Robotics",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "AI and Robotics",
              videoUrl: "https://example.com/video71.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Autonomous Robots",
              videoUrl: "https://example.com/video72.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Robotics in Industry",
              videoUrl: "https://example.com/video73.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Robots in Healthcare",
              videoUrl: "https://example.com/video74.mp4",
              duration: 25,
            },
            {
              lessonTitle: "The Future of Robotics",
              videoUrl: "https://example.com/video75.mp4",
              duration: 15,
            },
          ],
        },
      ],
    },
    {
      title: "AI in Gaming",
      duration: 48,
      teacher: "Mr. Peter Kane",
      enrolledStudents: 60,
      description: "Discover how AI is transforming the gaming industry.",
      objectives:
        "Understand AI techniques used in gaming, pathfinding, NPCs, etc.",
      targetAudience: ["AI in Gaming"],
      language: "english",
      level: "intermediate",
      price: 250,
      certificate: true,
      imageUrl: "https://example.com/course-image4.jpg",
      contents: [
        {
          sectionTitle: "Introduction to AI in Gaming",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "What is AI in Gaming?",
              videoUrl: "https://example.com/video76.mp4",
              duration: 20,
            },
            {
              lessonTitle: "History of AI in Games",
              videoUrl: "https://example.com/video77.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Types of AI in Games",
              videoUrl: "https://example.com/video78.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Applications of AI in Gaming",
              videoUrl: "https://example.com/video79.mp4",
              duration: 22,
            },
            {
              lessonTitle: "The Future of AI in Gaming",
              videoUrl: "https://example.com/video80.mp4",
              duration: 10,
            },
          ],
        },
        {
          sectionTitle: "Pathfinding in Games",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "A* Algorithm",
              videoUrl: "https://example.com/video81.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Dijkstra's Algorithm",
              videoUrl: "https://example.com/video82.mp4",
              duration: 18,
            },
            {
              lessonTitle: "NavMesh Pathfinding",
              videoUrl: "https://example.com/video83.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Dynamic Pathfinding",
              videoUrl: "https://example.com/video84.mp4",
              duration: 22,
            },
            {
              lessonTitle: "AI Pathfinding in Open World Games",
              videoUrl: "https://example.com/video85.mp4",
              duration: 18,
            },
          ],
        },
        {
          sectionTitle: "Non-Playable Characters (NPCs)",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Designing NPCs",
              videoUrl: "https://example.com/video86.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Behavior Trees for NPCs",
              videoUrl: "https://example.com/video87.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Finite State Machines",
              videoUrl: "https://example.com/video88.mp4",
              duration: 22,
            },
            {
              lessonTitle: "NPC Interaction with Players",
              videoUrl: "https://example.com/video89.mp4",
              duration: 25,
            },
            {
              lessonTitle: "AI Personality and Emotions",
              videoUrl: "https://example.com/video90.mp4",
              duration: 20,
            },
          ],
        },
        {
          sectionTitle: "Game AI Techniques",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "AI Opponents",
              videoUrl: "https://example.com/video91.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Procedural Content Generation",
              videoUrl: "https://example.com/video92.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Adaptive AI",
              videoUrl: "https://example.com/video93.mp4",
              duration: 20,
            },
            {
              lessonTitle: "AI for Strategy Games",
              videoUrl: "https://example.com/video94.mp4",
              duration: 25,
            },
            {
              lessonTitle: "Real-Time Strategy AI",
              videoUrl: "https://example.com/video95.mp4",
              duration: 18,
            },
          ],
        },
        {
          sectionTitle: "AI in Game Design",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "AI and Game Design Principles",
              videoUrl: "https://example.com/video96.mp4",
              duration: 18,
            },
            {
              lessonTitle: "AI and Level Design",
              videoUrl: "https://example.com/video97.mp4",
              duration: 20,
            },
            {
              lessonTitle: "AI for Storytelling",
              videoUrl: "https://example.com/video98.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Game Balancing with AI",
              videoUrl: "https://example.com/video99.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Testing AI in Games",
              videoUrl: "https://example.com/video100.mp4",
              duration: 18,
            },
          ],
        },
      ],
    },
    {
      title: "AI Ethics and Implications",
      duration: 40,
      teacher: "Dr. David Lee",
      enrolledStudents: 35,
      description:
        "An examination of the ethical challenges in AI development.",
      objectives: "Understand the social and ethical implications of AI.",
      targetAudience: ["Cognitive Computing", "AI Ethics"],
      language: "english",
      level: "advanced",
      price: 275,
      certificate: true,
      imageUrl: "https://example.com/course-image5.jpg",
      contents: [
        {
          sectionTitle: "Introduction to AI Ethics",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "What is AI Ethics?",
              videoUrl: "https://example.com/video101.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Historical Perspective of AI Ethics",
              videoUrl: "https://example.com/video102.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Ethical Dilemmas in AI",
              videoUrl: "https://example.com/video103.mp4",
              duration: 20,
            },
            {
              lessonTitle: "AI in Society",
              videoUrl: "https://example.com/video104.mp4",
              duration: 25,
            },
            {
              lessonTitle: "Policy and Regulation",
              videoUrl: "https://example.com/video105.mp4",
              duration: 20,
            },
          ],
        },
        {
          sectionTitle: "Bias and Fairness in AI",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Bias in Machine Learning",
              videoUrl: "https://example.com/video106.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Measuring Bias",
              videoUrl: "https://example.com/video107.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Fairness in AI",
              videoUrl: "https://example.com/video108.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Addressing Bias",
              videoUrl: "https://example.com/video109.mp4",
              duration: 15,
            },
            {
              lessonTitle: "Ethical AI Development",
              videoUrl: "https://example.com/video110.mp4",
              duration: 25,
            },
          ],
        },
        {
          sectionTitle: "AI in Surveillance and Privacy",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "AI and Privacy Concerns",
              videoUrl: "https://example.com/video111.mp4",
              duration: 20,
            },
            {
              lessonTitle: "AI in Surveillance Systems",
              videoUrl: "https://example.com/video112.mp4",
              duration: 25,
            },
            {
              lessonTitle: "Ethical Implications of Surveillance",
              videoUrl: "https://example.com/video113.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Data Protection",
              videoUrl: "https://example.com/video114.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Ethical Design of Surveillance AI",
              videoUrl: "https://example.com/video115.mp4",
              duration: 15,
            },
          ],
        },
        {
          sectionTitle: "Autonomous Systems",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "Ethical Dilemmas of Autonomous Vehicles",
              videoUrl: "https://example.com/video116.mp4",
              duration: 20,
            },
            {
              lessonTitle: "Ethical Concerns of AI in Warfare",
              videoUrl: "https://example.com/video117.mp4",
              duration: 25,
            },
            {
              lessonTitle: "AI and the Future of Jobs",
              videoUrl: "https://example.com/video118.mp4",
              duration: 22,
            },
            {
              lessonTitle: "Accountability in Autonomous Systems",
              videoUrl: "https://example.com/video119.mp4",
              duration: 18,
            },
            {
              lessonTitle: "The Trolley Problem and AI",
              videoUrl: "https://example.com/video120.mp4",
              duration: 15,
            },
          ],
        },
        {
          sectionTitle: "AI Governance and Future Impacts",
          releaseDate: new Date(),
          lessons: [
            {
              lessonTitle: "AI Governance Models",
              videoUrl: "https://example.com/video121.mp4",
              duration: 18,
            },
            {
              lessonTitle: "Global AI Policies",
              videoUrl: "https://example.com/video122.mp4",
              duration: 22,
            },
            {
              lessonTitle: "AI Regulation in the Future",
              videoUrl: "https://example.com/video123.mp4",
              duration: 25,
            },
            {
              lessonTitle: "AI and Human Rights",
              videoUrl: "https://example.com/video124.mp4",
              duration: 20,
            },
            {
              lessonTitle: "The Future of AI Ethics",
              videoUrl: "https://example.com/video125.mp4",
              duration: 15,
            },
          ],
        },
      ],
    },
  ];

  // Loop through all courses and save to database
  for (const course of courses) {
    await Course.create(course);
  }
  console.log("Courses created successfully!");
};

createCourses();

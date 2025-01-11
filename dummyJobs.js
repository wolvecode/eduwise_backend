


const mongoose = require("mongoose");
const Course = require("./models/JobModel");

mongoose
  .connect('mongodb+srv://street-easy:1867ms00226@cluster0.msgcuxv.mongodb.net/edwise-faruq?retryWrites=true&w=majority&appName=Cluster0', {
    family: 4,
    serverSelectionTimeoutMS: 30000, 
  })
  .then(() => {
    console.log("Connected to MongoDB");

    const courses = [
      {
        title: "Senior Machine Learning Engineer",
        location: "New York, NY 10017",
        jobType: "Hybrid",
        skills: ["unix", "R", "python"],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=8637b9991a57e16d",
        category: "Machine Learning",
        price: "$136,800 - $205,000 a year",
      },

      {
        title: "Machine Learning Scientist",
        location: "San Mateo, CA 94403",
        jobType: "Hybrid",
        skills: ["pyTorch", "Machine Learning", "python"],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=fc5f88a5c36385cb",
        category: "Machine Learning",
        price: "",
      },

      {
        title: "Staff Machine Learning Engineer",
        location: "United States",
        jobType: "Remote",
        skills: [
          "Statitics",
          "Natural language processing",
          "Machine Learning",
        ],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=6ccf9c15f7771c1d",
        category: "Machine Learning",
        price: "$153,759 - $225,514 a year",
      },

      {
        title: "Machine Learning Research Scientist, AI for Science",
        location: "Seattle, WA",
        jobType: "",
        skills: [
          "Machine Learning",
          "Computer Science",
          "Communication Skills",
        ],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=7bc259dafc4278f2",
        category: "Machine Learning",
        price: "$212,800 - $389,500 a year",
      },

      {
        title:
          "Machine Learning Engineer, Robotic Storage Technologies - Simulation & Machine Learning",
        location: "8 Technology Dr, Westborough, MA 01581",
        jobType: "",
        skills: ["SoftWare development", "SDLC", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=816987069a4176f1",
        category: "Machine Learning",
        price: "",
      },

      {
        title:
          "ASIC Design Verification Engineer, Machine Learning, Early Career",
        location: "Madison, WI",
        jobType: "",
        skills: ["System Design", "SysytemVerilog", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=9a537a1ec7f06a89",
        category: "Machine Learning",
        price: "",
      },

      {
        title: "Staff Machine Learning Engineer, Runtime & Optimization",
        location: "Mountain View, CA",
        jobType: "Hybrid",
        skills: ["pyTorch", "Machine Learning", "python"],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=25b9e9995b92f00e",
        category: "Machine Learning",
        price: "$226,000 - $286,000 a year",
      },
      {
        title: "Director of Engineering, Machine Learning",
        location: "Mountain View, CA",
        jobType: "Hybrid",
        skills: ["Research", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=fddcfdf9d1d56f86",
        category: "Machine Learning",
        price: "$323,000 - $410,000 a year",
      },

      {
        title:
          "Machine Learning Scientist Graduate (TikTok Recommendation - Large Recommender Models) - 2025 Start (MS)",
        location: "San Jose, CA",
        jobType: "",
        skills: [
          "Natural processing language",
          "Deep Learning",
          "Machine Learning",
        ],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=4771f869e1ccd720",
        category: "Machine Learning",
        price: "$116,000 - $250,000 a year",
      },

      {
        title: "Sr Machine Learning Enginee",
        location: "801 North 34th Street, Seattle, WA 98103",
        jobType: "",
        skills: ["SoftWare development", "Python", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=31a3b65f62180624",
        category: "Machine Learning",
        price: "$142,700 - $257,600 a year",
      },
      {
        title: "Technical Program Manager, Machine Learning",
        location: "Mountain View, CA",
        jobType: "",
        skills: [" Program management", "Agile", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&start=10&vjk=9a385a4fdb8bdcd2",
        category: "Machine Learning",
        price: "$183,000 - $232,000 a year",
      },

      {
        title: "Sr RPA (Robotics Process Automation) Developer",
        location: "Orlando, FL",
        jobType: "",
        skills: [" Vislo", "Microsoft Office", "Microsoft Excel"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=e21278c34542b63e",
        category: "Robotics",
        price: "$110,000 a year",
      },
      {
        title:
          "Machine Learning Engineer, Robotic Storage Technologies - Simulation & Machine Learning",
        location: "8 Technology Dr, Westborough, MA 01581",
        jobType: "",
        skills: ["SoftWare development", "SDLC", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=816987069a4176f1",
        category: "Robotics",
        price: "",
      },

      {
        title:
          "Learning Experience Designer, Amazon Robotics Learning Experience and Technology",
        location: "8 Technology Dr, Westborough, MA 01581",
        jobType: "",
        skills: [" Vislo", "Project Management", "Organization Skill"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=f43edbadf86f292e",
        category: "Robotics",
        price: "",
      },
      {
        title: "Amazon Robotics - UX Co-op - 2025, Amazon Robotics UX Team",
        location: "300 Riverpark Dr, North Reading, MA 01864",
        jobType: "",
        skills: ["Usability", "UX", "Research"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=d43e7883c52400e2",
        category: "Robotics",
        price: "",
      },

      {
        title: "Amazon Postdoctoral Scientist , Amazon Robotics",
        location: "300 Riverpark Dr, North Reading, MA 01864",
        jobType: "",
        skills: ["Agile", "Robotics", "Communication Skills"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=61491ef5cb4c977f",
        category: "Robotics",
        price: "",
      },
      {
        title: "First Robotics Team Sponsor - CAPS",
        location: "15020 Metcalf Avenue, Overland Park, KS 66223",
        jobType: "",
        skills: ["Robotics"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=0aa3346abd3c32d8",
        category: "Robotics",
        price: "",
      },
      {
        title: "Adjunct Robotics/Automated Systems Technology Instructor",
        location: "2900 Featherstone Road, Auburn Hills, MI 48326",
        jobType: "",
        skills: ["Teaching", "Robotics"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=bc752f190b38dac9",
        category: "Robotics",
        price: "$1,000 a week",
      },
      {
        title:
          "Amazon Robotics - Hardware Engineer Co-op - January to June 2025",
        location: "8 Technology Dr, Westborough, MA 01581",
        jobType: "",
        skills: [
          "Agile",
          "SolidWorks",
          "Organizations Skills",
          "Analysis Skills",
        ],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=52079948734a3604",
        category: "Robotics",
        price: "",
      },
      {
        title: "Engineering Technician, Tesla Bot",
        location: "Palo Alto, CA 94304",
        jobType: "",
        skills: [
          "SolidWork",
          "Project Management",
          "Project Management Software",
        ],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=a74f4022e70a06d1",
        category: "Robotics",
        price: "$24.40 - $50.40 an hour",
      },
      {
        title: "Automation/Robotics Technician",
        location: "Titusville, FL 32780",
        jobType: "",
        skills: ["Robot Programming", "Fanuc", "CNC"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=89ef6e6c4ec0ea7c",
        category: "Robotics",
        price: "",
      },
      {
        title: "Robotics Engineer",
        location: "Cupertino, CA",
        jobType: "",
        skills: ["Software Troubleshooting", "Robotics", "Debugging"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=cc973f7d61515818",
        category: "Robotics",
        price: "",
      },
      {
        title: "AI Research Scientist, Human Behavior and Carbon Neutrality",
        location: "4440 El Camino Real, Los Altos, CA 94022",
        jobType: "",
        skills: ["SQL", "Research", "Pyhton"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=38761ac46ac95605",
        category: "Robotics",
        price: "$165,760 - $248,640 a year",
      },
      {
        title: "Robotics Solutions Engineer",
        location: "Santa Clara, CA",
        jobType: "",
        skills: ["Technical Supports", "Technical Control", "Robotics"],
        link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&start=10&vjk=cee6ab672cf8889d",
        category: "Robotics",
        price: "$59,000 - $110,000 a year",
      },

      {
        title:
          "Research Scientist in Large Language Model Agent Graduate (AML)",
        location: "San Jose, CA",
        jobType: "",
        skills: ["AI", "Natural language processing", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&from=searchOnDesktopSerp&vjk=b9eedf7205ce594d",
        category: "Cognitive Computing",
        price: "$145,000 - $250,000 a year",
      },
      {
        title: "Applied Scientist, SPX AI Lab",
        location: "Seattle, WA",
        jobType: "",
        skills: ["Organization Skill", "Natural language processing", "Python"],
        link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&from=searchOnDesktopSerp&vjk=ee70b681556f795f",
        category: "Cognitive Computing",
        price: "$136,000 - $223,400 a year",
      },
      {
        title: "Systems Engineer II – Advanced Algorithms",
        location: "2000 East Imperial Highway, El Segundo, CA 90245",
        jobType: "",
        skills: ["AI", "Signal processing", "Algorithims"],
        link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&from=searchOnDesktopSerp&vjk=8e752b252860951f",
        category: "Cognitive Computing",
        price: "",
      },
      {
        title: "Machine Learning Engineer II",
        location: "One Microsoft Way, Redmond, WA 98052",
        jobType: "",
        skills: ["Software Development", "Scala", "Spark"],
        link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=10&vjk=56378abe8d54c1dd",
        category: "Cognitive Computing",
        price: "$98,300 - $208,800 a year",
      },
      {
        title:
          "Sr./ Pr. Software Ground Systems Engineer (TS) Space Systems (Dulles)",
        location: "Dulles, VA",
        jobType: "",
        skills: ["System Design", "System Engineering", "Python"],
        link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=10&vjk=e38928e44c4c523f",
        category: "Cognitive Computing",
        price: "$110,300 - $206,000 a year",
      },
      {
        title:
          "Applied Scientist - Optimization & Decision Sciences, Cognitive Science Team",
        location: "Seattle, WA",
        jobType: "",
        skills: ["Python", "Data Mining", "Communication Skills"],
        link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=10&vjk=96a1da492d2ef8ea",
        category: "Cognitive Computing",
        price: "$136,000 - $222,200 a year",
      },
      {
        title:
          "Principal Applied Scientist, Conversational Assistant Modeling & Learning",
        location: "Bellevue, WA",
        jobType: "",
        skills: [
          "Software Development",
          "Natural language processing",
          "Research",
        ],
        link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=10&vjk=34c60c2eaa52f20f",
        category: "Cognitive Computing",
        price: "$179,000 - $309,400 a year",
      },
      {
        title: "AI Research Scientist, Human Behavior and Carbon Neutrality",
        location: "4440 El Camino Real, Los Altos, CA 94022",
        jobType: "",
        skills: ["SQL", "Research", "Pyhton"],
        link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&from=searchOnDesktopSerp&vjk=b9eedf7205ce594d",
        category: "Cognitive Computing",
        price: "$145,000 - $250,000 a year",
      },

      {
        title: "Senior Applied Scientist, Alexa",
        location: "Bellevue, WA",
        jobType: "",
        skills: ["SoftWare development", "Python", "Research"],
        link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=20&vjk=66a0f9019bab4d85",
        category: "Cognitive Computing",
        price: "$150,400 - $260,000 a year",
      },

      {
        title: "Sr. Staff Software Development Engineer - AI, C++, Inference",
        location: "2100 Logic Drive, San Jose, CA 95124",
        jobType: "",
        skills: ["SoftWare development", "Linux", "Windows"],
        link: "https://www.indeed.com/jobs?q=AI+in+gaming&l=United+States&from=searchOnDesktopSerp&vjk=38e71412b8ce0176",
        category: "AI in Gaming",
        price: "",
      },
      {
        title:
          "Senior Manager, Product Manager - Tech, Amazon Games Generative AI",
        location: "Irvine, CA",
        jobType: "",
        skills: [
          "Product Management",
          "Machine Learning",
          "Communication skills",
        ],
        link: "https://www.indeed.com/jobs?q=AI+in+gaming&l=United+States&from=searchOnDesktopSerp&vjk=6a58ac7a7604db41",
        category: "AI in Gaming",
        price: "$178,100 - $307,900 a year",
      },
      {
        title: "Senior Compiler Engineer - AI",
        location: "11431 Willows Road NE, Redmond, WA 98052",
        jobType: "",
        skills: [
          "Natural processing language",
          "Deep Learning",
          "Machine Learning",
        ],
        link: "https://www.indeed.com/jobs?q=AI+in+gaming&l=United+States&from=searchOnDesktopSerp&vjk=41a61cab46f14c9e",
        category: "AI in Gaming",
        price: "$148,000 - $419,750 a year",
      },
      {
        title: "Design Director",
        location: "15800 SE Eastgate Way, Bellevue, WA 98008",
        jobType: "",
        skills: ["System Design", "Pythn"],
        link: "https://www.indeed.com/jobs?q=ai+gaming&l=United+States&start=10&vjk=6809e20ea82a73fc",
        category: "AI in Gaming",
        price: "$197,000 - $305,600 a year",
      },

      {
        title: "Associate Technical Director, AI - Unannounced Game",
        location: "Irvine, CA 92618",
        jobType: "Hybrid",
        skills: ["c++", "ios", "Analysis skills"],
        link: "https://www.indeed.com/jobs?q=ai+gaming&l=United+States&start=10&vjk=f104667afe8347cf",
        category: "AI in Gaming",
        price: "$155,500 - $287,876 a year",
      },
      {
        title: "Senior Software Engineer, Amazon Games AI Research",
        location: "San Diego, CA",
        jobType: "",
        skills: ["Unity", "Tensor Flow", "Software Development"],
        link: "https://www.indeed.com/jobs?q=ai+gaming&l=United+States&start=10&vjk=075871a5b0581e89",
        category: "AI in Gaming",
        price: "$151,300 - $261,500 a year",
      },
      {
        title: "Director, Cloud and Digital Platform Security",
        location:
          "Louisville,Kentucky,40222,United States, Louisville, KY 40222",
        jobType: "",
        skills: ["Vulnerability assessment", "SDLC", "Leadership"],
        link: "https://www.indeed.com/jobs?q=Ai+Gaming&l=Kentucky&from=sug&vjk=a9cb87faee723592",
        category: "AI in Gaming",
        price: "",
      },

      {
        title: "Natural Language Processing Research Scientist, Research",
        location: "Mountain View, CA",
        jobType: "",
        skills: [
          "Research",
          "R",
          "Python",
          "Natural Language Processing",
          "Natural Language Processing",
        ],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&from=searchOnDesktopSerp&vjk=9162dac3eec14b3e",
        category: "Natural Language Processing (NLP)",
        price: "",
      },
      {
        title: "AI Research Scientist, Human Behavior and Carbon Neutrality",
        location: "4440 El Camino Real, Los Altos, CA 94022",
        jobType: "",
        skills: ["Research", "SQL", "Python", "Natural Language Processing"],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&from=searchOnDesktopSerp&vjk=38761ac46ac95605",
        category: "Natural Language Processing (NLP)",
        price: "$165,760 - $248,640 a year",
      },
      {
        title: "Applied Scientist , FinTech - Finance Intelligence",
        location: "Bellevue, WA",
        jobType: "",
        skills: [
          "Natural Language Processing",
          "",
          "Regression Analysis",
          "Natural Language Processing",
        ],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=ec9228ffa1e94571",
        category: "Natural Language Processing (NLP)",
        price: "$136,000 - $223,400 a year",
      },
      {
        title: "Machine Learning Manager",
        location: "Seattle, WA 98101",
        jobType: "",
        skills: ["Natural Language Processing", "Devops", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=46c323e44f8f3a60",
        category: "Natural Language Processing (NLP)",
        price: "$180,000 - $250,000 a year",
      },
      {
        title: "Principal Engineer- Machine Learning",
        location: "San Francisco, CA",
        jobType: "",
        skills: ["Natural Language Processing", "Python", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=8913008a9b080974",
        category: "Natural Language Processing (NLP)",
        price: "$146,900 - $237,600 a year",
      },
      {
        title: "Fundamental Multimodal Research Scientist - Generative AI",
        location: "1 Hacker Way, Menlo Park, CA 94025",
        jobType: "",
        skills: [
          "Natural Language Processing",
          "Statitics",
          "Machine Learning",
        ],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=379bda992b17db12",
        category: "Natural Language Processing (NLP)",
        price: "$177,000 - $251,000 a year",
      },
      {
        title: "Language Model Engineer",
        location: "Remote",
        jobType: "Remote",
        skills: ["Natural Language Processing", "Python", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=794a0cbf215196b2",
        category: "Natural Language Processing (NLP)",
        price: "$140,000 - $170,000 a year",
      },
      {
        title: "Sr. SDE, Machine Learning",
        location: "Seattle, WA",
        jobType: "",
        skills: ["Natural Language Processing", "Python", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=20&vjk=968dab97bdf57780",
        category: "Natural Language Processing (NLP)",
        price: "$151,300 - $261,500 a year",
      },
      {
        title: "AI Innovation Strategy",
        location: "New York, NY 10172",
        jobType: "",
        skills: ["Natural Language Processing", "Python", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=20&vjk=c49fa799b01c167c",
        category: "Natural Language Processing (NLP)",
        price: "$202,000 - $237,000 a year",
      },
      {
        title: "Algorithm Engineer, Deep Learning",
        location: "Milpitas, CA",
        jobType: "",
        skills: ["Natural Language Processing", "Python", "Machine Learning"],
        link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=20&vjk=394b41a1218051ff",
        category: "Natural Language Processing (NLP)",
        price: "$130,400 - $221,700 a year",
      },
    ];

    Course.insertMany(courses)
      .then(() => console.log("Dummy courses added successfully"))
      .catch((error) => console.error("Error adding courses:", error));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });




  
[
  {
    title: "Senior Machine Learning Engineer",
    location: "New York, NY 10017",
    jobType: "Hybrid",
    skills: ["unix", "R", "python"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=8637b9991a57e16d",
    category: "Machine Learning",
  },

  {
    title: "Machine Learning Scientist",
    location: "San Mateo, CA 94403",
    jobType: "Hybrid",
    skills: ["pyTorch", "Machine Learning", "python"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=fc5f88a5c36385cb",
    category: "Machine Learning",
  },

  {
    title: "Staff Machine Learning Engineer",
    location: "United States",
    jobType: "Remote",
    skills: ["Statitics", "Natural language processing", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=6ccf9c15f7771c1d",
    category: "Machine Learning",
  },

  {
    title: "Machine Learning Research Scientist, AI for Science",
    location: "Seattle, WA",
    jobType: "",
    skills: ["Machine Learning", "Computer Science", "Communication Skills"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=7bc259dafc4278f2",
    category: "Machine Learning",
  },

  {
    title:
      "Machine Learning Engineer, Robotic Storage Technologies - Simulation & Machine Learning",
    location: "8 Technology Dr, Westborough, MA 01581",
    jobType: "",
    skills: ["SoftWare development", "SDLC", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=816987069a4176f1",
    category: "Machine Learning",
  },

  {
    title: "ASIC Design Verification Engineer, Machine Learning, Early Career",
    location: "Madison, WI",
    jobType: "",
    skills: ["System Design", "SysytemVerilog", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=9a537a1ec7f06a89",
    category: "Machine Learning",
  },

  {
    title: "Staff Machine Learning Engineer, Runtime & Optimization",
    location: "Mountain View, CA",
    jobType: "Hybrid",
    skills: ["pyTorch", "Machine Learning", "python"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=25b9e9995b92f00e",
    category: "Machine Learning",
  },
  {
    title: "Director of Engineering, Machine Learning",
    location: "Mountain View, CA",
    jobType: "Hybrid",
    skills: ["Research", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=fddcfdf9d1d56f86",
    category: "Machine Learning",
  },

  {
    title:
      "Machine Learning Scientist Graduate (TikTok Recommendation - Large Recommender Models) - 2025 Start (MS)",
    location: "San Jose, CA",
    jobType: "",
    skills: [
      "Natural processing language",
      "Deep Learning",
      "Machine Learning",
    ],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=4771f869e1ccd720",
    category: "Machine Learning",
  },

  {
    title: "Sr Machine Learning Enginee",
    location: "801 North 34th Street, Seattle, WA 98103",
    jobType: "",
    skills: ["SoftWare development", "Python", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=31a3b65f62180624",
    category: "Machine Learning",
  },
  {
    title: "Technical Program Manager, Machine Learning",
    location: "Mountain View, CA",
    jobType: "",
    skills: [" Program management", "Agile", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&start=10&vjk=9a385a4fdb8bdcd2",
    category: "Machine Learning",
  },



  {
    title: "Sr RPA (Robotics Process Automation) Developer",
    location: "Orlando, FL",
    jobType: "",
    skills: [" Vislo", "Microsoft Office", "Microsoft Excel"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=e21278c34542b63e",
    category: "Robotics",
  },
  {
    title:
      "Machine Learning Engineer, Robotic Storage Technologies - Simulation & Machine Learning",
    location: "8 Technology Dr, Westborough, MA 01581",
    jobType: "",
    skills: ["SoftWare development", "SDLC", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=Machine+Learning&l=United+States&from=searchOnDesktopSerp&vjk=816987069a4176f1",
    category: "Robotics",
  },

  {
    title:
      "Learning Experience Designer, Amazon Robotics Learning Experience and Technology",
    location: "8 Technology Dr, Westborough, MA 01581",
    jobType: "",
    skills: [" Vislo", "Project Management", "Organization Skill"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=f43edbadf86f292e",
    category: "Robotics",
  },
  {
    title: "Amazon Robotics - UX Co-op - 2025, Amazon Robotics UX Team",
    location: "300 Riverpark Dr, North Reading, MA 01864",
    jobType: "",
    skills: ["Usability", "UX", "Research"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=d43e7883c52400e2",
    category: "Robotics",
  },

  {
    title: "Amazon Postdoctoral Scientist , Amazon Robotics",
    location: "300 Riverpark Dr, North Reading, MA 01864",
    jobType: "",
    skills: ["Agile", "Robotics", "Communication Skills"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=61491ef5cb4c977f",
    category: "Robotics",
  },
  {
    title: "First Robotics Team Sponsor - CAPS",
    location: "15020 Metcalf Avenue, Overland Park, KS 66223",
    jobType: "",
    skills: ["Robotics"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=0aa3346abd3c32d8",
    category: "Robotics",
  },
  {
    title: "Adjunct Robotics/Automated Systems Technology Instructor",
    location: "2900 Featherstone Road, Auburn Hills, MI 48326",
    jobType: "",
    skills: ["Teaching", "Robotics"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=bc752f190b38dac9",
    category: "Robotics",
  },
  {
    title: "Amazon Robotics - Hardware Engineer Co-op - January to June 2025",
    location: "8 Technology Dr, Westborough, MA 01581",
    jobType: "",
    skills: ["Agile", "SolidWorks", "Organizations Skills", "Analysis Skills"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=52079948734a3604",
    category: "Robotics",
  },
  {
    title: "Engineering Technician, Tesla Bot",
    location: "Palo Alto, CA 94304",
    jobType: "",
    skills: ["SolidWork", "Project Management", "Project Management Software"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=a74f4022e70a06d1",
    category: "Robotics",
  },
  {
    title: "Automation/Robotics Technician",
    location: "Titusville, FL 32780",
    jobType: "",
    skills: ["Robot Programming", "Fanuc", "CNC"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=89ef6e6c4ec0ea7c",
    category: "Robotics",
  },
  {
    title: "Robotics Engineer",
    location: "Cupertino, CA",
    jobType: "",
    skills: ["Software Troubleshooting", "Robotics", "Debugging"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=cc973f7d61515818",
    category: "Robotics",
  },
  {
    title: "AI Research Scientist, Human Behavior and Carbon Neutrality",
    location: "4440 El Camino Real, Los Altos, CA 94022",
    jobType: "",
    skills: ["SQL", "Research", "Pyhton"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&from=searchOnDesktopSerp&vjk=38761ac46ac95605",
    category: "Robotics",
  },
  {
    title: "Robotics Solutions Engineer",
    location: "Santa Clara, CA",
    jobType: "",
    skills: ["Technical Supports", "Technical Control", "Robotics"],
    link: "https://www.indeed.com/jobs?q=Robotics&l=United+States&start=10&vjk=cee6ab672cf8889d",
    category: "Robotics",
  },


  {
    title: "Research Scientist in Large Language Model Agent Graduate (AML)",
    location: "San Jose, CA",
    jobType: "",
    skills: ["AI", "Natural language processing", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&from=searchOnDesktopSerp&vjk=b9eedf7205ce594d",
    category: "Cognitive Computing",
  },
  {
    title: "Applied Scientist, SPX AI Lab",
    location: "Seattle, WA",
    jobType: "",
    skills: ["Organization Skill", "Natural language processing", "Python"],
    link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&from=searchOnDesktopSerp&vjk=ee70b681556f795f",
    category: "Cognitive Computing",
  },
  {
    title: "Systems Engineer II – Advanced Algorithms",
    location: "2000 East Imperial Highway, El Segundo, CA 90245",
    jobType: "",
    skills: ["AI", "Signal processing", "Algorithims"],
    link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&from=searchOnDesktopSerp&vjk=8e752b252860951f",
    category: "Cognitive Computing",
  },
  {
    title: "Machine Learning Engineer II",
    location: "One Microsoft Way, Redmond, WA 98052",
    jobType: "",
    skills: ["Software Development", "Scala", "Spark"],
    link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=10&vjk=56378abe8d54c1dd",
    category: "Cognitive Computing",
  },
  {
    title:
      "Sr./ Pr. Software Ground Systems Engineer (TS) Space Systems (Dulles)",
    location: "Dulles, VA",
    jobType: "",
    skills: ["System Design", "System Engineering", "Python"],
    link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=10&vjk=e38928e44c4c523f",
    category: "Cognitive Computing",
  },
  {
    title:
      "Applied Scientist - Optimization & Decision Sciences, Cognitive Science Team",
    location: "Seattle, WA",
    jobType: "",
    skills: ["Python", "Data Mining", "Communication Skills"],
    link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=10&vjk=96a1da492d2ef8ea",
    category: "Cognitive Computing",
  },
  {
    title:
      "Principal Applied Scientist, Conversational Assistant Modeling & Learning",
    location: "Bellevue, WA",
    jobType: "",
    skills: ["Software Development", "Natural language processing", "Research"],
    link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=10&vjk=34c60c2eaa52f20f",
    category: "Cognitive Computing",
  },
  {
    title: "AI Research Scientist, Human Behavior and Carbon Neutrality",
    location: "4440 El Camino Real, Los Altos, CA 94022",
    jobType: "",
    skills: ["SQL", "Research", "Pyhton"],
    link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&from=searchOnDesktopSerp&vjk=b9eedf7205ce594d",
    category: "Cognitive Computing",
  },
  {
    title: "Senior Applied Scientist, Alexa",
    location: "Bellevue, WA",
    jobType: "",
    skills: ["SoftWare development", "Python", "Research"],
    link: "https://www.indeed.com/jobs?q=Cognitive+Computing&l=United+States&start=20&vjk=66a0f9019bab4d85",
    category: "Cognitive Computing",
  },



  {
    title: "Sr. Staff Software Development Engineer - AI, C++, Inference",
    location: "2100 Logic Drive, San Jose, CA 95124",
    jobType: "",
    skills: ["SoftWare development", "Linux", "Windows"],
    link: "https://www.indeed.com/jobs?q=AI+in+gaming&l=United+States&from=searchOnDesktopSerp&vjk=38e71412b8ce0176",
    category: "AI in Gaming",
  },
  {
    title: "Senior Manager, Product Manager - Tech, Amazon Games Generative AI",
    location: "Irvine, CA",
    jobType: "",
    skills: ["Product Management", "Machine Learning", "Communication skills"],
    link: "https://www.indeed.com/jobs?q=AI+in+gaming&l=United+States&from=searchOnDesktopSerp&vjk=6a58ac7a7604db41",
    category: "AI in Gaming",
  },
  {
    title: "Senior Compiler Engineer - AI",
    location: "11431 Willows Road NE, Redmond, WA 98052",
    jobType: "",
    skills: [
      "Natural processing language",
      "Deep Learning",
      "Machine Learning",
    ],
    link: "https://www.indeed.com/jobs?q=AI+in+gaming&l=United+States&from=searchOnDesktopSerp&vjk=41a61cab46f14c9e",
    category: "AI in Gaming",
  },
  {
    title: "Design Director",
    location: "15800 SE Eastgate Way, Bellevue, WA 98008",
    jobType: "",
    skills: ["System Design", "Pythn"],
    link: "https://www.indeed.com/jobs?q=ai+gaming&l=United+States&start=10&vjk=6809e20ea82a73fc",
    category: "AI in Gaming",
  },

  {
    title: "Associate Technical Director, AI - Unannounced Game",
    location: "Irvine, CA 92618",
    jobType: "Hybrid",
    skills: ["c++", "ios", "Analysis skills"],
    link: "https://www.indeed.com/jobs?q=ai+gaming&l=United+States&start=10&vjk=f104667afe8347cf",
    category: "AI in Gaming",
  },
  {
    title: "Senior Software Engineer, Amazon Games AI Research",
    location: "San Diego, CA",
    jobType: "",
    skills: ["Unity", "Tensor Flow", "Software Development"],
    link: "https://www.indeed.com/jobs?q=ai+gaming&l=United+States&start=10&vjk=075871a5b0581e89",
    category: "AI in Gaming",
  },
  {
    title: "Director, Cloud and Digital Platform Security",
    location: "Louisville,Kentucky,40222,United States, Louisville, KY 40222",
    jobType: "",
    skills: ["Vulnerability assessment", "SDLC", "Leadership"],
    link: "https://www.indeed.com/jobs?q=Ai+Gaming&l=Kentucky&from=sug&vjk=a9cb87faee723592",
    category: "AI in Gaming",
  },
 


  {
    title: "Natural Language Processing Research Scientist, Research",
    location: "Mountain View, CA",
    jobType: "",
    skills: [
      "Research",
      "R",
      "Python",
      "Natural Language Processing",
      "Natural Language Processing",
    ],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&from=searchOnDesktopSerp&vjk=9162dac3eec14b3e",
    category: "Natural Language Processing (NLP)",
  },
  {
    title: "AI Research Scientist, Human Behavior and Carbon Neutrality",
    location: "4440 El Camino Real, Los Altos, CA 94022",
    jobType: "",
    skills: ["Research", "SQL", "Python", "Natural Language Processing"],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&from=searchOnDesktopSerp&vjk=38761ac46ac95605",
    category: "Natural Language Processing (NLP)",
  },
  {
    title: "Applied Scientist , FinTech - Finance Intelligence",
    location: "Bellevue, WA",
    jobType: "",
    skills: [
      "Natural Language Processing",
      "",
      "Regression Analysis",
      "Natural Language Processing",
    ],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=ec9228ffa1e94571",
    category: "Natural Language Processing (NLP)",
  },
  {
    title: "Machine Learning Manager",
    location: "Seattle, WA 98101",
    jobType: "",
    skills: ["Natural Language Processing", "Devops", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=46c323e44f8f3a60",
    category: "Natural Language Processing (NLP)",
  },
  {
    title: "Principal Engineer- Machine Learning",
    location: "San Francisco, CA",
    jobType: "",
    skills: ["Natural Language Processing", "Python", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=8913008a9b080974",
    category: "Natural Language Processing (NLP)",
  },
  {
    title: "Fundamental Multimodal Research Scientist - Generative AI",
    location: "1 Hacker Way, Menlo Park, CA 94025",
    jobType: "",
    skills: ["Natural Language Processing", "Statitics", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=379bda992b17db12",
    category: "Natural Language Processing (NLP)",
  },
  {
    title: "Language Model Engineer",
    location: "Remote",
    jobType: "Remote",
    skills: ["Natural Language Processing", "Python", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=10&vjk=794a0cbf215196b2",
    category: "Natural Language Processing (NLP)",
  },
  {
    title: "Sr. SDE, Machine Learning",
    location: "Seattle, WA",
    jobType: "",
    skills: ["Natural Language Processing", "Python", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=20&vjk=968dab97bdf57780",
    category: "Natural Language Processing (NLP)",
  },
  {
    title: "AI Innovation Strategy",
    location: "New York, NY 10172",
    jobType: "",
    skills: ["Natural Language Processing", "Python", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=20&vjk=c49fa799b01c167c",
    category: "Natural Language Processing (NLP)",
  },
  {
    title: "Algorithm Engineer, Deep Learning",
    location: "Milpitas, CA",
    jobType: "",
    skills: ["Natural Language Processing", "Python", "Machine Learning"],
    link: "https://www.indeed.com/jobs?q=NLP&l=United+States&start=20&vjk=394b41a1218051ff",
    category: "Natural Language Processing (NLP)",
  },
];
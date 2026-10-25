export const profile = {
  name: "Piyush Kotkar",
  title: "AI / ML Engineer",
  message:
    "Building intelligent systems with Artificial Intelligence, Machine Learning, and Computer Vision.",
  email: "piyushkotkar780@gmail.com",
  github: "https://github.com/piyush715",
  linkedin: "https://www.linkedin.com/in/piyush-kotkar/",
  resume:
    "https://drive.google.com/file/d/13J7-tL_ldLVR7Mw_b25VHzN0PzvmTwX2/view?usp=sharing",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  statement:
    "AI/ML student and software developer focused on building practical intelligent systems.",
  paragraphs: [
    "I’m a B.Tech Artificial Intelligence & Machine Learning student with hands-on experience across AI, machine learning, computer vision, software development, and data technologies.",
    "I enjoy turning ideas into working products — from intelligent computer vision systems to AI-powered applications and real-world engineering projects.",
    "Currently, I’m expanding my skills across AI/ML, software engineering, cloud technologies, and data engineering.",
  ],
};

export const skills: Record<string, string[]> = {
  Programming: ["Python", "Java", "C++"],
  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Scikit-learn",
    "OpenCV",
  ],
  "Data & Libraries": ["NumPy", "Pandas", "Matplotlib"],
  Development: ["Flask", "ReactJS", "Angular"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Power BI",
    "Tableau",
    "Azure AI",
    "Google Cloud",
    "Microsoft Fabric",
  ],
};

export const projects = [
  {
    title: "AdaptiveEdge-XAI",
    category: "Research / Final Year Project",
    description:
      "A Resource-Aware Explainable Edge Intelligence Framework for Predictive Maintenance in Industrial IoT.",
  },
  {
    title: "Performance Evaluation of YOLOv8 for Real-Time Pedestrian Tracking and Counting",
    category: "Computer Vision / Deep Learning",
    description:
      "An evaluation of YOLOv8 for real-time pedestrian detection, tracking, and counting using computer vision and deep learning.",
  },
  {
    title: "Smart Posture Suggestion System",
    category: "AI / Computer Vision",
    description:
      "An intelligent posture analysis system designed to detect posture patterns and provide suggestions for improving sitting posture.",
  },
  {
    title: "Maze Solving Robot",
    category: "Robotics / Embedded Systems",
    description:
      "An autonomous maze-solving robot using ESP32, IR sensors and the Flood Fill algorithm for intelligent maze navigation.",
  },
];

export const experience = [
  {
    date: "2026",
    role: "Software Intern",
    company: "Triovative Technologies",
    description:
      "Worked on software engineering and AI infrastructure workflows involving AI agents, LLM-based systems, cloud infrastructure, Terraform, WorkOS, and EC2.",
    tech: ["AI Agents", "LLM", "Terraform", "AWS"],
  },
  {
    date: "2026",
    role: "AI/ML Intern",
    company: "Ethara.ai",
    description:
      "Contributed to AI/ML-focused development and practical engineering workflows while working on real-world technology projects.",
    tech: ["AI / ML", "Python", "Software"],
  },
];

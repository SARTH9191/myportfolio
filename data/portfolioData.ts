export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  architectureImage?: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Certificate {
  title: string;
  issuer: string;
  filePath: string;
  isPatent?: boolean;
  type: 'patent' | 'certificate' | 'academic';
}

export interface AchievementPhoto {
  title: string;
  filePath: string;
}

export const portfolioData = {
  personal: {
    fullName: "Sarthak Pawar",
    logoInitials: "SP",
    tagline: "Building AI-powered solutions that create real-world impact.",
    designations: [
      "Computer Science Engineering Student",
      "AI & Full-Stack Developer",
      "Public Relations Officer",
      "Hackathon Winner"
    ],
    github: "https://github.com/SARTH9191",
    linkedin: "https://www.linkedin.com/in/sarthak-pawar-ba4a3b33b/",
    email: "sarthp9191@gmail.com",
    phone: "+91 8080554194",
    location: "Pune, Maharashtra, India",
    resumeUrl: "/Sarthak_Pawar_resume.pdf",
    introduction: `I am Sarthak Pawar, a Computer Science Engineering student, AI developer, and emerging technology leader passionate about building impactful digital solutions. My experience spans full-stack development, artificial intelligence, public relations, research, and hackathon innovation. I have led teams, developed AI-powered applications, published research, and secured patents while maintaining strong academic performance. With expertise in modern web technologies, machine learning, and agentic AI systems, I focus on solving real-world challenges through scalable software. I continuously explore cutting-edge technologies to create products that combine innovation, usability, and measurable impact. Let's connect and build something meaningful together.`,
    aboutMe: `I am a Computer Science Engineering student at Vishwakarma Institute of Technology, Pune, with a strong academic record and a passion for technology-driven problem solving. My work combines AI, full-stack development, system design, and product thinking to create innovative solutions for education, agriculture, healthcare, and productivity. Beyond technical development, I have held leadership and public relations roles where I coordinated events, managed outreach initiatives, and worked closely with diverse teams. My experience includes hackathon-winning projects, research publications, patent filings, and the development of intelligent multi-agent systems. I actively work with modern technologies such as Next.js, FastAPI, LangChain, LangGraph, SQL, and cloud-based AI tools. What differentiates me is my ability to bridge technology, leadership, and communication to transform ideas into impactful real-world solutions.`,
    profilePhoto: "/profile/profile_photo.jpeg",
    mission: "To leverage AI and software engineering to solve meaningful societal challenges through scalable technology.",
    vision: "To become a technology leader building innovative AI systems that improve education, healthcare, and agriculture globally."
  },
  experience: [
    {
  role: "Publicity & Outreach Head",
  company: "Speaker's Club",
  duration: "Aug 2024 - aug 2025",
  description: [
    "Directed publicity campaigns and outreach initiatives, increasing event visibility and community engagement.",
    "Built and maintained partnerships with student organizations, external speakers, and industry professionals.",
    "Led social media promotions, marketing strategies, and audience acquisition efforts for club events."
  ]
 },
    {
      role: "Public Relations Officer",
      company: "Speaker's Club",
      duration: "Aug 2025 - may 2026",
      description: [
        "Led public relations and outreach strategies, boosting club participation by 40%.",
        "Managed communications, speaker invitations, and media representation for flagship club activities.",
        "Facilitated public speaking workshops and curated marketing collateral."
      ]
    },
    {
      role: "Publicity & Outreach Secretary",
      company: "CSA (Computer Science Student Association)",
      duration: "Jun 2025 - may 2026",
      description: [
        "Spearheaded publicity campaigns for tech events, workshops, and hackathons.",
        "Collaborated with design and social media teams to drive engagement across digital handles.",
        "Established student-industry outreach channels, bringing in sponsorship and mentorship partnerships."
      ]
    },
    {
      role: "Group Leader — ASEP & EDI",
      company: "Academic Support & Project-Based Learning",
      duration: "Ongoing",
      description: [
        "Directed a cross-functional team in developing innovative projects addressing real-world problem statements.",
        "Coordinated project sprints, task allocation, system architecture planning, and presentations.",
        "Facilitated collaboration between engineering disciplines for entrepreneurship development initiatives."
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Vishwakarma Institute of Technology, Pune",
      duration: "2022 - 2026",
      grade: "Academic Excellence",
      details: "Focus on AI, Agentic Systems, Full-Stack Engineering, and Systems Design."
    },
    {
      degree: "Higher Secondary Certificate (XII)",
      institution: "State Board, Maharashtra",
      duration: "2020 - 2022",
      grade: "89.17%",
      details: "Specialization in Science and Mathematics."
    },
    {
      degree: "Secondary School Certificate (X)",
      institution: "State Board, Maharashtra",
      duration: "2020",
      grade: "97.20%",
      details: "Top academic performer with distinctions in all subjects."
    }
  ] as EducationItem[],
  projects: [
    {
      title: "EduTrack",
      description: "AI-Powered Academic Project Management System helping students and advisors streamline evaluations, track milestones, and co-author research efficiently.",
      longDescription: "EduTrack is an intelligent academic dashboard designed to solve the friction of tracking student projects. It integrates AI milestones, automated evaluation forms, Gantt-style progress tracking, and collaboration panels. Features a robust FastAPI backend and Next.js frontend with system architecture diagrams visualized natively.",
      image: "/achievements/Edutrack_project.png",
      architectureImage: "/achievements/Edutrack_system_architecture.png",
      tags: ["Next.js 15", "TypeScript", "FastAPI", "SQL", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/SARTH9191"
    },
    {
      title: "Smart Farming",
      description: "Multi-Agent AI System designed to automate crop monitoring, predict crop disease, analyze soil metrics, and optimize resource delivery via autonomous agents.",
      longDescription: "This project leverages LangGraph and LangChain to deploy multiple specialized AI agents. One agent parses weather APIs, another analyzes satellite/drone images for crop stress, and a coordinator agent generates localized agricultural action plans. Highly scalable architecture tailored for modern precision agriculture.",
      image: "/certificates/AI_IN-Agricuiture_Patent.jpeg", // Using patent image for visual representation
      tags: ["Python", "LangChain", "LangGraph", "FastAPI", "PostgreSQL", "Generative AI"],
      github: "https://github.com/SARTH9191"
    },
    {
      title: "Caretaker",
      description: "Comprehensive Healthcare Assistance Platform providing real-time patient monitoring, medication reminders, and AI-enabled diagnostics support.",
      longDescription: "Caretaker bridges the gap between doctors and home-bound patients. It features a modern, accessible interface with real-time web sockets for monitoring vital signs, an AI-powered diagnostic helper that summarizes symptoms, and automated notification integrations via SMS and email.",
      image: "/achievements/caretaker.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "AI Assistant"],
      github: "https://github.com/SARTH9191"
    }
  ] as Project[],
  skills: [
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "LangChain", level: 90 },
        { name: "LangGraph", level: 88 },
        { name: "Prompt Engineering", level: 92 },
        { name: "Generative AI", level: 90 },
        { name: "Agentic AI", level: 88 }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "Next.js", level: 70 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "FastAPI", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "SQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      category: "Programming",
      skills: [
        { name: "C++", level: 92 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      category: "Leadership & Communication",
      skills: [
        { name: "Public Relations", level: 95 },
        { name: "Team Leadership", level: 92 },
        { name: "Public Speaking", level: 95 }
      ]
    }
  ] as SkillCategory[],
  counters: [
    { value: 2, label: "Years Experience" },
    { value: 15, label: "Certifications" },
    { value: 15, label: "Projects Developed" },
    { value: 8, label: "Awards & Honors" }
  ],
  certificates: [
    {
      title: "AI in Agriculture Patent Application",
      issuer: "Indian Patent Office",
      filePath: "/certificates/AI_IN-Agricuiture_Patent.jpeg",
      isPatent: true,
      type: "patent"
    },
    {
      title: "Tessaract '26 Hackathon Winner",
      issuer: "Tessaract Hackathon",
      filePath: "/certificates/Tessaract'26_Hackthon_Winner.png",
      type: "certificate"
    },
    {
      title: "Generative AI Foundations",
      issuer: "Google Cloud / DeepLearning.AI",
      filePath: "/certificates/Generative_AI.png",
      type: "certificate"
    },
    {
      title: "Responsive AI & ML Development",
      issuer: "Industry Standard",
      filePath: "/certificates/Responsive_Ai.png",
      type: "certificate"
    },
    {
      title: "Speaker's Club Public Relations Head",
      issuer: "VIT Pune Speakers Club",
      filePath: "/certificates/speaker's_Club_PR_Head.png",
      type: "certificate"
    },
    {
      title: "Speaker's Edge Championship",
      issuer: "Speakers Club Elite",
      filePath: "/certificates/Speakers_Edge.jpeg",
      type: "certificate"
    },
    {
      title: "Stock Price Prediction & Analysis",
      issuer: "Finance Tech Org",
      filePath: "/certificates/stock price pridiction certificate.jpeg",
      isPatent: true,
      type: "patent"
    },
    {
      title: "Semester 1 Academic Transcript (Year 2)",
      issuer: "VIT Pune University",
      filePath: "/certificates/Result_2year_sem1.png",
      type: "academic"
    }
  ] as Certificate[],
  achievementsPhotos: [
    {
      title: "Publicity & Outreach Secretary at CSA",
      filePath: "/achievements/CSA_Publicity&outreach_secratory.jpeg"
    },
    {
      title: "Hackathon Victory at Tessaract '26",
      filePath: "/achievements/trssarct_Hackthon_winner.jpeg"
    },
    {
      title: "PR Officer Leadership",
      filePath: "/achievements/PR_officer_speakersclub.jpeg"
    },
    {
      title: " Speaker at Speaker's Edge",
      filePath: "/achievements/speakers_edge.jpeg"
    },
    {
      title: "Speakers Club PR Head Role",
      filePath: "/achievements/Speakers_Club_PR_Head.jpeg"
    },
    {
      title: "CSA Event Management Team",
      filePath: "/achievements/CSA_event_management.jpeg"
    }
  ] as AchievementPhoto[]
};

import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mayank Tripathi",
  initials: "MT",
  location: "India",
  locationLink: "",
  about:
    "Co-founder @Nuestrou, Full Stack Developer",
  summary:
    "I am Mayank Tripathi, a dedicated and proactive engineer specializing in information technology and also freelancer, equipped with comprehensive skills in the Full-stack. Demonstrated ability to deliver high-quality results within deadlines, both independently and collaboratively. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/84989130?s=400&u=0d0725300ef5f531bdcd0a3d8bb6e88e7243db5c&v=4",
  personalWebsiteUrl: "https://dev-mayank.vercel.app/",
  contact: {
    email: "mr.mayanktripathi2001@gmail.com",
    tel: "+91 7007332109",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MAYANK-TRIPATH",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mayanktripathii/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/MayankTrip3313",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "United College of Engineering and Research",
      degree: "Bachelor's of Technology (CS/IT)",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
{
      company: "Wealthup",
      link: "/#",
      badges: ["Remote"],
      title: "Backend Developer (Freelance)",
      logo: ConsultlyLogo,
      start: "Mar-2025",
      end: "May-2025",
      description:
        "Led backend development for mutual fund transaction flows, integrated with Cybrilla APIs, optimized email/SMS notifications, implemented e-mandate support, improved reporting APIs, and ensured robust deployment and logging on AWS.",
    },
    {
      company: "OMSKILLS Pvt. Ltd.",
      link: "https://om-website-six.vercel.app",
      badges: ["Remote"],
      title: "FullStack Developer",
      logo: ConsultlyLogo,
      start: "Dec-2023",
      end: "Mar-2024",
      description:
        "Crafted and deployed a feature-rich website for Omskill using Next.js, JavaScript, MongoDB, Email.js.",
    },
    {
      company: "Aitium Inc",
      link: "/#",
      badges: ["Remote"],
      title: "Software Developer Intern",
      logo: ParabolLogo,
      start: "July-2023",
      end: "Oct-2023",
      description:
        "Crafted user interfaces for diverse devices, ensuring seamless performance and accessibility, utilizing custom React components, JSON, AJAX, and REST APIs.",
    },
    
  
    // -------------------------------------------

  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React-Native",
    "Web-Sockets",
    "Expo",
    "Node.js",
    "Express.js",
    "SQL/MYSQL",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Git",
    "AWS",
  ],

  // projects
  projects: [
    {
      title: "AI-Photo Enhancer",
      techStack: [
        "Frontend Developer",
        "TypeScript",
        "ReactJS",
        "PicWish API",
        "Tailwind",
      ],
      description:
        "Its an AI based Image Quality Enhancer in which you can upload your bad quality image and got better quality image",
      logo: ParabolLogo,
      link: {
        label: "https://ai-photo-blond.vercel.app/",
        href: "https://ai-photo-blond.vercel.app/",
      },
      },
     {
      title: "Neuro-Lingua",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "Nextjs",
        "Gemini",
        "UI Liberary",
      ],
      description:
        "Its a AI-Wrapper that can translate languages, listen to your voice, and even talk back. It’s powered by AI.",
      logo: ParabolLogo,
      link: {
        label: "https://neuro-lingua.vercel.app/",
        href: "https://neuro-lingua.vercel.app/",
      },
    },
    {
      title: "M3DIA-SAAS",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "Nextjs",
        "Cloudinary",
        "UI Liberary",
      ],
      description:
        "Its a SAAS product which helps and deals with media files (Image & Videos).",
      logo: ParabolLogo,
      link: {
        label: "https://m3dia-saas.vercel.app/",
        href: "https://m3dia-saas.vercel.app/",
      },
    },
    {
      title: "My Portfolio",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "React",
        "Node.js",
        "Framer Motion",
      ],
      description:
        "My Portfolio is a my personal website built using JavaScript, React, Node.js, and Framer Motion.",
      logo: ParabolLogo,
      link: {
        label: "https://dev-mayank.vercel.app/",
        href: "https://dev-mayank.vercel.app/",
      },
    },
    {
      title: "Writoo",
      techStack: [
        "Full Stack Development",
        "TypeScript",
        "React",
        "Hono",
        "Cloudeflare",
        "PostgreSQL",
        "Primsa",
        "Pooling",
      ],
      description:
        "Writoo is a Full stack application which lets you write and upload blogs.",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://github.com/MAYANK-TRIPATH/Writoo",
      },
    },
    {
      title: "Planner",
      techStack: [
        "Side Project",
        "JavaScript",
        "React.js",
        "Vite",
        "Tailwind CSS",
        
      ],
      description: "Its a personal project in which i planned my studying topics, contents, materials, and references.",
      logo: ConsultlyLogo,
      link: {
        label: "rpsc-planner.vercel.app",
        href: "https://rpsc-planner.vercel.app/",
      },
    },
    {
      title: "Automation workflow",
      techStack: ["Side Project", "JavaScript", "React.js", "ReactFlow"],
      description:
        "Automation workflow builder using reactflow.",
      logo: MonitoLogo,
      link: {
        label: "ai-auto.vercel.app/",
        href: "https://ai-auto.vercel.app/",
      },
    },
    {
      title: "Summary generator",
      techStack: ["Side Project", "React.js", "Vite", "CSS", "API", "Hugging-face"],
      description:
        "Its a web application which is capable to converting any big sentence/paragraph into 30 words summary.",
      logo: JarockiMeLogo,
      link: {
        label: "summary-sentence.netlify.app/",
        href: "https://summary-sentence.netlify.app/",
      },
    },
    {
      title: "AI Image generator",
      techStack: ["Side Project", "Javascript", "Node.js", "MongoDB", "React.js", "Open-ai-api"],
      description:
        "Developed a full-stack AI Image Generator using MERN stack for generating unique images based on user inputs and pre-defined styles.",
      logo: Minimal,
      link: {
        label: "AI-Image-generator",
        href: "https://github.com/MAYANK-TRIPATH/AI-Image-generator",
      },
    },
    {
      title: "Youtube Clone",
      techStack: ["Side Project", "React.js", "Tailwind CSS",  "Rapid-API",],
      description:
        "Developed a fully functional YouTube clone web application using modern front-end technologies and Rapid API.",
      logo: BarepapersLogo,
      link: {
        label: "Youtube.com",
        href: "https://g2syoutube.netlify.app/",
      },
    },
    {
      title: "Real-Estate-App",
      techStack: ["Side Project", "JavaScript", "React.js", "Data-fetching", "Tailwind CSS"],
      description: "Designed and developed a Real Estate application using ReactJS and TailwindCSS.",
      logo: YearProgressLogo,
      link: {
        label: "Rea-Estate-App",
        href: "https://realestateassign.netlify.app/",
      },
    },  
  ]
} as const;

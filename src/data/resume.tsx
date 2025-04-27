import { Icons } from "@/components/icons";

export const DATA = {
  name: "Sameer Ahmed",
  initials: "HMS",
  url: "https://hmssameer.xyz",
  location: "Tamilnadu, India",
  locationLink: "https://www.google.com/maps/place/tamilnadu",
  description:
    "I create Web Apps, Native apps and engaging user interfaces",
  summary:
    "Im a passionate developer specializing in Next.js and React, with a knack for creating seamless, scalable web applications. Whether its dynamic visuals with Three.js or building mobile solutions with React Native, I turn your ideas into reality. Lets collaborate and make something extraordinary.",
  avatarUrl: "/me.webp",
  skills: [
    "React.js",
    "Next.js",
    "React Native",
    "Javascript",
    "Typescript",
    "Python",
    "Node.js",
    "Nest.js",
    "Django",
    "Shopify",
    "Framer",
    "Tailwind CSS",
    "Cypress",
    "Lexical",
  ],
} as const;


export const SEO_DATA = {
  name: "Sameer Ahmed",
  initials: "HMS",
  url: "https://hmssameer.xyz",
  location: "Tamilnadu, India",
  locationLink: "https://www.google.com/maps/place/tamilnadu",
  description:
    "I create Web Apps, Native apps and engaging user interfaces",
  summary:
    "Im a passionate developer specializing in Next.js and React, with a knack for creating seamless, scalable web applications. Whether its dynamic visuals with Three.js or building mobile solutions with React Native, I turn your ideas into reality. Lets collaborate and make something extraordinary.",
  avatarUrl: "/me.png",
} as const;


export const COMPANIES = [

  {
    company: "Kalyani Motors",
    href: "http://kalyani-next-web-app.vercel.app/",
    badges: [],
    location: "Remote",
    title: "Senior Software Developer",
    logoUrl: "/km1.png",
    start: "Feb 2024",
    end: "Present",
    description:
      "Developed a high-performance, multilingual e-commerce platform for Kalyani Motors using Next.js with full server-side rendering (SSR) to optimize speed and SEO. Implemented internationalization (i18n) for delivering localized user experiences in multiple languages. Built a fully responsive and mobile-friendly interface with Tailwind CSS and ensured UI consistency using ShadCN components. Integrated Framer Motion to enhance user engagement with interactive animations. Engineered a secure payment gateway supporting UPI, cards, net banking, and intent-based payments, leveraging SSR for robust data security. Designed and deployed dynamic product pages with seamless payment gateway integration.",
  },
  {
    company: "Odin AI",
    href: "https://getodin.ai/",
    badges: [],
    location: "Remote",
    title: "Full Stack Developer",
    logoUrl: "/odin1.avif",
    start: "Dec 2022",
    end: "Jan 2024",
    description:
      "Built a highly customizable chatbot solution for Odin AI, enabling effortless integration into external websites via a simple script tag. Enhanced user experience by developing features for customizing chatbot behavior directly through the Odin platform. Led the design and implementation of the Knowledge Base, allowing users to upload documents and resources to enrich AI responses. Played a key role in developing the chat and Agent functionalities, including the ability for users to configure agents with predefined rules and personalities for tailored interactions. Collaborated closely with the team through pair programming, driving feature development and ensuring the delivery of a robust, user-centric application.",
  },
  {
    company: "CodeGlo",
    badges: [],
    href: "https://www.codeglo.com/",
    location: "Remote",
    title: "Junior Full Stack Developer",
    logoUrl: "/codeglo.jpg",
    start: "April 2022",
    end: "Jan 2024",
    description:
      "Spearheaded a variety of web development projects, including WordPress and Shopify customization, optimizing websites for enhanced user experiences. Worked on major initiatives in Next.js, React, and Firebase, crafting dynamic, real-time web applications for peak performance. Collaborated cross-functionally to seamlessly integrate web solutions, consistently meeting project objectives and deadlines. Ensured the highest code quality and robustness through meticulous troubleshooting, debugging, and adherence to best practices.",
  },
  {
    company: "Teleperformance",
    href: "https://www.teleperformance.com/",
    badges: [],
    location: "Santa Clara, CA",
    title: "Customer Service Executive",
    logoUrl: "/tpm.jpg",
    start: "Aug 2021",
    end: "Nov 2021",
    description:
      "Handled customer service operations for Teleperformance, assisting customers who purchased Apple products through Flipkart. Managed inquiries related to product shipping, dispatch, and delivery updates, ensuring customers were informed throughout the process. Provided post-delivery support, addressing customer concerns and ensuring satisfaction. Played a pivotal role in delivering a seamless and customer-focused experience by maintaining clear communication and efficient issue resolution. Collaborated with team members to meet service quality standards and enhance overall customer engagement.",
  },
]

export const CONTACT = {
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hmssameer55",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sameer-ahmed-466107156/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/hmssameer/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
} as const;


export const PERSONAL_PROJECTS = [
  {
    title: "Hms Dropbox",
    href: "https://hms-dropbox.vercel.app/",
    dates: "",
    active: true,
    description: "Cloud-based storage solution that allows users to upload, organize, and access files from any device, providing a secure and efficient way to manage documents and media. Experience seamless file storage and sharing in one centralized platform.",
    technologies: [
      "Next.js",
      "Typescript",
      "Firestore",
      "TailwindCSS",
      "Clerk Auth",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://hms-dropbox.vercel.app/",
        icon: <Icons.globe className="size-3.5" />,
      },
      {
        type: "Source",
        href: "https://github.com/hmssameer55/hms-dropbox",
        icon: <Icons.github className="size-3.5" />,
      },
    ],
    image: "",
    video:
      "https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4",
  },
  {
    title: "Dev overflow",
    href: "https://stack-overflow-hmssameer55s-projects.vercel.app/",
    dates: "",
    active: true,
    description: "A Q&A platform that enables users to ask questions, provide answers, and engage in discussions, offering a collaborative space for sharing knowledge and solving technical challenges. Designed for efficient and insightful interactions in the developer community.",
    technologies: [
      "Next.js",
      "Typescript",
      "Mongo DB",
      "TailwindCSS",
      "Clerk Auth",
      "Shadcn UI",
      "Server Actions"
    ],
    links: [
      {
        type: "Website",
        href: "https://stack-overflow-hmssameer55s-projects.vercel.app/",
        icon: <Icons.globe className="size-3.5" />,
      },
      {
        type: "Source",
        href: "https://github.com/hmssameer55/stack-overflow",
        icon: <Icons.github className="size-3.5" />,
      },
    ],
    image: "/devoverflow.jpeg",
    video: "",
  },
  {
    title: "AI Photolab",
    href: "https://ai-photolab.vercel.app/",
    dates: "",
    active: true,
    description: "An AI-powered photo editing platform designed to help you unleash your creativity. Effortlessly restore images, apply generative fills, remove or recolor objects, and transform backgrounds with advanced tools. Whether enhancing memories or creating something entirely new, enjoy seamless editing for stunning results.",
    technologies: [
      "Next.js",
      "Cloudinary",
      "Typescript",
      "Mongo DB",
      "TailwindCSS",
      "Shadcn UI",
      "Clerk Auth",
    ],
    links: [
      {
        type: "Website",
        href: "https://ai-photolab.vercel.app/",
        icon: <Icons.globe className="size-3.5" />,
      },
      {
        type: "Source",
        href: "https://github.com/dillionverma/llm.report",
        icon: <Icons.github className="size-3.5" />,
      },
    ],
    image: "/ai-photolab.jpeg",
    video: "",
  },
  {
    title: "Prompt Verse",
    href: "https://prompt-verse-dun.vercel.app/",
    dates: "",
    active: true,
    description: "Prompt verse is a community-driven platform where users can easily share, edit, and manage AI prompts. With Google login, users can create, copy, and personalize prompts for cutting-edge AI models like DALL·E and GPT. Whether you're a beginner or a pro, Prompt verse simplifies prompt sharing and fosters collaboration. Explore, customize, and elevate your AI creativity today!",
    technologies: [
      "Next.js",
      "Typescript",
      "Mongo DB",
      "TailwindCSS",
      "Clerk Auth"
    ],
    links: [
      {
        type: "Website",
        href: "https://prompt-verse-dun.vercel.app/",
        icon: <Icons.globe className="size-3.5" />,
      },
      {
        type: "Source",
        href: "https://github.com/hmssameer55/prompt-verse",
        icon: <Icons.github className="size-3.5" />,
      },
    ],
    image: "/prompt-verse.jpeg",
    video:
      "",
  },
] as const;


export const PROFESSSIONAL_PROJECTS = [
  {
    title: "Kalyani Motors",
    dates: "April 2024 - Present",
    company: "Kalyani Motors",
    description:
      "I successfully led the development of kalyanimotors.com, utilizing Next.js with full SSR (Server-Side Rendering) for optimal performance and security. The project incorporated internationalization (i18n) to provide localized experiences in multiple languages. We made full use of Tailwind CSS, ensuring the website was fully responsive and mobile-friendly, while ShadCN was leveraged for reusable components, enhancing UI consistency. Framer Motion was used to implement smooth animations, creating an engaging user experience.",
    image:
      "/project-logos/km.png",
    link: 'http://kalyani-next-web-app.vercel.app',
  },
  {
    title: "Kalyani Checkout",
    dates: "July 2024 - Present",
    company: "Kalyani Motors",
    description:
      "I spearheaded the development of the Kalyani Motors payment gateway, enabling secure payments through UPI, cards, net banking (NB), and intent-based payments. Ensured complete security of sensitive payment details through Next.js' SSR, safeguarding the transaction flow and enhancing user trust. This project also included launching product pages and ensuring seamless integration of payment requests with robust security standards.",
    image:
      "/project-logos/km-new.jpg",
  },
  {
    title: "Odin AI",
    dates: "Dec 2022 - Jan 2024",
    company: "ODIN",
    description:
      "Developed a user-friendly chatbot that can be effortlessly implemented on external websites using a simple script tag, enhancing user customization through the Odin application. Played a pivotal role in building and maintaining the Knowledge base, enabling users to upload diverse resources to enrich responses from AI. Contributed significantly to the chat and Agent features, allowing users to select agents with predefined rules and personalities for tailored responses. Engaged in extensive pair programming throughout the app's development, collaborating with fellow team members to achieve project milestones and enhance overall functionality.",
    icon: "public",
    image:
      "/project-logos/odin.avif",
    link: 'https://getodin.ai/',
  },
  {
    title: "Conscious Planet",
    dates: "April 2022 - Sep 2022",
    company: "CodeGlo",
    description:
      "As a frontend developer, I contributed to the Conscious Planet project, focusing on enhancing user experience and global reach. My responsibilities included resolving UI bugs, optimizing the website for various screen sizes, integrating interactive maps, implementing internationalization features, and leveraging SSR and SSG techniques to improve performance and SEO.",
    image:
      "/project-logos/save-soil.webp",
    link: 'https://consciousplanet.org/en/save-soil'
  },
  {
    title: "Marah Natural",
    dates: "",
    company: "CodeGlo",
    description:
      "As a frontend developer, I customized the Shopify theme to align with the brand's natural aesthetic. I optimized the website for various screen sizes, ensuring a seamless user experience across devices. Additionally, I implemented responsive design principles to adapt the layout and content to different screen resolutions.",
    image:
      "/project-logos/marah.jpg",
    win: "Best Data Hack",
    link: 'https://marahnatural.com/'
  },
  {
    title: "Veripure",
    dates: "",
    company: "CodeGlo",
    description:
      "As a frontend developer, I tailored the Veripure Shopify theme to create a professional and trustworthy online presence. I optimized the website's layout and content to highlight key product information and benefits. Additionally, I implemented responsive design techniques to provide a consistent user experience across all devices.",
    image:
      "/project-logos/veripure.png",
    link: 'https://www.veripure.com/'
  },
  {
    title: "Boka",
    dates: "",
    company: "CodeGlo",
    description:
      "In my role as a frontend developer, I customized the Shopify theme to reflect Boka's unique brand identity and messaging. I fine-tuned the CSS to improve the overall design and user interface. Furthermore, I adjusted the content and layout to enhance the shopping experience and drive conversions.",
    image:
      "/project-logos/boka.jpg",
    link: 'https://www.boka.com/'
  },


] as const;

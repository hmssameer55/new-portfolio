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
  avatarUrl: "/me.png",
  skills: [
    "React.js",
    "Next.js",
    "React Natie",
    "Javascript",
    "Typescript",
    "Python",
    "Node.js",
    "Django",
    "Shopify",
    "Framer",
    "Tailwind CSS",
    "Cypress",
    "Lexical",
  ],


  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],

  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
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
    start: "Jan 2023",
    end: "Jan 2024",
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
    start: "Jan 2023",
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
    end: "Jan 2023",
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
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/hmssameer55/hms-dropbox",
        icon: <Icons.github className="size-3" />,
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
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/hmssameer55/stack-overflow",
        icon: <Icons.github className="size-3" />,
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
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/dillionverma/llm.report",
        icon: <Icons.github className="size-3" />,
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
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/hmssameer55/prompt-verse",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/prompt-verse.jpeg",
    video:
      "",
  },
] as const;


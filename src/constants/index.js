import { HC, iphonelogo, logo, memos, meta, playground, shopify, starbucks, tesla, tov } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    mysql,
    nestjs,
    nextjs,
    nodejs,
    portfolio,
    pricewise,
    python,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    vite
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "OOP"
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nestjs,
        name: "Nest.js",
        type: "Backend"
    },
];

export const experiences = [
    {
        title: "Mobile Developer",
        company_name: "Playground Co.ltd",
        icon: playground,
        iconBg: "#accbe1",
        date: "Jun 2023 - Dec 2023",
        points: [
            "Completed a 6-month internship",
            "Fullstack support with many projects for the team including websites and mobile apps",
            "Developing and maintaining web, mobile applications using React.js and other related technologies.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Technology description: Typescript, Sequelize Migration, Nestjs, MySQL, Ant Design, Vite,...",
        ],
    },
    {
        title: "System Admin",
        company_name: "Hung Cuong Distribution and Service Co.,ltd",
        icon: HC,
        iconBg: "#fbc3bc",
        date: "Mar 2024 - Present",
        points: [
            "Operate NITS web QR code system and statistical analysis.",
            "Technology description: Pivot table, Python",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: iphonelogo,
        theme: 'btn-back-pink',
        name: 'Responsive Iphone-15 Review Website',
        description: 'This project aims to learn new frameworks like tailwind css, animation gsap and threejs to create a beautiful FE website.',
        link: 'https://iphone15-pro-review.netlify.app/',
    },
    {
        iconUrl: tov,
        theme: 'btn-back-red',
        name: 'Chatbot-Vietnamese Cuisine',
        description: 'This project aim to create a chatbot web that integrate with Natural Language Processing and Knowledge Graph to help user can find and understand more about Vietnamese cuisine.',
        link: 'https://github.com/ThanhOwO/Thesis-KG',
    },
    {
        iconUrl: vite,
        theme: 'btn-back-blue',
        name: '3D Portfolio',
        description: 'Built a 3d portfolio with reactjs + vite, threejs and gsap animation.',
        link: 'https://github.com/ThanhOwO/3D_Portfolio',
    },
    {
        iconUrl: memos,
        theme: 'btn-back-green',
        name: 'Android Social Media App',
        description: 'Android app course project. This project aim to share memories, and establish a personal brand, utilizing the power of social media as a platform for self-expression and reaching a wider audience.',
        link: 'https://github.com/ThanhOwO/MemoS',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];
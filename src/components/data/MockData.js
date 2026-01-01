import {
  faGithub,
  faLinkedinIn,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  SiDrizzle,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  agrodealerImg,
  airlineImg,
  bakkalchaImg,
  landingImg,
  flexbillImg,
  unknownImg,
} from "../../assets";

const eduData = [
  {
    title: "BTech in Computer Science and Engineering",
    school: "KIIT University, India (2017 - 2021)",
    grade: "CGPA 9.22",
    desc: "Studied Computer related subjects like Java, SQL, Operating Systems, DBMS, OOPS, Web Development, DSA, Compiler Design etc.",
  },
  {
    title: "Higher Secondary Education",
    school: "Boko Preparatory School (2014 - 2016)",
    grade: "Total 432",
    desc: "Studied in this school from grade 11th to 12th std. Studied subjects like Afan Oromo, English, Natural Science Maths, Biology, Chemistry, Physics, etc",
  },
  {
    title: "Secondary School Education",
    school: "Boko Secondary School (2012 - 2013)",
    grade: "CGPA 3.71",
    desc: "Studied in this school from grade 9th to 10th classes. Studied subjects like Afan Oromo, Amharic, English, Maths, Science, Biology, Chemistry, Physics, etc",
  },
  {
    title: "Primary School Education",
    school: "Fechatu Primary School (2004 - 2011)",
    grade: "96.6%",
    desc: "Studied in this school from grade 1st to 8th classes. Studied subjects like Afan Oromo, Amharic, English, Maths, Science, Biology, Chemistry, Physics, etc",
  },
];
const certificationData = [
  {
    title: "Web Development",
    school: "Internshala",
    grade: "Online",
    desc: "I successfully completed a web development training program on Internshala, mastering HTML, CSS, PHP, and Bootstrap, and honing my ability to create dynamic and responsive websites.",
  },
  {
    title: "Developing Front-End Apps with React",
    school: "Coursera and Youtube",
    grade: "Online",
    desc: "I successfully completed a developing front-end apps with React JS training program on Coursera and Youtube tutorials, acquiring proficiency in React JS and expanding my capabilities in web development.",
  },
  {
    title: "React Native",
    school: "Coursera and Youtube",
    grade: "Online",
    desc: "I accomplished a comprehensive training program in React Native App Development on Coursera and Youtube tutorials, where I gained expertise in creating innovative mobile applications.",
  },
  {
    title: "Spring Boot",
    school: "Learn Quest, Coursera",
    grade: "Online",
    desc: "I successfully finished the Spring Boot course offered by Learn Quest on Coursera, enhancing my proficiency in utilizing Spring Boot for API development.",
  },
  {
    title: "CCA Java Level 1 Certificate",
    school: "Cambridge Certification Authority (CCA)",
    grade: "Online",
    desc: "I obtained the CCA Java Level 1 certificate, showcasing my proficiency in Java programming, explore various problems, and validating my skills in the field.",
  },
];
const expData = [
  {
    title: "Assistant Lecturer",
    company: "Werabe University (01/2022 - 07/2022)",
    desc: "I worked as an assistant lecturer at Werabe University, where I taught courses in computer graphics and computer architecture, leveraging my expertise and contributing to the students' education.",
  },
  {
    title: "Software Developer",
    company: "Cooperative Bank of Oromia (2022 - Present)",
    desc: "Employed as a Software Developer at Cooperative Bank of Oromia, I utilize languages such as React JS, Next JS, Node, Express, Tailwind CSS, Spring Boot, etc to create dynamic solutions, contributing to the bank's digital offerings and services.",
  },
];
const achvData = [
  {
    title: "Scholarship Opportunity",
    company: "Ethiopian Minsitry of Education",
    desc: "I've earned a scholarship from the Ethiopian Ministry of Education for excelling at Haramaya University, granting me the opportunity to study Computer Science and Engineering in India.",
  },
  {
    title: "Assistan Lecturer",
    company: "Ethiopian Minsitry of Education",
    desc: "Due to my strong academic performance, the Ethiopian Ministry of Education granted me the opportunity to become an assistant lecturer at Werabe University.",
  },
];

const skillsData = [
  {
    title: "React.js",
    value: "95",
  },
  {
    title: "Next.js",
    value: "95",
  },
  {
    title: "TypeScript",
    value: "100",
  },
  {
    title: "Tailwind CSS",
    value: "100",
  },
  {
    title: "Material UI",
    value: "90",
  },
  {
    title: "Redux",
    value: "95",
  },
  {
    title: "Node.js & Express.js",
    value: "85",
  },
  {
    title: "Supabase & Prisma",
    value: "90",
  },
  {
    title: "PostgreSQL & MongoDB",
    value: "85",
  },
  {
    title: "Stripe Payments",
    value: "95",
  },
  {
    title: "ClerkAuth & NextAuth",
    value: "90",
  },
  {
    title: "Performance Optimization",
    value: "95",
  },
];

const testimonials = [
  {
    img: unknownImg,
    comment:
      "We've worked with Behar on several projects—he consistently delivers high-quality frontend work. One of the hardworking and honest developers we've had the pleasure of collaborating with. Always reliable, communicative, and thorough. Highly recommended!",
    name: "Product Manager, Nexus (USA)",
  },
  {
    img: unknownImg,
    comment:
      "Beharudin did a solid job on our React project using Tailwind. Minor hiccups were handled quickly with great communication. Professional, responsive, and focused on delivering results.",
    name: "Startup Founder (Germany)",
  },
  {
    img: unknownImg,
    comment:
      "Great to work with — sincere, hardworking, and dependable. Looking forward to more projects together.",
    name: "Founder (Ethiopia)",
  },
  {
    img: unknownImg,
    comment:
      "Beharudin delivered our SaaS platform ahead of schedule with clean, scalable code. His expertise in Next.js and Stripe integration was exactly what we needed for our MVP launch.",
    name: "Tech Lead, SaaS Startup",
  },
  {
    img: unknownImg,
    comment:
      "Outstanding work on our enterprise dashboard. The performance optimizations and real-time features exceeded our expectations. Highly professional and detail-oriented developer.",
    name: "CTO, Enterprise Client",
  },
];

const projects = [
  {
    img: airlineImg,
    title: "Airline Booking System",
    github: "#",
    link: "#",
    desc: "Complete airline booking platform with seat selection, flight tracking, and secure Stripe checkout. Built with React, TypeScript, and Tailwind CSS for seamless user experience and real-time flight management.",
  },
  {
    img: landingImg,
    title: "Landing Page",
    github: "#",
    link: "#",
    desc: "Creative and high-performance landing page featuring advanced SEO optimization, fluid animations with Framer Motion, and modern responsive design. Built for maximum user engagement.",
  },
  {
    img: agrodealerImg,
    title: "Shemachoch Cooperative Platform",
    github: "#",
    link: "#",
    desc: "Data onboarding and reporting platform for unions across Ethiopia. Handles member management, financial tracking, and automated reporting with role-based access control and multi-language support.",
  },
  {
    img: flexbillImg,
    title: "Flexbill + Stripe Integration",
    github: "#",
    link: "#",
    desc: "Subscription billing and invoicing automation platform. Features recurring payments, usage-based billing, and comprehensive financial reporting. Built with Next.js, Stripe API, and PostgreSQL.",
  },
  {
    img: bakkalchaImg,
    title: "Bakkalcha Poem App",
    github: "https://github.com/Beharudin/MyProjects/tree/bakkalcha-client",
    link: "https://bakkalcha-fadis-d50p.onrender.com/",
    desc: "Real-time analytics and reporting dashboard with data visualization, KPI tracking, and automated insights. Features responsive design, export capabilities, and performance optimization for large datasets.",
  },
];

const features = [
  {
    icon: "M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400z",
    title: "SaaS Platform Development",
    desc: "Custom multi-tenant SaaS architecture with subscription billing, role-based access control, and scalable infrastructure. Built for startups and enterprises ready to scale.",
  },
  {
    icon: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm0 64H512V416H64V96zM176 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H176zm112 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H288zm112 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400z",
    title: "Enterprise Dashboards",
    desc: "Real-time analytics dashboards with data visualization, reporting, and admin panels. Optimized for performance with clean, intuitive interfaces that drive business decisions.",
  },
  {
    icon: "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z",
    title: "Secure Payment Integration",
    desc: "Stripe payment systems, subscription billing, and secure checkout flows. Complete payment automation with invoicing, recurring subscriptions, and financial reporting.",
  },
];

const typewriterTitles = [
  "A MERN Developer",
  "A React Specialist",
  "A Next.js Expert",
  "A Full-Stack Developer",
  "A TypeScript Developer",
  "A SaaS Builder",
];

const socialData = [
  {
    href: "https://www.upwork.com/freelancers/~01ea990ce4b4995fd3",
    icon: faUpwork,
  },
  {
    href: "https://www.linkedin.com/in/beharudin-mohammed-66411921a",
    icon: faLinkedinIn,
  },
  {
    href: "https://github.com/Beharudin/",
    icon: faGithub,
  },
  {
    href: "mailto:mbahar651@gmail.com",
    icon: faEnvelope,
  },
];

const skillData = [
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiShadcnui,
  SiNodedotjs,
  SiSpringboot,
  SiSupabase,
  SiPrisma,
  SiDrizzle,
];

export {
  achvData,
  certificationData,
  eduData,
  expData,
  features,
  projects,
  skillData,
  skillsData,
  socialData,
  testimonials,
  typewriterTitles,
};

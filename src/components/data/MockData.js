import {
  faBootstrap,
  faGithub,
  faJava,
  faLinkedinIn,
  faNodeJs,
  faReact,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  agrodealerImg,
  agronomistImg,
  airlineImg,
  bakkalchaImg,
  losImg,
  questionsImg,
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
    title: "React JS",
    value: "80",
  },
  {
    title: "Next JS",
    value: "70",
  },
  {
    title: "Typescript",
    value: "90",
  },
  {
    title: "Tailwind CSS",
    value: "95",
  },
  {
    title: "Shadcn UI",
    value: "90",
  },
  {
    title: "Redux",
    value: "90",
  },
  {
    title: "Node Js, EXPRESS",
    value: "80",
  },
  {
    title: "HTML, CSS, JS, BOOTSTRAP",
    value: "90",
  },
  {
    title: "MONGODB & (SQL | MYSQL)",
    value: "85",
  },
  {
    title: "GIT & GITHUB",
    value: "85",
  },
  {
    title: "Java",
    value: "80",
  },
];

const testimonials = [
  {
    img: unknownImg,
    comment:
      "Beharudin did a solid job on our React project using Tailwind. There were a few minor hiccups along the way, but he was quick to address them and stayed communicative throughout the project. Overall I’m happy with the work and would consider working with him again.",
    name: "Omar Achoor",
  },
  {
    img: unknownImg,
    comment:
      "Beharudin's work on our project was exceptional! He went above and beyond what was expected of him and his attention to detail is outstanding. He is always a pleasure to work with, very knowledgeable and always professional.",
    name: "Omela Persaud",
  },
  {
    img: unknownImg,
    comment:
      "Beharudin is a talented developer. He helped us solve a very complex issue within a short space of time. He is also detail-oriented. We highly recommend him for opportunities. Awesome work! Looking forward to our next project.",
    name: "Collin John",
  },
  {
    img: unknownImg,
    comment:
      "As a professor and guide, I've observed Beharudin Mohammed's enthusiastic dedication and diligence. He consistently strives to meet my expectations and actively participates in various projects such as Web Development, Android App Development, and AWS/Firebase Storage under the guidance of esteemed university professors.",
    name: "N Biraja Isak",
  },
  {
    img: unknownImg,
    comment:
      "Beharudin Mohammed's curiosity and interpretation skills are assets for web development. His problem-solving and communication abilities contribute to effective teamwork, reflecting his persistent interest and curiosity that drive him to excel.",
    name: "Rajat Kumar Behera",
  },
];

const projects = [
  {
    img: agrodealerImg,
    title: "Agrodealer Dashboard",
    github: "#",
    link: "#",
    desc: "The Agrodealer Dashboard, built with Next.js, TypeScript, Tailwind CSS, and Spring Boot, allows agro-dealers to manage, update, and sell products while tracking performance through dynamic graphs and sales metrics. It provides an efficient, data-driven platform for optimizing agricultural operations.",
  },
  {
    img: agronomistImg,
    title: "Agronomist Dashboard",
    github: "#",
    link: "#",
    desc: "The Agronomist Dashboard, built with Next.js, TypeScript, Tailwind CSS, and Spring Boot, enables agronomists to analyze soil, register various agricultural data, and gain insights for improved crop management and productivity.",
  },
  {
    img: airlineImg,
    title: "Airline Management Dashboard",
    github: "#",
    link: "#",
    desc: "The Airline Management System, developed with React, TypeScript, Tailwind CSS, and Spring Boot, streamlines airline operations by managing flight schedules, passenger data, and bookings, offering real-time insights and efficient control over airline activities.",
  },
  {
    img: questionsImg,
    title: "UNIVERSITY QUESTIONS",
    github: "#",
    link: "#",
    desc: "For my final year project at the university, I created a comprehensive solution that encompassed both a mobile app and a website, utilizing Django and MySQL for backend development, while leveraging Android Studio, Java, and XML for the app's development.",
  },
  {
    img: losImg,
    title: "LOAN ORIGINATION SYSTEM",
    github: "#",
    link: "#",
    desc: "I collaborated with my team to develop a complex loan origination system, using React js, CSS, Bootstrap, Node.js, Express, and MySQL. This project highlights my effective teamwork and role in creating streamlined systems for critical processes.",
  },
  {
    img: bakkalchaImg,
    title: "BAKKALCHA FEDIS",
    github: "https://github.com/Beharudin/MyProjects/tree/bakkalcha-client",
    link: "https://bakkalcha-fadis-d50p.onrender.com/",
    desc: "I designed and developed a responsive web application named Bakkalcha Fedis for my client, employing React, Node.js, Express, MySQL, CSS, HTML, and Bootstrap. This project showcases my ability to create dynamic and user-friendly solutions that meet client needs.",
  },
];

const features = [
  {
    icon: "M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z",
    title: "Web Development",
    desc: "Have completed a MERN stack development, Next js, Redux, Typescript, TailwindCSS, and other courses. Have developed various projects and pushed them to my Github repo.",
  },
  {
    icon: "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55",
    title: "App Development",
    desc: "Have completed various app development courses like React Native and Android Studio. Have developed various projects for my company",
  },
  {
    icon: "M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z",
    title: "API Development",
    desc: "Have completed various APIs using Node js, Express js, and Spring Boot",
  },
];

const typewriterTitles = [
  "A Professional Developer",
  "A Full Stack Developer",
  "A MERN Developer",
  "A ReactJS Developer",
  "A React Native Lover",
  "A NextJs Typescript TailwindCSS Lover",
];

const socialData = [
  {
    href: "https://www.upwork.com/freelancers/~01ea990ce4b4995fd3?mp_source=share",
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

const skillData = [faReact, faNodeJs, faJava, faBootstrap];

export {
  eduData,
  expData,
  achvData,
  skillsData,
  certificationData,
  testimonials,
  projects,
  features,
  socialData,
  skillData,
  typewriterTitles,
};

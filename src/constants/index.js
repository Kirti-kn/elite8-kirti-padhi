import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const iconCommonClasses = "transition-transform transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer";

export const HERO_CONTENT = `I'm a full-stack developer and machine learning enthusiast with a solid foundation in both frontend and backend development. I build scalable web applications using JavaScript, ReactJS, and Ruby on Rails, and craft responsive UIs with Tailwind CSS.
On the backend, I’ve worked with SQLite3, PostgreSQL, and MySQL, and use Python for scripting and ML model development. I’m passionate about solving real-world problems, exploring new technologies, and contributing to projects that deliver meaningful user experiences.`;

export const ABOUT_TEXT = `Hey there! I’m Kirti Padhi, a final-year B.Tech. Computer Science student at IIIT Bhubaneswar and a Software Engineer Intern at BigBinary.
My coding journey began back in class 11th, where I first discovered my love for programming through Python and MySQL. Since then, I’ve been constantly exploring the ever-evolving world of tech — diving deep into both Machine Learning and Web Development along the way.
I’m skilled in the fundamentals of Machine Learning and Deep Learning, and hands-on with modern frameworks like ReactJS and Ruby on Rails — the very stack I currently work with on live projects at BigBinary.
But I don’t just bring tech to the table — I bring clarity in communication, quick adaptability, and a natural flair for observation and problem-solving. I'm a curious mind, a sharp listener, and a team player who thrives in dynamic environments. Whether it's building intelligent models or crafting intuitive user interfaces, I love turning challenges into clean, impactful solutions.
Let’s just say: I code smart, adapt fast, and never stop learning.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: " Full Stack Developer Intern",
    company: " BigBinary Solutions Pvt. Ltd.",
    description: `Working as a Full Stack Developer Intern, contributing to both frontend and backend aspects of projects. Responsibilities included utilizing modern web technologies for interface development and server-side logic implementation.`,
    technologies: ["Javascript", "React.js", "Ruby on Rails", "PostgreSql", "SqLite3", "TailwindCSS"],
  },
  {
    year: "2024",
    role: "Data Science Researcher",
    company: "IIIT Bhubaneswar (under Prof. Sanjay Saxena)",
    description: `Engaged in research focusing on the application of radiogenomics for survival estimation in brain tumor patients. This work contributed to the "Radiomics and Radiogenomics in Neuro-Oncology, Volume-2: Genetics and Clinical Applications" as the 6th chapter of the publication.`,
    technologies: ["Python", "Machine Learning", "Data Analysis", "EDA"],
  },
  {
    year: "May 2023 – July 2023",
    role: "Python Developer (Freelance)",
    company: "Femacare Pvt. Ltd.",
    description: `Worked on a freelance basis to build a machine learning model capable of predicting PCOS using images submitted by users. Integrated the developed ML model with the frontend system using the Flask framework.`,
    technologies: ["Python", "Machine Learning", "Flask", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "PCOS Prediction",
    image: project1,
    description:
      "A machine learning project designed to predict Polycystic Ovary Syndrome (PCOS) using images uploaded by the user. The project utilized Convolutional Neural Networks (CNN) as the predictive model and achieved an accuracy of 91.3%.",
    technologies: ["HTML", "CSS", "Deep Learning", "Flask", "Python", "JavaScript", "Figma"],
    projectLink: "https://github.com/Kirti-kn/PCOS_prediction",
  },
  {
    title: "Comment Analysis",
    image: project2,
    description:
      "This tool scrapes comments from a specific Instagram post URL provided by the user. It employs the roberta-base-go_emotions transformer model to analyze the emotions or types of comments, then visualizes the results as percentages using pie charts and bar plots.",
    technologies: ["Python", "Transformer Pipeline", "Selenium Webdriver"],
  },
  {
    title: "CineSearcher",
    image: project3,
    description:
      "CineSearcher is a movie searching application built as a web app. It allows users to search for movies, apply filters to refine results, save movies to a favorites list, and maintains a history of past searches.",
    technologies: ["JavaScript" ,"React.js", "TailwindCSS"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+12 4555 666 00 ",
  email: "kirtipadhi06@gmail.com",
};

import {  
  backend,  

  javascript,
  html,
  css,
  git,
  solidworks,
  fusion,
  rocket, 
  python, 
  cpp,
  autocad,
  threejs,
  reactjs,

  flask1,
  flask2,
  nakujalogo,
  modelling,

  aerospacee,
  website,
  cad,
  ministry,
  nakuja,
  myself,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: website,
  },
  {
    title: "Aerospace Engineer",
    icon: aerospacee,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "CAD designer",
    icon: cad,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Solidworks",
    icon: solidworks,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "autocad",
    icon: autocad,
  },
  {
    name: "fusion",
    icon: fusion,
  },
  {
    name: "rocket",
    icon: rocket,
  },
  {
    name: "python",
    icon: python,
  },
  {name: "threejs",
    icon: threejs,
  },{
    name: "reactjs",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "Airframe Lead Engineer",
    company_name: "Nakuja Project",
    icon: nakuja,
    iconBg: "#e8fafc",
    date: "Jan 2023 - June 2023",
    points: [
      "Designed and developed an advanced rocket system.",
      "Exported simulation data from flow simulations in Solidworks and Open Rocket to Excel for analysis and implementing optimization techniques.",
      "Intergrated data to enhance design analysis and decision-making.",
      "Collaborated effectively within a team environment to achieve project goals.",
    ],
  },
  {
    title: "Intern",
    company_name: "Aircraft Accident Investigation Department, Ministry of transport",
    icon: ministry,
    iconBg: "#180100",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed impeccable investigative and team-building skills during an enriching internship at the Ministry of Roads and Transport.",
      "Gained invaluable insights into the dynamic aviation industry, making learning engaging and practical.",
      "Actively contributed to real-world investigations, honing problem-solving abilities to perfection.",
      "A standout collaborator, leaving a lasting impression on every project undertaken.",
    ],
  },
 
  {
    title: "CAD Modelling ",
    company_name: "Projects",
    icon: myself,
    iconBg: "#E6DEDD",
    date: "Jan 2022  - Present",
    points: [
      "Designed a 3U CubeSat as part of my coursework. The CubeSat was to operate in Low Earth Orbit for urban development observation.",
      "Designed and developed an ornithopter for my final year project. I simulated the flapping in SolidWorks motion to optimize the craft's performance.",
      "Designed a 3D prototype of a Boeing 747-200.",
      "Designed a model of a Bell 206L4-Floatkit.",
      "Implemented data persistence and retrieval functionalities using SQLite database.", 
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ex at nisi consectetur egestas ac in est.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ex at nisi consectetur egestas ac in est.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ex at nisi consectetur egestas ac in est.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [

  {
    name: "Cad modelling",
    description:
      "My CAD modeling skills are versatile and impactful. I conceptualized and designed a 3U CubeSat for urban development observation, demonstrating a grasp of Low Earth Orbit operations. In my final year project, I engineered an ornithopter, refining its performance through SolidWorks motion simulation of flapping mechanisms. Additionally, I crafted a precise 3D prototype of a Boeing 747-200 and meticulously designed a model of a Bell 206L4-Floatkit",
      tags: [
      {
        name: "Fusion 360",
        color: "blue-text-gradient",
      },
      {
        name: "Solidworks",
        color: "green-text-gradient",
      },
      {
        name: "Autocad",
        color: "pink-text-gradient",
      },
      {
        name: "Ansys",
        color: "orange-text-gradient",
      },
    ],
    image: modelling,
    //add link to cad files
    source_code_link: "/",
  },
  
  {
    name: "Nakuja",
    description:
      "In the Airframe team, I designed, developed and simulated rocket performance with solidworks, ansys and open rocket, thus enabling me fine tune the aluminium and fiberglass rockets.",
      tags: [
      {
        name: "OpenRocket",
        color: "blue-text-gradient",
      },
      {
        name: "Solidworks",
        color: "green-text-gradient",
      },
    ],
    image: nakujalogo,
    source_code_link: "https://nakujaproject.com/",
  },
  {
    name: "Note taking web app",
    description:
      "I created a Flask-based web app for managing notes, featuring user-friendly interfaces through HTML/CSS integration. The app supports adding and deleting notes, employing Flask-Login and SQLAlchemy for robust user authentication, authorization, and database operations.",
      tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flask1,
    source_code_link: "https://github.com/FGachu/Flask-App",
  },
];

export { services, technologies, experiences, testimonials, projects };

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectImages = {
  smegrid: require("./Assets/smegridpro1.png"),
  dashboard: require("./Assets/tyre_management.png"),
  cg: require("./Assets/cg.png"),
  food: require("./Assets/foodimages.png"),
  hospital: require("./Assets/hospital.png"),
  tata: require("./Assets/tata.png"),
  nord: require("./Assets/geek.png"),
  timet: require("./Assets/timet.png"),
  fabbag: require("./Assets/fabbag.png"),
  popart1: require("./Assets/popart1.png"),
  horse: require("./Assets/horse.png"),
  quiz: require("./Assets/quiz.png"),
  ecommarce_bacend: require("./Assets/ecommarce_bacend.png"),
  bloager: require("./Assets/blaog.png"),
  myblog: require("./Assets/myblogaapplication.png"),
  aidetection: require("./Assets/aidetection.png"),
  jobpotal: require("./Assets/jobpotal.png"),
  multitheme: require("./Assets/multitheme.png"),
  Aipic: require("./Assets/aichat_pic.png"),
  Movie: require("./Assets/movie.png"),
  vdDashboard: require("./Assets/evdashboard.png"),
  book: require("./Assets/book.png"),
};

const projects = [
  {
    title: "Tyre Management (ERP)",
    image: projectImages.dashboard,
    description:
      "Role-based ERP platform with dashboards for master, side, and user admins.",
    tech: "React | JavaScript | Bootstrap | MongoDB | Node.js | Express",
    code: "https://suryakirangroup.com/",
    live: "https://suryakirangroup.com/",
  },
  {
    title: "Smegrid",
    image: projectImages.smegrid,
    description:
      "Empowering manufacturers with smarter procurement and workforce tools.",
    tech: "React | Tailwind CSS | Redux | Node.js | MongoDB",
    code: "https://github.com/RupeshSahu969/smegrid",
    live: "https://jazzy-paprenjak-6ea51f.netlify.app/",
  },
  {
    title: "Food Delivery Application",
    image: projectImages.food,
    description:
      "Food ordering experience with dynamic menus and backend ordering flow.",
    tech: "React | Redux | Axios | MongoDB | Node.js | Express",
    code: "#",
    live: "#",
  },
  {
    title: "Movie Review Platform",
    image: projectImages.Movie,
    description:
      "Browse, review, and rate films with a clean, responsive UI.",
    tech: "React | Tailwind CSS | Redux | Node.js | MongoDB | Express",
    code: "https://github.com/RupeshSahu969/Movie-Review-Platform",
    live: "https://mellow-florentine-4536c9.netlify.app/",
  },
  {
    title: "Product Data Explorer",
    image: projectImages.book,
    description:
      "Full-stack product exploration app with on-demand scraping jobs.",
    tech: "NestJS | React | Next.js | Axios",
    code: "https://github.com/RupeshSahu969/Product-Data-Explorer",
    live: "https://astonishing-sorbet-0197d1.netlify.app/",
  },
  {
    title: "E-commerce Application",
    image: projectImages.ecommarce_bacend,
    description:
      "E-commerce platform with dynamic product views and ordering flow.",
    tech: "MongoDB | Node.js | Express | EJS | Tailwind CSS",
    code: "https://nodejs-project-2-qhkq.onrender.com/shop",
    live: "https://nodejs-project-2-qhkq.onrender.com/shop",
  },
  {
    title: "Incredible Chattisgarh",
    image: projectImages.cg,
    description: "Tourism and cultural heritage showcase for Chattisgarh.",
    tech: "HTML5 | CSS3 | JavaScript | React",
    code: "https://66ebf82dd0033a7161209cd9--clever-pasca-0b68d4.netlify.app/#home",
    live: "https://66ebf82dd0033a7161209cd9--clever-pasca-0b68d4.netlify.app/#home",
  },
  {
    title: "Hospital Management",
    image: projectImages.hospital,
    description:
      "Hospital management system for administrative and clinical workflows.",
    tech: "HTML | CSS | Next.js | Tailwind CSS",
    code: "https://hospitalnewdatamananegments.netlify.app/",
    live: "https://hospitalnewdatamananegments.netlify.app/",
  },
  {
    title: "Blog Application",
    image: projectImages.myblog,
    description: "Create, edit, and share blog posts with responsive layouts.",
    tech: "React | JavaScript | Bootstrap | MongoDB | Node.js | Express",
    code: "https://github.com/RupeshSahu969/Blog_Add",
    live: "https://ornate-chimera-2df085.netlify.app/",
  },
  {
    title: "AI-Powered Assistant",
    image: projectImages.Aipic,
    description:
      "Real-time AI chat app using Google Gemini API for low latency replies.",
    tech: "React | Tailwind CSS | Redux | Node.js | MongoDB | Gemini API",
    code: "https://github.com/RupeshSahu969/AI-Chat-Assistant",
    live: "https://github.com/RupeshSahu969/AI-Chat-Assistant",
  },
  {
    title: "TATA 1mg Clone",
    image: projectImages.tata,
    description: "Digital healthcare platform clone with product browsing.",
    tech: "React | Redux | Axios | MongoDB | Node.js | Express",
    code: "https://github.com/sonuprasad66/omniscient-sheet-6598",
    live: "https://tata-1mg-clone-sage.vercel.app/",
  },
  {
    title: "EV Dashboard",
    image: projectImages.vdDashboard,
    description: "Analytics dashboard focused on EV metrics and insights.",
    tech: "React | JavaScript | Tailwind CSS | Context API",
    code: "https://github.com/RupeshSahu969/analytics-dashboard",
    live: "https://charming-frangollo-f20f8c.netlify.app/",
  },
  {
    title: "Time Tracking App",
    image: projectImages.timet,
    description:
      "Time tracker app with projects, timesheets, and summary dashboards.",
    tech: "HTML | CSS | JavaScript | React | Redux | Axios | JSON API",
    code: "https://github.com/RupeshSahu969/equable-pleasure-9638",
    live: "https://timetracker-4jrwp56fe-rupeshsahu969.vercel.app/",
  },
  {
    title: "GeekBuying Clone",
    image: projectImages.nord,
    description: "Ecommerce clone for gadgets, scooters, and electronics.",
    tech: "HTML | CSS | JavaScript",
    code: "https://github.com/manojkumar968/Geekbuying-clone",
    live: "https://superlative-cucurucho-0929c4.netlify.app/",
  },
  {
    title: "Application Social Media Blogger",
    image: projectImages.bloager,
    description:
      "Blog management system with authentication and EJS templates.",
    tech: "MongoDB | Node.js | Express | EJS | Bootstrap CSS",
    code: "https://myblogger-application.onrender.com/",
    live: "https://myblogger-application.onrender.com/",
  },
  {
    title: "Job Portal Application",
    image: projectImages.jobpotal,
    description:
      "Job portal mini-app with listings, authentication, and responsive UI.",
    tech: "MongoDB | Node.js | Express | React | Tailwind CSS | TypeScript",
    code: "https://github.com/RupeshSahu969/Job-Board-Mini-App",
    live: "https://loquacious-cocada-736aea.netlify.app/",
  },
  {
    title: "Multi-Theme Web Application",
    image: projectImages.multitheme,
    description:
      "React app for switching between themes with real-time UI updates.",
    tech: "React | Tailwind CSS | TypeScript",
    code: "https://github.com/RupeshSahu969/RupeshSahu-MultiThemeApp-FrontendDeveloper",
    live: "https://funny-faun-46df98.netlify.app/",
  },
  {
    title: "FabBag Clone",
    image: projectImages.fabbag,
    description: "Subscription ecommerce clone for cosmetics.",
    tech: "HTML | CSS | Bootstrap | JavaScript",
    code: "https://github.com/mdnasirdmt/fab-bag-clone-again",
    live: "https://fantastic-squirrel-8ca900.netlify.app/",
  },
  {
    title: "POPAT Namkeen",
    image: projectImages.popart1,
    description: "Ecommerce showcase for POPAT products and catalogs.",
    tech: "HTML5 | CSS3 | Bootstrap | JavaScript | React",
    code: "https://github.com/RupeshSahu969/popat_namkenn",
    live: "https://66ed1ac4e16541fa802fa313--effulgent-semolina-aa07e5.netlify.app/",
  },
  {
    title: "Horse Ride Booking",
    image: projectImages.horse,
    description: "Booking platform for recreational horse ride activities.",
    tech: "HTML5 | CSS3 | Bootstrap | JavaScript | React | Redux",
    code: "https://github.com/RupeshSahu969/horse-ride-booking",
    live: "https://66948e54c9f4c804c3474c2b--frolicking-melba-84e996.netlify.app/",
  },
  {
    title: "Quiz Application",
    image: projectImages.quiz,
    description: "Quiz app with randomized questions and answers.",
    tech: "HTML5 | CSS3 | Bootstrap | JavaScript",
    code: "https://github.com/RupeshSahu969/QuizzApp-javasccript",
    live: "https://lively-kleicha-dca27e.netlify.app/",
  },
  {
    title: "Thief Detection Alarm",
    image: projectImages.aidetection,
    description:
      "AI-based system that triggers alerts on suspicious activity.",
    tech: "Next.js",
    code: "https://github.com/RupeshSahu969/Thief-Detection-Alarm",
    live: "https://aidetectionapplication.netlify.app/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Selected work & experiments
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
            >
              <div className="h-52 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex h-full flex-col p-5">
                <h3 className="text-lg font-semibold text-slate-800">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {project.description}
                </p>
                <p className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
                  {project.tech}
                </p>
                <div className="mt-5 flex gap-3">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-200 px-4 py-2 text-xs font-semibold text-brand-700 transition hover:bg-brand-100"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-brand-400"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

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
  hr: require("./Assets/Hr.png"),
  masterdashbord: require("./Assets/masterDashbaod.png"),
};

const projects = [
  {
    title: "Tyre Management (ERP)",
    image: projectImages.dashboard,
    description:
      "A role-based ERP system for managing end-to-end OTR tyre operations, including sales, repairs, fitment, and lifecycle tracking. It provides real-time dashboards, supports 24×7 on-site services, and helps reduce downtime while improving tyre performance and operational efficiency",
    tech: "React.js | Node.js | Express.js | PostgreSQL | AWS EC2 | CI/CD Pipeline",
    code: "https://suryakirangroup.com/",
    live: "https://suryakirangroup.com/",
  },
  {
    title: "Sourabh Rolling Mill",
    image: projectImages.masterdashbord,
    description:
      "A role-based ERP system designed to streamline operational workflows with dedicated dashboards for Super Admin, Sub Admin, and User roles. The platform enables secure data management, real-time monitoring, and efficient master entry handling through a scalable backend architecture.",
    tech: "React.js | Node.js | Express.js | PostgreSQL | AWS EC2 | CI/CD Pipeline",
    code: "https://sagargroup.co",
    live: "https://sagargroup.co",
  },
  {
    title: "HRFMS",
    image: projectImages.hr,
    description:
      "An enterprise-grade HR and Finance Management System built to manage employee records, attendance, payroll, and administrative workflows. Features role-based access control, secure authentication, and automated deployment using a CI/CD pipeline on AWS infrastructure",
    tech: "React.js | Node.js | Express.js | PostgreSQL | AWS EC2 | CI/CD Pipeline",
    code: "https://hr.sagargroup.co/",
    live: "https://hr.sagargroup.co/",
  },
  {
    title: "Smegrid",
    image: projectImages.smegrid,
    description:
      "Empowering manufacturers with smarter procurement and workforce tools.",
    tech: "React.js | Node.js | Express.js | MongoDB | AWS EC2 | CI/CD Pipeline",
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
  // Define vibrant, professional linear gradients for cards
  const cardBackgrounds = [
    "bg-gradient-to-br from-blue-500/50 via-cyan-400/50 to-teal-400/60",
    "bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-rose-400/60",
    "bg-gradient-to-br from-emerald-500/50 via-green-400/50 to-lime-400/60",
    "bg-gradient-to-br from-orange-500/50 via-amber-400/50 to-yellow-400/60",
    "bg-gradient-to-br from-red-500/50 via-rose-500/50 to-pink-400/60",
    "bg-gradient-to-br from-indigo-500/50 via-blue-500/50 to-sky-400/60",
    "bg-gradient-to-br from-violet-500/50 via-purple-500/50 to-fuchsia-400/60",
    "bg-gradient-to-br from-teal-500/50 via-emerald-500/50 to-cyan-400/60",
  ];

  const borderColors = [
    "border-blue-100 hover:border-blue-300",
    "border-purple-100 hover:border-purple-300",
    "border-emerald-100 hover:border-emerald-300",
    "border-orange-100 hover:border-orange-300",
    "border-rose-100 hover:border-rose-300",
    "border-indigo-100 hover:border-indigo-300",
  ];

  return (
    <section id="projects" className="relative bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 py-28 text-slate-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold md:text-5xl"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-base text-slate-600"
          >
            Explore my professional work across web development, enterprise systems, and innovative applications
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const bgClass = cardBackgrounds[index % cardBackgrounds.length];
            const borderClass = borderColors[index % borderColors.length];
            const techArray = project.tech.split("|").map((t) => t.trim());

            return (
              <motion.article
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 9) * 0.05 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 ${borderClass} ${bgClass} shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Image Container with Overlay */}
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-brand-700">
                      {project.title}
                    </h3>

                    {/* Description with line clamp */}
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-700">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {techArray.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block rounded-md bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white/50 px-4 py-2.5 text-sm font-bold text-slate-800 backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-white hover:shadow-md"
                    >
                      <FaGithub className="text-base" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-700 hover:shadow-xl"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;

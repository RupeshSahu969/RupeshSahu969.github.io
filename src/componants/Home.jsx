import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import mylogo from "../componants/Assets/mylogo.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-white text-slate-900"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm uppercase tracking-widest text-slate-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new projects
          </div>

          <div className="flex items-center justify-center gap-3 text-slate-600 lg:justify-start">
            <p className="text-lg font-medium">Hello, I am</p>
            <span className="inline-flex h-8 w-8 items-center justify-center text-2xl animate-wave">
              👋
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Rupesh Sahu
          </h1>
          <p className="text-lg text-slate-600">
            Full-stack developer crafting scalable, performant web apps with a
            focus on delightful user experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <ScrollLink
              to="projects"
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft transition hover:bg-brand-400"
            >
              View Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-600"
            >
              Let&apos;s Talk
            </ScrollLink>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            {[
              { href: "https://github.com/RupeshSahu969", icon: <BsGithub /> },
              {
                href: "https://www.linkedin.com/in/rupesh-sahu-4924a6119/",
                icon: <BsLinkedin />,
              },
              { href: "tel:8103490175", icon: <BsTelephoneFill /> },
              { href: "mailto:rupeshsahu969@email.com", icon: <MdEmail /> },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href} 
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-600 transition hover:border-brand-400 hover:text-brand-600"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-40 w-40 animate-float rounded-full bg-brand-500/20 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 animate-float rounded-full bg-emerald-500/20 blur-2xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 p-3 shadow-soft md:h-80 md:w-80">
              <img
                src={mylogo}
                alt="Rupesh Sahu"
                className="h-full w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;


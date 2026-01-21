import React from "react";
import { motion } from "framer-motion";

const skills = [
  { icon: require("../componants/Assets/html.png"), name: "HTML" },
  { icon: require("../componants/Assets/css.png"), name: "CSS" },
  { icon: require("../componants/Assets/js.png"), name: "JavaScript" },
  { icon: require("../componants/Assets/react.png"), name: "React" },
  { icon: require("../componants/Assets/redux.png"), name: "Redux" },
  { icon: require("../componants/Assets/node.png"), name: "Node.js" },
  { icon: require("../componants/Assets/express.png"), name: "Express.js" },
  { icon: require("../componants/Assets/mongodb.png"), name: "MongoDB" },
  { icon: require("../componants/Assets/chakra.png"), name: "Chakra UI" },
  { icon: require("../componants/Assets/api3.png"), name: "REST API" },
  { icon: require("../componants/Assets/dsa.png"), name: "DSA" },
  { icon: require("../componants/Assets/git.png"), name: "Git" },
  { icon: require("../componants/Assets/postman.png"), name: "Postman" },
  { icon: require("../componants/Assets/vscode.png"), name: "VS Code" },
  { icon: require("../componants/Assets/gitlab.png"), name: "GitLab" },
  { icon: require("../componants/Assets/tailwined.png"), name: "Tailwind CSS" },
];

const Skill = () => {
  return (
    <section id="skill" className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Tech stack
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Tools I build with every day
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 w-12 object-contain md:h-14 md:w-14"
                loading="lazy"
              />
              <p className="mt-3 text-sm font-medium text-slate-700">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

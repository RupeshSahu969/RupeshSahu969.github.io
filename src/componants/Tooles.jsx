import React from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "VS Code", image: require("../componants/Assets/vscode.png") },
  { name: "Postman", image: require("../componants/Assets/postman.png") },
  { name: "Git", image: require("../componants/Assets/git.png") },
  { name: "GitLab", image: require("../componants/Assets/gitlab.png") },
  { name: "Docker", image: require("../componants/Assets/docker.png") },
  { name: "AWS", image: require("../componants/Assets/aws.png") },
];

const Tooles = () => {
  return (
    <section id="tools" className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 py-28 text-slate-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-400 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Tooling
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Dev environment essentials
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="h-14 w-14 object-contain md:h-16 md:w-16"
                loading="lazy"
              />
              <p className="mt-4 text-sm font-semibold text-slate-700 md:text-base">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tooles;

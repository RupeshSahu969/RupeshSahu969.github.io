import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const Calendar = () => {
  return (
    <section id="github" className="relative bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 py-28 text-slate-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-lime-400 to-green-400 blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Activity
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Consistency on GitHub
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
        >
          <div className="overflow-x-auto">
            <GitHubCalendar
              username="rupeshsahu969"
              blockSize={14}
              blockMargin={4}
              fontSize={14}
              theme={{
                light: ["#e2e8f0", "#99f6e4", "#5eead4", "#2dd4bf", "#0f766e"],
                dark: ["#0f172a", "#134e4a", "#0f766e", "#14b8a6", "#5eead4"],
              }}
              style={{ margin: "0 auto" }}
            />
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm min-h-[200px]"
          >
            <a href="https://github.com/rupeshsahu969" target="_blank" rel="noreferrer">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=rupeshsahu969&layout=compact&theme=vue-light&hide_border=true"
                alt="Top Languages"
                className="w-full h-auto"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm min-h-[200px]"
          >
            <a href="https://github.com/rupeshsahu969" target="_blank" rel="noreferrer">
              <img
                src="https://github-readme-stats.vercel.app/api?username=rupeshsahu969&show_icons=true&theme=vue-light&hide_border=true"
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm min-h-[200px]"
          >
            <a href="https://github.com/rupeshsahu969" target="_blank" rel="noreferrer">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=rupeshsahu969&theme=vue-light&hide_border=true"
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;



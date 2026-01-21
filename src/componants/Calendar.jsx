import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const Calendar = () => {
  return (
    <section id="github" className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
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
          {[
            {
              src: "https://github-readme-stats.vercel.app/api/top-langs?username=rupeshsahu969&show_icons=true&locale=en&layout=compact",
              alt: "Top Languages",
            },
            {
              src: "https://github-readme-stats.vercel.app/api?username=rupeshsahu969&show_icons=true&locale=en",
              alt: "GitHub Stats",
            },
            {
              src: "https://github-readme-streak-stats.herokuapp.com/?user=rupeshsahu969&",
              alt: "GitHub Streak",
            },
          ].map((card, index) => (
            <motion.div
              key={card.alt}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={card.src}
                alt={card.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calendar;

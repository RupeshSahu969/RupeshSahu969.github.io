import React from "react";
import { motion } from "framer-motion";

const pipelineStages = [
  {
    title: "Build",
    description: "GitLab Runner executes build commands and bundles assets.",
  },
  {
    title: "Test",
    description: "Automated test suites keep regressions in check.",
  },
  {
    title: "Deploy",
    description: "Production releases shipped with confidence and monitoring.",
  },
];

export const Skill1 = () => {
  return (
    <section id="skills" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Workflow
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            CI/CD pipeline mindset
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            A snapshot of how I plan, test, and ship production-ready code with
            modern DevOps practices.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pipelineStages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-brand-600">
                  {stage.title}
                </h3>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  Stage {index + 1}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600 md:text-base">
                {stage.description}
              </p>
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-100/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

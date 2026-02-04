import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Technologies", value: "15+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  const highlights = [
    {
      title: "Full-Stack Development",
      desc: "Building scalable web applications from frontend to backend",
      gradient: "from-blue-500/80 to-cyan-500/80",
    },
    {
      title: "Modern Technologies",
      desc: "React, Node.js, MongoDB, PostgreSQL, AWS, CI/CD",
      gradient: "from-purple-500/80 to-pink-500/80",
    },
    {
      title: "Enterprise Solutions",
      desc: "ERP systems, CRM platforms, and business automation",
      gradient: "from-emerald-500/80 to-teal-500/80",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-24 pb-32 text-slate-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl"
          >
            Full-Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-3xl text-lg text-slate-600"
          >
            Transforming ideas into powerful digital solutions with modern web technologies
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/60 p-6 backdrop-blur-sm border border-slate-200 shadow-sm transition-all hover:border-brand-400 hover:shadow-xl hover:shadow-brand-500/20"
            >
              <div className="text-center">
                <p className="text-4xl font-extrabold text-brand-600">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-3xl bg-white/60 p-8 backdrop-blur-sm border border-slate-200 shadow-lg md:p-12"
        >
          <p className="text-lg leading-relaxed text-slate-700">
            Hi, I'm <span className="font-bold text-brand-600">Rupesh Kumar Sahu</span>,
            a passionate full-stack developer with <span className="font-bold text-slate-900">3+ years</span> of
            experience building scalable, high-performance web applications. I specialize in creating
            enterprise-grade solutions using <span className="font-bold text-slate-900">React, Node.js, PostgreSQL, MongoDB, and AWS</span>.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            From ERP systems to real-time dashboards, I've delivered <span className="font-bold text-slate-900">25+ production-ready projects</span> that
            solve real business problems. I focus on clean code, optimal performance, and user-centric design
            to ensure every solution exceeds expectations.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${highlight.gradient} p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h3 className="text-xl font-bold text-white">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                {highlight.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { FaAws, FaDocker, FaGithub, FaGitlab, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiExpress, SiTailwindcss, SiRedux, SiTypescript } from "react-icons/si";

export const Skill1 = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      gradient: "from-blue-500/90 via-cyan-500/90 to-teal-500/90",
      skills: [
        { name: "React.js", icon: FaReact, level: "Expert" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
        { name: "Redux", icon: SiRedux, level: "Advanced" },
        { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
      ],
    },
    {
      title: "Backend Development",
      gradient: "from-emerald-500/90 via-green-500/90 to-lime-500/90",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: "Expert" },
        { name: "Express.js", icon: SiExpress, level: "Expert" },
        { name: "MongoDB", icon: SiMongodb, level: "Advanced" },
        { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
      ],
    },
    {
      title: "DevOps & Cloud",
      gradient: "from-orange-500/90 via-amber-500/90 to-yellow-500/90",
      skills: [
        { name: "AWS EC2", icon: FaAws, level: "Advanced" },
        { name: "AWS S3", icon: FaAws, level: "Advanced" },
        { name: "Docker", icon: FaDocker, level: "Advanced" },
        { name: "CI/CD", icon: FaGithub, level: "Expert" },
      ],
    },
  ];

  const cicdTools = [
    {
      name: "GitHub Actions",
      icon: FaGithub,
      description: "Automated workflows for testing, building, and deployment",
      gradient: "from-purple-500/80 to-pink-500/80",
    },
    {
      name: "GitLab CI/CD",
      icon: FaGitlab,
      description: "Enterprise pipelines with Docker integration",
      gradient: "from-orange-500/80 to-red-500/80",
    },
    {
      name: "Docker Compose",
      icon: FaDocker,
      description: "Multi-container orchestration for microservices",
      gradient: "from-blue-500/80 to-cyan-500/80",
    },
    {
      name: "AWS Deployment",
      icon: FaAws,
      description: "EC2, S3, and cloud infrastructure automation",
      gradient: "from-yellow-500/80 to-orange-500/80",
    },
  ];

  return (
    <section id="skills" className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-28 text-slate-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600"
          >
            Technical Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl"
          >
            Modern Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-3xl text-lg text-slate-600"
          >
            Building production-ready applications with cutting-edge technologies and DevOps best practices
          </motion.p>
        </div>

        {/* Skill Categories Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${category.gradient} p-8 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center justify-between rounded-xl bg-white/20 backdrop-blur-sm p-3 transition-all hover:bg-white/30"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="text-2xl text-white" />
                        <span className="font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="rounded-full bg-white/30 px-3 py-1 text-xs font-bold text-white">
                        {skill.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DevOps & CI/CD Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-28"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extrabold text-slate-900">
              DevOps & CI/CD Pipeline
            </h3>
            <p className="mt-3 text-lg text-slate-600">
              Automated deployment workflows with modern cloud infrastructure
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cicdTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tool.gradient} p-6 shadow-lg transition-all hover:scale-105 hover:shadow-2xl`}
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon className="text-5xl text-white mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pipeline Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl md:p-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            🚀 Production Deployment Pipeline - Live Workflow
          </h3>

          <div className="relative">
            {/* Connecting Lines */}
            <div className="absolute top-8 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-green-500 via-blue-500 to-orange-500 opacity-30" />

            {/* Animated Flow Dots */}
            <motion.div
              className="absolute top-[30px] h-2 w-2 rounded-full bg-brand-400"
              animate={{
                left: ["16.66%", "50%", "83.33%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1: Build */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-center relative"
              >
                <div className="relative mx-auto mb-6">
                  <motion.div
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg"
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 10px 25px rgba(34, 197, 94, 0.3)",
                        "0 10px 35px rgba(34, 197, 94, 0.5)",
                        "0 10px 25px rgba(34, 197, 94, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-3xl font-bold text-white">1</span>
                  </motion.div>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-500/30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </div>

                <h4 className="font-bold text-green-400 mb-3 text-xl">🔨 Build</h4>
                <p className="text-sm text-slate-300 mb-4">Compile & bundle assets with optimizations</p>

                {/* Progress bar */}
                <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                    animate={{
                      width: ["0%", "100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              {/* Arrow 1 */}
              <div className="hidden md:flex items-center justify-center absolute left-[30%] top-8">
                <motion.div
                  className="text-4xl text-blue-400"
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.div>
              </div>

              {/* Step 2: Test */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="text-center relative"
              >
                <div className="relative mx-auto mb-6">
                  <motion.div
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg"
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 10px 25px rgba(59, 130, 246, 0.3)",
                        "0 10px 35px rgba(59, 130, 246, 0.5)",
                        "0 10px 25px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-3xl font-bold text-white">2</span>
                  </motion.div>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500/30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                  />
                </div>

                <h4 className="font-bold text-blue-400 mb-3 text-xl">✅ Test</h4>
                <p className="text-sm text-slate-300 mb-4">Automated testing & quality checks</p>

                {/* Progress bar */}
                <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    animate={{
                      width: ["0%", "100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              {/* Arrow 2 */}
              <div className="hidden md:flex items-center justify-center absolute left-[63%] top-8">
                <motion.div
                  className="text-4xl text-orange-400"
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.div>
              </div>

              {/* Step 3: Deploy */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="text-center relative"
              >
                <div className="relative mx-auto mb-6">
                  <motion.div
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg"
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 10px 25px rgba(249, 115, 22, 0.3)",
                        "0 10px 35px rgba(249, 115, 22, 0.5)",
                        "0 10px 25px rgba(249, 115, 22, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-3xl font-bold text-white">3</span>
                  </motion.div>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-orange-500/30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeOut",
                    }}
                  />
                </div>

                <h4 className="font-bold text-orange-400 mb-3 text-xl">🚀 Deploy</h4>
                <p className="text-sm text-slate-300 mb-4">Push to AWS EC2/S3 with zero downtime</p>

                {/* Progress bar */}
                <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-400"
                    animate={{
                      width: ["0%", "100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 2,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Status Badge */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-6 py-3 border border-green-500/50"
                animate={{
                  borderColor: ["rgba(34, 197, 94, 0.5)", "rgba(34, 197, 94, 1)", "rgba(34, 197, 94, 0.5)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <motion.div
                  className="h-3 w-3 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                <span className="font-bold text-green-400">Deployment Active</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

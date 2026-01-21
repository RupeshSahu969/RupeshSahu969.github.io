import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
          About
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          A developer who builds with intent
        </h2>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-600 md:text-lg">
          <p>
            Hi, I am Rupesh Kumar Sahu, a full-stack developer who loves turning
            ideas into functional, user-friendly applications. My journey in
            tech started with a deep curiosity for how things work on the web,
            and that curiosity has grown into a strong skill set in modern web
            development.
          </p>
          <p>
            Over the past 2+ years, I have built and deployed real-world projects
            ranging from service-based CRMs to 3D visualization platforms. On
            the front end, I craft seamless interfaces with React and Tailwind
            CSS, always keeping usability and performance in mind. On the back
            end, I design robust APIs with Node.js, Express, and MongoDB to
            ensure scalability and security.
          </p>
          <p>
            What excites me most is solving problems that make a real impact,
            whether that is automating workflows, visualizing complex data, or
            building apps that people enjoy using. I believe in writing clean,
            maintainable code, collaborating with teams effectively, and
            constantly learning to stay ahead in this ever-evolving tech space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

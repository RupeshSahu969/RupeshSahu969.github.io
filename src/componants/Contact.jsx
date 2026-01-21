import React from "react";
import { IoIosCall, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

const contacts = [
  {
    label: "Call me",
    value: "+91 81034 90175",
    href: "tel:8103490175",
    icon: IoIosCall,
  },
  {
    label: "Email",
    value: "rupeshsahu969@email.com",
    href: "mailto:rupeshsahu969@email.com",
    icon: IoMdMail,
  },
  {
    label: "LinkedIn",
    value: "Connect",
    href: "https://www.linkedin.com/in/rupesh-sahu-4924a6119/",
    icon: IoLogoLinkedin,
  },
  {
    label: "GitHub",
    value: "View repos",
    href: "https://github.com/RupeshSahu969",
    icon: BsGithub,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Let&apos;s build something meaningful
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            I am always open to discussing new projects, creative ideas, or
            opportunities to join your team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-800/80 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-400/70"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/20 text-2xl text-brand-300">
                  <Icon />
                </span>
                <p className="mt-4 text-sm font-semibold text-white">
                  {item.label}
                </p>
                <p className="mt-2 text-xs text-slate-300">{item.value}</p>
              </a>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Rupesh Sahu. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import logo from "../componants/Assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skill" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </button>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              offset={-80}
              duration={500}
              activeClass="text-brand-600"
              className="cursor-pointer transition hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-600 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          />
          <div className="absolute left-1/2 top-6 w-[92%] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-2xl sm:top-10 sm:w-[28rem]">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">Navigate</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:text-brand-600"
                aria-label="Close menu"
              >
                <MdClose size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-base font-semibold text-slate-900">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  spy
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer transition hover:text-brand-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;







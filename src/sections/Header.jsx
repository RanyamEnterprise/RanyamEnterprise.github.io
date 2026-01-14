import React, { useState } from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

export default function Header() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-900/10 bg-[#f2f1ee]/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="group inline-flex items-center gap-3">
            <span className="inline-flex items-center border-2 border-gray-900/70 px-3 py-1">
              <span className="text-xs md:text-sm font-extrabold tracking-[0.22em] uppercase">
                RANYAM
              </span>
            </span>
            <span className="hidden md:block text-xs tracking-[0.22em] uppercase text-gray-900/60">
              Enterprises
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link to="/#about" className="text-sm font-medium text-gray-900/80 hover:text-gray-900 transition">
              About us
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setProjectsOpen((v) => !v)}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900/80 hover:text-gray-900 transition"
              >
                Projects
                <span className={cn("transition", projectsOpen && "rotate-180")}>▾</span>
              </button>

              {projectsOpen && (
                <div
                  className="absolute right-0 mt-3 w-72 bg-white border border-gray-900/10 shadow-soft"
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  <Link to="/projects" className="block px-5 py-3 text-sm hover:bg-gray-50">
                    All projects
                  </Link>
                  <Link to="/projects#running" className="block px-5 py-3 text-sm hover:bg-gray-50">
                    Running project
                  </Link>
                  <Link to="/projects#completed" className="block px-5 py-3 text-sm hover:bg-gray-50">
                    Completed projects
                  </Link>
                </div>
              )}
            </div>

            <Link to="/#contact" className="text-sm font-medium text-gray-900/80 hover:text-gray-900 transition">
              Contact
            </Link>
          </nav>

          <div className="md:hidden">
            <Link
              to="/#contact"
              className="text-sm font-semibold tracking-widest uppercase border border-gray-900/20 px-4 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

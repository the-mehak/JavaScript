import { Outlet, Link } from "react-router-dom";
import PropsDrilling from "./PropsDrilling";
import { useState } from "react";

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-blue-300 fixed top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between p-4">
          <Link to={'/home'} className="text-3xl font-bold">
            Logo
          </Link>

          <div className="hidden md:flex gap-8 text-2xl">
            <Link to="resume">Resume</Link>
            <Link to="projects">Projects</Link>
            <Link to="about">About us</Link>
            <Link to="contact" className="mr-10">
              Contact us
            </Link>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-blue-300 w-full">
            <div className="flex flex-col items-start p-4 gap-2">
              <Link to="resume" onClick={() => setMenuOpen(false)}>
                Resume
              </Link>
              <Link to="projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link to="about" onClick={() => setMenuOpen(false)}>
                About us
              </Link>
              <Link to="contact" onClick={() => setMenuOpen(false)}>
                Contact us
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="min-h-screen pt-20 font-sans bg-slate-300">
        <div className="max-w-7xl mx-auto px-4">
          <PropsDrilling />
          <Outlet />
        </div>
      </div>
    </>
  );
}

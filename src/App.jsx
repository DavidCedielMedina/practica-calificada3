import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Servises";
import Details from "./pages/Details";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

import NavigationBar from "./componentes/NavigationBar";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between md:justify-center items-center bg-gradient-to-l  from-[#d4e0fc] via-white to-[#f9eff1] p-2 drop-shadow-xl">
        <div className=" h-full px-2">
          <img
            className="h-[20px] w-[65px]"
            src="/public/1.home/logo.png"
            alt=""
          />
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            fill="#ffffff"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            id="menu-alt-4"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
            className="icon line-color"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="secondary"
                d="M8,9h8M8,12h8M8,15h8"
                style={{
                  fill: "none",
                  stroke: "#ffffff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                }}
              ></path>
              <circle
                id="primary"
                cx="12"
                cy="12"
                r="9"
                style={{
                  fill: "none",
                  stroke: "#ffffff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                }}
              ></circle>
            </g>
          </svg>
        </button>
        {isOpen && (
          <nav className="absolute flex md:hidden flex-col bg-gradient-to-tl  from-[#d4e0fc] via-white to-[#f9eff1] rounded-xl top-10 right-2 p-4 gap-3 text-purple-400">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/details" onClick={() => setIsOpen(false)}>
              Details
            </Link>
            <Link to="/features" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/team" onClick={() => setIsOpen(false)}>
              Team
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        )}

        <nav className="hidden md:flex gap-3 text-black">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/details">Details</Link>
          <Link to="/features">Features</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/details" element={<Details />} />
        <Route path="/features" element={<Features />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

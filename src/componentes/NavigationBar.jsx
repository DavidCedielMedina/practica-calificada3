import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function NavigationBar() {
  return (
    <header>
      <nav className="flex justify-end gap-4 bg-blue-950 text-white p-2 text-[8px]">
        <Link className=" md:flex" to="/">
          Home
        </Link>
        <Link className=" md:flex" to="/services">
          Servicies
        </Link>
        <Link className=" md:flex" to="/details">
          Details
        </Link>
        <Link className=" md:flex" to="features">
          Features
        </Link>
        <Link className=" md:flex" to="/projects">
          Projects
        </Link>
        <Link className=" md:flex" to="/team">
          Team
        </Link>
        <Link className=" md:flex" to="/contact">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<h1>Servicies</h1>} />
        <Route path="/details" element={<h1>Details</h1>} />
        <Route path="features" element={<h1>Features</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/team" element={<h1>Team</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <button></button>
    </header>
  );
}

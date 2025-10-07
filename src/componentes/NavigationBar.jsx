import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function NavigationBar() {
  return (
    <header>
      <nav className="flex justify-end gap-4 bg-blue-950 text-white p-2">
        <Link to="/">Home</Link>
        <Link to="/services">Servicies</Link>
        <Link to="/details">Details</Link>
        <Link to="features">Projects</Link>
        <Link to="/projects">Team</Link>
        <Link to="/team">Contact</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/services" element={<h1>Servicies</h1>} />
        <Route path="/details" element={<h1>Details</h1>} />
        <Route path="features" element={<h1>Features</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/team" element={<h1>Team</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </header>
  );
}

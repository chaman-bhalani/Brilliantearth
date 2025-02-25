import React from "react";
import "../styles/AboutPage.css";

const AboutNavbar = () => {
  return (
    <nav className="about-navbar">
      <ul className="about-nav-list">
        <li className="about-nav-item">About</li>
        <li className="about-nav-item">Mission</li>
        <li className="about-nav-item">Transparency</li>
        <li className="about-nav-item">Sustainability</li>
        <li className="about-nav-item">Compassion</li>
        <li className="about-nav-item">Inclusion</li>
      </ul>
    </nav>
  );
};

export default AboutNavbar;

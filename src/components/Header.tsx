import React from "react";
import "../styles/header.css";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Callum & Nina</h1>
          </div>

          <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#story" className="nav-link">
              Our Story
            </a>
            <a href="#events" className="nav-link">
              Events
            </a>
            <a href="#details" className="nav-link">
              Details
            </a>
            <a href="#rsvp" className="nav-link rsvp-link">
              RSVP
            </a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

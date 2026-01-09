import React from "react";
import "../styles/footer.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Callum & Nina</h3>
            <p>September 19th, 2026</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: nguyenphanthaonhi@gmail.com</p>
            <p>Phone: (61) 450 343 022</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#rsvp">RSVP</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Callum & Nina. All rights reserved.</p>
          <p className="footer-message">With love ✿</p>
        </div>
      </div>
    </footer>
  );
};

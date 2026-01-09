import React from "react";
import "../styles/details.css";

export const Details: React.FC = () => {
  return (
    <section className="details" id="details">
      <div className="container">
        <h2 className="section-title">Wedding Details</h2>

        <div className="details-grid">
          <div className="detail-card">
            <h3>📍 Venue</h3>
            <p className="detail-title">38 Deerdale</p>
            <p>Stafford Height</p>
            <p>QLD, Australia</p>
            <p className="detail-phone">(61) 450 343 022</p>
            <a
              href="https://maps.app.goo.gl/X6eah8oTho6H4Rti9"
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link"
            >
              View on Maps →
            </a>
          </div>

          <div className="detail-card">
            <h3>🚗 Parking</h3>
            <p className="detail-title">Complimentary Valet</p>
            <p>
              Parking will be available for all guests on the day of the
              wedding. Street parking is only option.
            </p>
            <p>
              Please allow 15 minutes for parking and respect neighbors's
              driveway.
            </p>
          </div>

          <div className="detail-card">
            <h3>🏨 Accommodation</h3>
            <p className="detail-title">
              We hosted this wedding within Brisbane area
            </p>
          </div>

          <div className="detail-card">
            <h3>🍽️ Reception</h3>
            <p className="detail-title">Menu Highlights</p>
            <p>Buffet Dinner</p>
            <p>Vegetarian options available</p>
            <p>Please note dietary restrictions in RSVP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

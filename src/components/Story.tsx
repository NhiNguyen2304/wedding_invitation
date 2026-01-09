import React from "react";
import "../styles/story.css";

export const Story: React.FC = () => {
  return (
    <section className="story" id="story" style={{ position: "relative" }}>
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <div className="story-content">
          <div className="story-text">
            <p>
              We met on a cool autumn evening in 2023. What started as a chance
              encounter at a coffee shop has blossomed into the most beautiful
              love story we could have imagined.
            </p>
            <p>
              From late-night conversations to spontaneous adventures, every
              moment with you has been a gift. Today, we can't wait to celebrate
              our love with everyone we hold dear.
            </p>
          </div>
          <div
            className="story-image"
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "50%",
              height: "100%",
              overflow: "hidden",
              zIndex: 0,
            }}
          >
            <img
              src="/images/story.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

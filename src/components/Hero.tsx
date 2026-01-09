import React from "react";
import "../styles/hero.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        {/* Box 1: Main Wedding Info Box - White Background */}
        <div
          className="hero-main-box bg-white rounded-lg shadow-2xl"
          style={{
            backgroundColor: "rgb(253,246,235)",
            width: "740px",
            height: "auto",
            fontFamily: "Playfair Display, serif",
          }}
        >
          <div className="decorative-top"></div>
          <p className="hero-invitation">Join Us For Upcoming Wedding</p>
          <h1 className="hero-title text-primary font-light text-3xl md:text-5xl tracking-wider mb-4">
            Callum <span style={{ color: "rgb(6, 70, 215)" }}></span>
          </h1>
          <h1 className="hero-title text-primary font-light text-3xl md:text-5xl tracking-wider mb-4">
            <span style={{ color: "rgb(6, 70, 215)" }}>&</span> Nina
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <p className="hero-subtitle text-primary font-light text-lg md:text-xl tracking-wide">
              Two Become One
            </p>
            <div className="decorative-middle text-secondary text-sm md:text-base mr-2">
              ✿
            </div>
            <p
              className="hero-date text-secondary font-light text-lg md:text-xl tracking-wider"
              style={{ color: "rgb(6, 70, 215)" }}
            >
              TBD
            </p>
            <div className="decorative-middle text-secondary text-sm md:text-base">
              ✿
            </div>
            <p className="hero-tagline text-primary text-xs md:text-sm tracking-widest px-2 md:px-3 py-1">
              All Become Drunk
            </p>
          </div>
          <div className="decorative-bottom">✿</div>
          <a
            href="#rsvp"
            className="cta-button inline-block mt-6 md:mt-8 bg-secondary text-white px-6 md:px-8 py-3 rounded font-semibold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300"
          >
            Save the Date
          </a>
        </div>

        {/* Box 2: Where & When Boxes - with custom colors */}
        <div
          className="hero-info-boxes w-full grid grid-cols-2 gap-0"
          style={{ backgroundColor: "transparent", marginTop: "2rem" }}
        >
          {/* WHERE Box - rgb(171,158,118) */}
          <div
            className="info-box p-8 md:p-10 shadow-none md:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            style={{ backgroundColor: "rgb(171,158,118)" }}
          >
            <p className="info-box-content-intro text-white font-serif text-base md:text-lg mb-2">
              Join Us
            </p>
            <p className="info-box-content-body text-white font-serif text-base md:text-lg">
              WHERE
            </p>
            <p className="info-box-content-body text-white font-serif text-base md:text-lg">
              & WHEN
            </p>
          </div>

          {/* WHEN Box - white background */}
          <div
            className="info-box bg-white p-8 md:p-10 shadow-none md:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            style={{ background: "rgba(253, 250, 244, 1)" }}
          >
            <p className="info-box-content-where text-primary font-serif text-base md:text-lg mb-2">
              Comming soon
            </p>
            <p className="info-box-content-where text-primary font-serif text-base md:text-lg mb-2">
              Comming soon
            </p>

            <div className="schedule-item flex flex-col items-center justify-center text-center p-2 mb-3 pb-3">
              <div className="schedule-time text-secondary font-bold text-lg md:text-xl">
                5 pm
              </div>
              <div className="schedule-event text-primary font-semibold uppercase text-sm md:text-base">
                Ceremony
              </div>
            </div>

            <div className="schedule-item flex flex-col items-center justify-center text-center p-2 mb-3 pb-3">
              <div className="schedule-time text-secondary font-bold text-lg md:text-xl">
                6 pm
              </div>
              <div className="schedule-event text-primary font-semibold uppercase text-sm md:text-base tracking-wide">
                Reception
              </div>
            </div>

            <div className="schedule-item flex flex-col items-center justify-center text-center p-2">
              <div className="schedule-time text-secondary font-bold text-lg md:text-xl">
                8 pm
              </div>
              <div className="schedule-event text-primary font-semibold uppercase text-sm md:text-base">
                Celebration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

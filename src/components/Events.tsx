import React from "react";
import "../styles/events.css";

interface Event {
  id: number;
  type: string;
  date: string;
  time: string;
  location: string;
  description: string;
  icon: string;
}

export const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      type: "Ceremony",
      date: "Friday, September 19th, 2026",
      time: "5:00 PM",
      location: "Coming soon",
      description:
        "Join us as we exchange vows and begin our new chapter together.",
      icon: "💍",
    },
    {
      id: 2,
      type: "Reception",
      date: "Friday, September 19th, 2026",
      time: "6:00 PM",
      location: "Coming soon",
      description: "Celebration, dinner, and dancing with our loved ones.",
      icon: "🥂",
    },
  ];

  return (
    <section className="events" id="events">
      <div className="container">
        <h2 className="section-title">Wedding Events</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-icon">{event.icon}</div>
              <h3 className="event-type">{event.type}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-time">{event.time}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

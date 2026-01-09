import React, { useState } from "react";
import "../styles/rsvp.css";

interface RSVPFormData {
  name: string;
  email: string;
  phone: string;
  attending: "yes" | "no" | "";
  guests: number;
  dietary: string;
  message: string;
}

export const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guests: 1,
    dietary: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    console.log("RSVP Data:", formData);

    // You can integrate with a backend service here
    // For now, just show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        attending: "",
        guests: 1,
        dietary: "",
        message: "",
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <section className="rsvp" id="rsvp">
        <div className="container">
          <div className="rsvp-success">
            <h2>Thank You!</h2>
            <p>
              We've received your RSVP and can't wait to celebrate with you.
            </p>
            <div className="decorative">✿ ✿ ✿</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp" id="rsvp">
      <div className="container">
        <h2 className="section-title">We Look Forward to Your Presence</h2>
        <p className="rsvp-subtitle">
          Please let us know if you can celebrate with us
        </p>

        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="form-group">
              <label htmlFor="attending">Will You Attend? *</label>
              <select
                id="attending"
                name="attending"
                value={formData.attending}
                onChange={handleChange}
                required
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes, I will attend</option>
                <option value="no">Sorry, I cannot attend</option>
              </select>
            </div>
          </div>

          {formData.attending === "yes" && (
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="guests">
                  Number of Guests (including yourself) *
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dietary">Dietary Restrictions</label>
                <input
                  type="text"
                  id="dietary"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  placeholder="e.g., Vegetarian, Gluten-free"
                />
              </div>
            </div>
          )}

          <div className="form-group full">
            <label htmlFor="message">Special Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your well-wishes with us"
              rows={4}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

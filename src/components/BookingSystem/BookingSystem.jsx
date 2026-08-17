import classNames from "classnames";
import React, { useState } from "react";
import { SubmitButton } from "../Button/Button";

const initialInputs = {
  name: "",
  phone: "",
  email: "",
  guests: "2 Guests",
  date: "2026-08-17",
  time: "19:00",
  occasion: "Casual Dining",
  seating: "Indoor",
  requests: "",
};

export default function BookingSystem(props) {
  const [inputs, setInputs] = useState(initialInputs);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Reservation request received. Vegkourt will contact you shortly.");
  };

  const bookingStyle = classNames("booking-system-form ", {
    "style-2": props?.styleTwo,
  });

  return (
    <div className="booking-system-form reservation-card">
      <form className={bookingStyle} onSubmit={handleSubmit}>
        <div className="reservation-form-heading">
          <p>Reserve Your Table</p>
          <span>Pure vegetarian dining in Mysuru</span>
        </div>

        <div className="reservation-grid">
          <label className="reservation-field wide">
            <span>Guest Name</span>
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder="Full name"
              required
            />
          </label>

          <label className="reservation-field">
            <span>Phone</span>
            <input
              type="tel"
              name="phone"
              value={inputs.phone}
              onChange={handleChange}
              placeholder="Mobile number"
              required
            />
          </label>

          <label className="reservation-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder="Email address"
              required
            />
          </label>

          <label className="reservation-field">
            <span>Guests</span>
            <select name="guests" value={inputs.guests} onChange={handleChange}>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6 Guests</option>
              <option>8 Guests</option>
              <option>10+ Guests</option>
            </select>
          </label>

          <label className="reservation-field">
            <span>Date</span>
            <input
              type="date"
              name="date"
              value={inputs.date}
              onChange={handleChange}
              required
            />
          </label>

          <label className="reservation-field">
            <span>Time</span>
            <input
              type="time"
              name="time"
              value={inputs.time}
              onChange={handleChange}
              required
            />
          </label>

          <label className="reservation-field">
            <span>Occasion</span>
            <select
              name="occasion"
              value={inputs.occasion}
              onChange={handleChange}
            >
              <option>Casual Dining</option>
              <option>Family Lunch</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business Meal</option>
            </select>
          </label>

          <label className="reservation-field">
            <span>Seating</span>
            <select name="seating" value={inputs.seating} onChange={handleChange}>
              <option>Indoor</option>
              <option>Quiet Corner</option>
              <option>Family Table</option>
              <option>Flexible</option>
            </select>
          </label>

          <label className="reservation-field wide">
            <span>Special Requests</span>
            <textarea
              name="requests"
              rows="4"
              value={inputs.requests}
              onChange={handleChange}
              placeholder="Allergies, child seat, celebration note, or preferred table"
            />
          </label>
        </div>

        {!props?.styleTwo && (
          <div className="ak-height-30 ak-height-lg-20"></div>
        )}

        <div className="reservation-submit">
          <SubmitButton>Request Reservation</SubmitButton>
        </div>
      </form>
    </div>
  );
}

import classNames from "classnames";
import React, { useRef, useState } from "react";
import { SubmitButton } from "../Button/Button";
import { toast } from "react-toastify";

const initialInputs = {
  name: "",
  phone: "",
  email: "",
  guests: "2 Guests",
  date: "2026-08-17",
  time: "19:00",
  compactDate: "2023-07-22",
  compactTime: "03:45",
  occasion: "Casual Dining",
  seating: "Indoor",
  requests: "",
};

export default function BookingSystem(props) {
  const [inputs, setInputs] = useState(initialInputs);
  const compactTimeRef = useRef(null);
  const compactDateRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    occasion: "",
    seating: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (!cleanedPhone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(cleanedPhone)) {
      errors.phone = "Phone number is invalid";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("https://vegkourt.in/forms/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log("response", response);

        if (response.ok) {
          const data = await response.json();

          if (data.status === "success") {
            setFormData({
              name: "",
              email: "",
              phone: "",
              guests: "",
              date: "",
              time: "",
              occasion: "",
              seating: "",
              message: "",
            });
            toast.success("Successfully we got your info.");
            props?.onSuccess?.();
          } else {
            console.error("Error:", data.message);
            toast.error(data.message);
          }
        } else {
          console.error("Error:", response.statusText);
          toast.error("An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      setErrors(formErrors);
      Object.values(formErrors).forEach((error) => {
        toast.error(error);
      });
    }

    setIsLoading(false);
  };

  const openPicker = (inputRef) => {
    if (inputRef.current?.showPicker) {
      inputRef.current.showPicker();
      return;
    }
    inputRef.current?.focus();
    inputRef.current?.click();
  };

  const bookingStyle = classNames("booking-system-form ", {
    "style-2": props?.styleTwo,
    "reservation-compact": props?.compact,
    "reservation-popup-form": props?.popup,
  });

  if (props?.compact) {
    return (
      <div className="booking-system-form">
        <form className={bookingStyle} onSubmit={handleSubmit}>
          <div className="select">
            <select
              className="ak-form-select"
              name="compactGuests"
              value={inputs.compactGuests || "One"}
              onChange={handleChange}
            >
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
              <option value="Four">Four</option>
              <option value="Six">Six</option>
            </select>
            <div className="select-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
              >
                <path
                  d="M8.99516 9.502C8.80335 9.502 8.61135 9.42869 8.46491 9.28225L0.964914 1.78225C0.671852 1.48919 0.671852 1.01463 0.964914 0.72175C1.25798 0.428875 1.73254 0.428688 2.02541 0.72175L8.99516 7.6915L15.9649 0.72175C16.258 0.428688 16.7325 0.428688 17.0254 0.72175C17.3183 1.01481 17.3185 1.48937 17.0254 1.78225L9.52541 9.28225C9.37898 9.42869 9.18698 9.502 8.99516 9.502Z"
                  fill="#FFD28D"
                />
              </svg>
            </div>
          </div>
          <div className="ak-form-time-date">
            <div className="ak-time">
              <input
                ref={compactTimeRef}
                className="time-input"
                type="time"
                name="compactTime"
                value={inputs.compactTime}
                onChange={handleChange}
              />
              <button
                aria-label="Choose reservation time"
                className="picker-icon"
                type="button"
                onClick={() => openPicker(compactTimeRef)}
              >
                <TimeIcon />
              </button>
            </div>
            <div className="ak-date">
              <input
                ref={compactDateRef}
                className="date-input"
                type="date"
                name="compactDate"
                value={inputs.compactDate}
                onChange={handleChange}
              />
              <button
                aria-label="Choose reservation date"
                className="picker-icon"
                type="button"
                onClick={() => openPicker(compactDateRef)}
              >
                <DateIcon />
              </button>
            </div>
          </div>
          <div className="ak-height-50 ak-height-lg-30"></div>
          <SubmitButton>Reservations</SubmitButton>
        </form>
      </div>
    );
  }

  return (
    <div className="booking-system-form reservation-card">
      <form className={bookingStyle} onSubmit={handleSubmit}>
        <div className="reservation-form-heading">
          <p>Reserve Your Table</p>
          <span>Bites, grills, curries, rice, breads, and desserts</span>
        </div>

        <div className="reservation-grid">
          <label className="reservation-field wide">
            <span>Guest Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full name"
              required
            />
          </label>

          <label className="reservation-field">
            <span>Phone</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Mobile number"
              required
            />
          </label>

          <label className="reservation-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              required
            />
          </label>

          <label className="reservation-field">
            <span>Guests</span>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select
              </option>
              <option value="2 Guests">2 Guests</option>
              <option value="3 Guests">3 Guests</option>
              <option value="4 Guests">4 Guests</option>
              <option value="5 Guests">5 Guests</option>
              <option value="6 Guests">6 Guests</option>
              <option value="8 Guests">8 Guests</option>
              <option value="10+ Guests">10+ Guests</option>
            </select>
          </label>

          <label className="reservation-field">
            <span>Date</span>
            <div className="reservation-picker-control">
              <input
                ref={dateRef}
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
              <button
                aria-label="Choose reservation date"
                className="picker-icon"
                type="button"
                onClick={() => openPicker(dateRef)}
              >
                <DateIcon />
              </button>
            </div>
          </label>

          <label className="reservation-field">
            <span>Time</span>
            <div className="reservation-picker-control">
              <input
                ref={timeRef}
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
              <button
                aria-label="Choose reservation time"
                className="picker-icon"
                type="button"
                onClick={() => openPicker(timeRef)}
              >
                <TimeIcon />
              </button>
            </div>
          </label>

          <label className="reservation-field">
            <span>Occasion</span>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select occasion
              </option>
              <option value="Casual Dining">Casual Dining</option>
              <option value="Family Lunch">Family Lunch</option>
              <option value="Brunch">Brunch</option>
              <option value="Vegetarian Dinner">Vegetarian Dinner</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business Meal">Business Meal</option>
            </select>
          </label>

          <label className="reservation-field">
            <span>Seating</span>
            <select
              name="seating"
              value={formData.seating}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select seating
              </option>
              <option value="Indoor">Indoor</option>
              <option value="Quiet Corner">Quiet Corner</option>
              <option value="Family Table">Family Table</option>
              <option value="Flexible">Flexible</option>
            </select>
          </label>

          {!props?.popup && (
            <label className="reservation-field wide">
              <span>Special Requests</span>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Allergies, child seat, celebration note, or preferred table"
              />
            </label>
          )}
        </div>

        {!props?.styleTwo && (
          <div className="ak-height-30 ak-height-lg-20"></div>
        )}

        <div className="reservation-submit">
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Request Reservation"}
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

function TimeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" />
      <path
        d="M12 7v5l3 2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DateIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
        fill="none"
        stroke="currentColor"
      />
      <path
        d="M8 3v4M16 3v4M4 10h16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

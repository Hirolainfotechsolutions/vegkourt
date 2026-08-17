import React from "react";

const movingText = [
  {
    white: "Pure Vegetarian Dining ",
    yellow: "in Mysuru",
  },
  {
    white: "Fresh Starters, Rich Mains ",
    yellow: "and Warm Service",
  },
  {
    white: "Family Lunches, Dinner Plans ",
    yellow: "and Online Orders",
  },
];

export default function MovingText() {
  return (
    <div className="ak-moving-section-wrap ak-normal text-uppercase">
      <div className="ak-moving-section-in">
        {movingText?.map((text, i) => (
          <div className="ak-moving-section" key={i}>
            <h2>
              {text.white} <span>{text.yellow}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

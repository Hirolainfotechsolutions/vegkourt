import React from "react";

const movingText = [
  {
    white: "Bites, Soups, Garden Greens ",
    yellow: "and Grills",
  },
  {
    white: "Nibbles, Mains, Breads ",
    yellow: "and Pastas",
  },
  {
    white: "Biryani, Oriental Plates ",
    yellow: "and Desserts",
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

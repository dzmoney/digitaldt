import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Euismod in pellentesque",
    text: "Adipiscing bibendum est ultricies integer quis auctor elit. Eros in cursus turpis massa.",
  },
  {
    title: "Pulvinar pellentesque",
    text: "Adipiscing bibendum est ultricies integer quis auctor elit. Eros in cursus turpis massa.",
  },
  {
    title: "Auctor neque vitae",
    text: "Adipiscing bibendum est ultricies integer quis auctor elit. Eros in cursus turpis massa.",
  },
  {
    title: "Montes nascetur ridiculus",
    text: "Adipiscing bibendum est ultricies integer quis auctor elit. Eros in cursus turpis massa.",
  },
];

const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into the
          Future Today and Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-container">
        {featuresData.map((item) => (
          <Feature
            title={item.title}
            text={item.text}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;

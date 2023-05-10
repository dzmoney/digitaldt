import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possibility} alt="possibility-img" />
      </div>
      <div className="possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  );
};

export default Possibility;

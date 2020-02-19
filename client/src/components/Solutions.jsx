import React from 'react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <>
      <div id="solutions-bannerimage">
        <div id="solutions">Solution</div>
        <div id="solutions-container">
          Good Moderate Hazardous Toxic
          <p>
            Here we can put Solutions for Moderate, Hazardous, Toxic pollution
            from website.
          </p>
        </div>
      </div>
      <div className="bottom-image">
        <div className="bottom-hero-text">
          <h5>Track your air quality anywhere in the US</h5>
          <h4>hello@airaware.com</h4>
          <h4>1-800-AIR-AWARE</h4>
        </div>
      </div>
    </>
  );
};

export default Solutions;

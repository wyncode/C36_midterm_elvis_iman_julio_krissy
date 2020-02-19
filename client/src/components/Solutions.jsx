import React from 'react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <>
    <div className="top-banner-inner-pages">
        <div id="title-inner-pages">Air Quality Solutions</div>
        </div>
        <div className="solutions-body">
          <h10>
            1'st Step is Knowing... AQI What?
            </h10>
          <p>
            AQI, also known as Air Quality Index, is an index for reporting daily air quality. It tells you how clean or polluted your air is, and what associated health effects might be.
            <br></br><br></br><b>Good</b> - 0 to 50	
            <br></br><b>Moderate</b> - 51 to 100 
            <br></br><b>Unhealthy for Sensitive Groups</b> - 101 to 150	
            <br></br><b>Unhealthy</b> - 151 to 200
            <br></br><b>Very Unhealthy</b> - 201 to 300
            <br></br><b>Hazardous</b> - 301-500
            <br></br><br></br>
            Read more on what each means here: <a href="https://airnow.gov/index.cfm?action=aqibasics.aqi">Air Quality Index</a>
            </p>
            <br></br><br></br>
            <h10>Some Every Day Solutions</h10>
            <br></br>
            <h9>Plants</h9>
            <p>
            insert info about plants here
              </p>
            <h9>Exercise</h9>
            <p>
            insert info about exercise here
              </p>
            <h9>Better Ventilation</h9>
            <p>
              insert info about better Ventilation here
              </p>
        </div>
      {/* <div className="bottom-image">
        <div className="bottom-hero-text">
          <h5>Track your air quality anywhere in the US</h5>
          <h4>hello@airaware.com</h4>
          <h4>1-800-AIR-AWARE</h4>
        </div>
      </div> */}
    </>
  );
};

export default Solutions;

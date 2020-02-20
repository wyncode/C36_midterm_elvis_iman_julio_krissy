import React from 'react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <>
    <div className="top-banner-inner-pages">
        <div id="title-inner-pages">Air Quality Solutions</div>
        </div>
        <div className="solutions-body">
          <h6>
            1'st Step is Knowing... AQI What?
            </h6>
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
            <h6>Some Every Day Solutions</h6>
            <br></br>
            <h6>Plants</h6>
            <p>
            insert info about plants here
              </p>
            <h6>Exercise</h6>
            <p>
            insert info about exercise here
              </p>
            <h6>Better Ventilation</h6>
            <p>
              insert info about better Ventilation here
              </p>
        </div>
    </>
  );
};

export default Solutions;

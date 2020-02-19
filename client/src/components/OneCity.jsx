import React from 'react';

const OneCity = ({ location }) => {
  console.log(location);
  return (
    <>
      <div id="OneCity-body">
        {/* <img src={location.state.cityUrl} alt={location.state.formattedCity} /> */}
        <div id="onecity">{location.state.formattedCity}</div>
        <div id="onecity">{location.state.formattedDate}</div>
        <div id="onecity">{location.state.aqi}</div>
        <div id="onecity">{location.state.mainPoll}</div>
        <div id="onecity">Current Temperature: {location.state.value.stats.tp} C&deg;</div>
        <div id="solutions-container">
          <p></p>
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

export default OneCity;

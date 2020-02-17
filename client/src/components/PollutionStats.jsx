import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import '../styling/App.css';
import Card from './Card';
const PollutionStats = props => {
  const timeStamp = props.stats.ts.slice(0, 10);
  return (
    <Card
      stats={timeStamp}
      aqi={props.stats.aqius}
      mainPoll={props.stats.mainus}
      cityUrl={props.cityUrl}
    />
  );
};
export default PollutionStats;

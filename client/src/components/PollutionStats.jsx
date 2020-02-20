import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import '../styling/App.css';
import Card from './Card';
const PollutionStats = ({ stats, cityUrl, remove, weather }) => {
  const timeStamp = stats.ts.slice(0, 10);
  return (
    <Card
      date={timeStamp}
      aqi={stats.aqius}
      mainPoll={stats.mainus}
      cityUrl={cityUrl}
      value={{ stats, cityUrl }}
      remove={remove}
      weather={weather}
    />
  );
};
export default PollutionStats;

import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import '../styling/App.css';
import Card from './Card';
const PollutionStats = ({ stats, cityUrl, handleSelectCity }) => {
  const timeStamp = stats.ts.slice(0, 10);
  return (
    <Card
      stats={timeStamp}
      aqi={stats.aqius}
      mainPoll={stats.mainus}
      cityUrl={cityUrl}
      value={{ stats, cityUrl }}
      handleSelectCity={handleSelectCity}
    />
  );
};
export default PollutionStats;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/App.css';
import Card from './Card';

const PollutionStats = props => {
  const [cityUrl, setCityUrl] = useState('');
  useEffect(() => {
    const getCityPic = async () => {
      const cityPicUrl = await axios
        .get(
          `https://api.teleport.org/api/urban_areas/slug:${props.city}/images/`
        )
        .then(res => res.data.photos[0].image.web);
      setCityUrl(cityPicUrl);
      console.log(cityPicUrl);
    };
    getCityPic();
  }, [props.city]);
  return (
    <Card
      stats={props.stats.ts.slice(0, 10)}
      aqi={props.stats.aqius}
      mainPoll={props.stats.mainus}
      cityUrl={cityUrl}
    />
  );
};
export default PollutionStats;

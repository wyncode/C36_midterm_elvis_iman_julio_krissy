import React from 'react';

const OneCity = ({ location }) => {
    const {
        state: {
          cityUrl,
          formattedCity,
          formattedDate,
          aqi,
          mainPoll,
          value = {}
        } = {}
      } = location;

    return (
        <div className="display-city-card">
            <div className="specific-city-page">
                <img src={cityUrl} alt="" style={{width:"10vw", height:"10vh"}}></img>

            </div>
            <div>
                <h1>Hello World</h1>
            </div>
        </div>
    )
}

export default OneCity;
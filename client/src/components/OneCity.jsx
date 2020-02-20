import React from 'react';
import { aqiToCig, hazardLevels } from '../constants';
import { solutionsObj } from "../constants"


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
            <img style={{display:'block'}}  src={cityUrl} alt=""></img>
            <div className="city-information" style={{textAlign:'center',alignItems:"center",marginTop:"6rem",marginRight:"2rem"}}>
                
                <span style={{fontSize:"2rem",fontWeight:"800"}}>{formattedCity}</span> <br></br>
                <span style={{fontSize:"1.2rem"}}>{formattedDate}</span><br></br>
                <span style={{fontWeight:'600'}}> AQI: {aqi} </span> <br></br>
                Main Pollutant: {mainPoll}  <br></br>
                Cigarettes per day: {(aqi * aqiToCig).toPrecision(2)} <br></br>
                        <h2><span style={{ marginTop: '0.5rem' }}>
                  Hazard level:{' '}
                  <span
                    style={{
                      color: `${
                        hazardLevels.find(({ level }) => aqi <= level.range)
                          .level.color
                      }`
                    }}
                  >
                    {
                      hazardLevels.find(({ level }) => aqi <= level.range).level
                        .hazard
                    }
                  </span>
                </span></h2>
                        <h3>Additional Information</h3>
                      <p>{solutionsObj[hazardLevels.find(({ level }) => aqi <= level.range).level
                        .hazard]}</p>



            </div>
        </div>
    )
}

export default OneCity;

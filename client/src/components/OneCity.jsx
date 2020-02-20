import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { aqiToCig, hazardLevels } from '../constants';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 20px'
  },
  media: {
    height: 140
  },
  secondaryText: {
    color: 'black',
    marginTop: '0.5rem',
    marginBottom: '0.2rem'
  }
});

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
  const classes = useStyles();
  return (
    <>
      <div id="one-city-body">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={cityUrl} />
            <CardContent className="card-actions">
              <Typography gutterBottom variant="h5" component="h2">
                {formattedCity} <br></br>
                {formattedDate}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <h3 style={{ margin: 0, color: 'black' }}>AQI: {aqi}</h3>
              </Typography>
              <Typography
                className={classes.secondaryText}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                in Pollutant: {mainPoll}
              </Typography>
              <Typography>
                Cigarettes per day: {(aqi * aqiToCig).toPrecision(2)} <br></br>
                <p style={{ marginTop: '0.5rem' }}>
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
                </p>
              </Typography>
              <Typography
                className={classes.secondaryText}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Current Temperature: {value.stats.tp} C&deg;
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default OneCity;

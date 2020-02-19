import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dropdown from './Dropdown';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 20px'
  },
  media: {
    height: 140
  }
});

const monthToMonth = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  '12': "December"
}

const hazardLevels = [
  {
    "level": {
    "hazard":"Good",
    "range":50,
    "color":"green"}
  },
  {
    "level": {
    "hazard":"Moderate",
    "range":100,
    "color":"yellow"}
  },
  {
    "level": {
    "hazard":"Unhealthy for sensitive groups",
    "range":150,
    "color":"orange"}
  },
  {
    "level": {
    "hazard":"Unhealthy",
    "range":200,
    "color":"red"}
  },
  {
    "level": {
    "hazard":"Very Unhealthy",
    "range":300,
    "color":"purple"}
  },
  {
    "level":{
    "hazard":"Hazardous",
    "range":500,
    "color":"maroon"}
  }
    ]

const aqiToCig = 1/72; // converts the AQI to approximate number of cigarettes smoked per day

export default function MediaCard({ date, aqi, cityUrl, mainPoll, value, remove }) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cityUrl || 'placeholder.png'}
          title="Contemplative Reptile"
        />
        <CardContent className="card-actions">
          <Typography gutterBottom variant="h5" component="h2">
            {value.stats.id.split("-").join(', ')} <br></br>
            {monthToMonth[date.slice(5,7)] + " " + date.slice(8,10) + `, ${date.slice(0,4)}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h3 style={{margin:0,color:'black'}}>AQI: {aqi}</h3>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p style={{color:'black',marginTop:'0.5rem', marginBottom:'0.2rem'}}>Main Pollutant: {mainPoll}</p>
          </Typography>
          <Typography>
            Cigarettes per day: {(aqi*aqiToCig).toPrecision(2)} <br></br>
            <p style={{marginTop:'0.5rem'}}>Hazard level: <span style={
              {
                color: `${hazardLevels.find(({level}) => aqi <= level.range).level.color}`,
              }
              }>
              {hazardLevels.find(({level}) => aqi <= level.range).level.hazard}</span>
              </p>     
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions">
        <Button className="card-actions" onClick={() => remove(value)}>Remove</Button>
      </CardActions>
    </Card>
  );
}

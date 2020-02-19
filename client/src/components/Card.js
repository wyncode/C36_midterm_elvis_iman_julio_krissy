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
// Ask Tommy about how invoking functions work in event handlers like onClick, i.e,
// difference between onClick={() => handleSelectCity(value)}
// and onClick={handleSelectCity(value)}


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

const aqiToCig = 1/72; // converts the AQI to approximate number of cigarettes smoked per day

export default function MediaCard({ date, aqi, cityUrl, mainPoll, handleSelectCity, value, remove }) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cityUrl}
          // title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {value.stats.id.split("-").join(', ')} <br></br>
            {monthToMonth[date.slice(5,7)] + " " + date.slice(8,10) + `, ${date.slice(0,4)}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            AQI: {aqi}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Main Pollutant: {mainPoll}
          </Typography>
          <Typography>
            Cigarettes per day: {(aqi*aqiToCig).toPrecision(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {handleSelectCity && (
          <Button
            onClick={() => handleSelectCity(value)}
            size="small"
            color="primary"
          >
            Compare
          </Button>
        )}
        <Button onClick={() => remove(value)}>Remove</Button>
      </CardActions>
    </Card>
  );
}

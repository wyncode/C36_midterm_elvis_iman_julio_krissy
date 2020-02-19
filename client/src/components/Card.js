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
export default function MediaCard({
  stats,
  aqi,
  cityUrl,
  mainPoll,
  handleSelectCity,
  value,
  remove
}) {
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
            Stats: {stats}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            AQI: {aqi}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Main Pollutant: {mainPoll}
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

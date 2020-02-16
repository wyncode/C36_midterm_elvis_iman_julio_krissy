if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const axios = require('axios');
const express = require('express');
const path = require('path');
const app = express();

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// let cities = [];

// supported cities by state API

app.get('/api/:state', (request,response) => {
  const state = request.params.state;
  axios.get("http://api.airvisual.com/v2/cities?"
  + `state=${state}&country=USA&key=7b3d5fdd-6553-4cae-b375-dadf066b8ffb`)
  .then(res => response.json(res.data.data))
  .catch(err => console.log(err))
})


// This is the API that retrieves the AQI (Air Quality Index)

app.get('/api/:state/:city', (request,response) => {
  const state = request.params.state;
  const city = request.params.city;  
  axios.get(`http://api.airvisual.com/v2/city?city=${city}&`
  + `state=${state}&country=USA&key=7b3d5fdd-6553-4cae-b375-dadf066b8ffb`)
  .then(res => response.json(res.data.data.current.pollution))
  .catch(err => console.log(err))
})


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});

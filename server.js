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

app.get('/api/:state', async (request,response) => {
  // console.log(request.params.state);
  const state = request.params.state;
  console.log("This is the FIRST API")
  const cityList = await axios.get("http://api.airvisual.com/v2/cities?"
  + `state=${state}&country=USA&key=7b3d5fdd-6553-4cae-b375-dadf066b8ffb`)
  .then(res => {
    console.log(res)
    return res.data.data
  })
  .catch(err => console.log(err))
  // console.log(data);
  response.json(cityList)
  // response.json(request.params);
})

// This is the API that retrieves the AQI (Air Quality Index)

app.get('/api/:state/:city', async (request,response) => {
  const state = request.params.state;
  const city = request.params.city;  
  console.log("This is the SECOND API")
  // console.log(state);
  // console.log(city);
  const pollutionStats = await axios.get(`http://api.airvisual.com/v2/city?city=${city}&`
  + `state=${state}&country=USA&key=7b3d5fdd-6553-4cae-b375-dadf066b8ffb`)
  .then(res => res.data.data.current.pollution)
  .catch(err => console.log(err))
  // console.log(data);
  response.json(pollutionStats)
  // response.json(request.params);
})


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});

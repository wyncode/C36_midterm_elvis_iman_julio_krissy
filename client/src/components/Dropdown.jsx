import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import PollutionStats from './PollutionStats';

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
];

const Dropdown = () => {
  const [apiData, setApiData] = useState([]);
  const [dropdownState, setDropdownState] = useState('');
  // These are the hooks that were defined in the Searchbar component before
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [apiCityData, setApiCityData] = useState([]);
  // This is the hook that was defined in the PollutionStats component
  const [cityUrl, setCityUrl] = useState('');

  //                                                       FIRST API BEG
  const handleDropdownChange = event => {
    setDropdownState(event.target.value);
  };
  // This useEffect retrieves an array of all supported cities in a state
  // when the user chooses a state from the dropdown box. The cities array
  // is saved to the apiData state
  useEffect(() => {
    if (dropdownState == '') {
      return;
    }
    const getApiData = async () => {
      const cityList = await axios
        .get(`/api/${dropdownState}`)
        .then(res => res.data);
      // console.log(cityList.map( city => city.city ))
      setApiData(cityList.map( city => {
        return city.city
      }));
    };
    getApiData();
  }, [dropdownState]);
  //                                                       FIRST API END

  //                                                       SECOND API BEG
  const handleSearchbarChange = event => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(search);
  };
  // This function filters the list of supported cities that we retrieved in 
  // the first API call, i.e. (apiData). As the user types in the searchbar
  // this function filters out the cities that dont begin with the letters 
  // currently in the searchbar and then renders the remaining cities from 
  // the array as suggested options.

  const recommendedCities = () => {
    // console.log("THIS IS INSIDE THE FILTER FUNCTION", apiData)
    const reducedCities = apiData.filter( state => {
      return (
        state.toLowerCase().slice(0,search.length) == search
      )
    })
    // console.log(reducedCities)
    return (
        reducedCities.map((state, index) => {
          return (
            <option key={index} value={state}>
              {state}
            </option>
          );
        })
    )
  } 
  // This useEffect is retrieving the city pollution stats and also
  // the city picture everytime the user submits the search form
  useEffect(() => {
    if (query == '') {
      return;
    }

    const getApiCityData = async () => {
      const pollutionStats = await axios
        .get(`/api/${dropdownState}/${query}`)
        .then(res => res.data);
      setApiCityData(pollutionStats);
      // console.log(pollutionStats);
    };
    getApiCityData();

    const getCityPic = async () => {
      const cityPicUrl = await axios
        .get(`/image/${query.split(' ').join('-')}`)  // this converts space separated strings into the 
        .then(res => res.data);                       // proper format for the picture API. e.g. 
      setCityUrl(cityPicUrl);                         // "new york" --> "new-york"
      // console.log('THIS IS POLLUTION STATS: ', cityPicUrl);
    };
    getCityPic();

  }, [query]);
  //                                                       SECOND API END

  return (
    <>
      <div className="center-container">
        <label htmlFor="dropdown">Choose a state:</label>
        <select id="dropdown" onChange={handleDropdownChange}>
          <option value={null}></option>
          {states.map((state, index) => {
            return (
              <option key={index} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </div>
      <div className="center-container">
        {Boolean(dropdownState) && (
          <Searchbar
            handleSearchbarChange={handleSearchbarChange}
            handleSubmit={handleSubmit}
            recommendedOptions={recommendedCities}
            search={search}
          />
        )}
        {apiCityData.length !== 0 && (
          <PollutionStats stats={apiCityData} city={query} cityUrl={cityUrl} />
        )}
      </div>
    </>
  );
};
export default Dropdown;

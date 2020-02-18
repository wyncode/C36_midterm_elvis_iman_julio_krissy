import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import PollutionStats from './PollutionStats';
import { generateStates } from '../index.jsx'

const Dropdown = () => {
  const states = generateStates();
  const [selectedCityCard, setSelectedCityCard] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [dropdownState, setDropdownState] = useState('');
  // These are the hooks that were defined in the Searchbar component before
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [apiCityData, setApiCityData] = useState({});
  // This is the hook that was defined in the PollutionStats component
  const [cityUrl, setCityUrl] = useState('');

  //                                                       FIRST API BEG
  const handleDropdownChange = event => {
    setDropdownState(event.target.value);
    setQuery('');
  };

  const handleSelectCity = card => {
    setSelectedCityCard([...selectedCityCard, card]);
    reset();
  };

  const reset = () => {
    setApiCityData({});
    setCityUrl('');
    setDropdownState('');
    setQuery('');
  }

  const removeCard = card => {
    dropdownState === '' ? setDropdownState(' ') : setDropdownState('')
    const indexToRemove = selectedCityCard.findIndex( ({stats}) => {
      return (stats.id === card.stats.id);
    })
    if (indexToRemove === -1) {
      reset();
      return;
    }
    selectedCityCard.splice(indexToRemove,1)
  }

  // This useEffect retrieves an array of all supported cities in a state
  // when the user chooses a state from the dropdown box. The cities array
  // is saved to the apiData state
  useEffect(() => {
    if (!dropdownState) return;

    const getApiData = async () => {
      const { data } = await axios.get(`/api/${dropdownState}`);
      setApiData(data.map(({ city }) => city));
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

  useEffect(() => {
    // Had to capitalize the first letter of the query because the stored 
    // city names in selectedCityCard are returned capitalized by the API
    if (!query || selectedCityCard.some( ({stats}) => stats.id === 
    `${query[0].toUpperCase()+query.slice(1,query.length)}-${dropdownState}`) ) 
    return;
    const fetchCityData = async () => {
      const requests = [
        axios.get(`/api/${dropdownState}/${query}`),
        axios.get(`/image/${query.split(' ').join('-')}`)
      ];
      const [
        { data: pollutionData },
        { data: cityPicData }
      ] = await Promise.all(requests);

      setApiCityData({ ...pollutionData, city: query, state: dropdownState });
      setCityUrl(cityPicData);
    };

    fetchCityData();
  }, [query]);
  //

  return (
    <>
      <div className="center-container">
        <div className="center-container">
          <label htmlFor="dropdown">Choose a state:</label>
          <select
            value={dropdownState}
            id="dropdown"
            onChange={handleDropdownChange}
          >
            <option value={null}>{dropdownState}</option>
            {states.map((state, index) => {
              return (
                <option key={index} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
        </div>
        {Boolean(dropdownState) && (
          <Searchbar
            handleSearchbarChange={handleSearchbarChange}
            handleSubmit={handleSubmit}
            cities={apiData}
            search={search}
          />
        )}
      </div>
      <div className="center-container">
        {selectedCityCard.map(card => (
          <PollutionStats
            key={card.stats.id}
            stats={card.stats}
            cityUrl={card.cityUrl}
            remove={removeCard}
          />
        ))}
        {apiCityData.id && (
          <PollutionStats
            stats={apiCityData}
            cityUrl={cityUrl}
            handleSelectCity={handleSelectCity}
            remove={removeCard}
          />
        )}
      </div>
    </>
  );
};
export default Dropdown;

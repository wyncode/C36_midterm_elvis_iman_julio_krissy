import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';

const Dropdown = () => {
  const [apiData, setApiData] = useState([]);
  const [dropdownState, setDropdownState] = useState('');

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

  const handleChange = event => {
    setDropdownState(event.target.value);
  };

  useEffect(() => {
    if (dropdownState == '') {
      return;
    }
    console.log('useeffectttttt', dropdownState);
    const getApiData = async () => {
      const cityList = await axios
        .get(`/api/${dropdownState}`)
        .then(res => res.data);
      setApiData(cityList);
    };
    getApiData();
    console.log('this is the api data: ', apiData);
  }, [dropdownState]);

  return (
    <>
      <div className="center-container">
        <label htmlFor="dropdown">Choose a state:</label>
        <select id="dropdown" onChange={handleChange}>
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
          <Searchbar state={dropdownState} cities={apiData} />
        )}
      </div>
    </>
  );
};
export default Dropdown;

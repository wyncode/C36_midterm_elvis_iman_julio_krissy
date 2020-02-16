import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PollutionStats from './PollutionStats';
const Searchbar = props => {
  //console.log(props.cities);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [apiData, setApiData] = useState([]);
  const handleChange = event => {
    // event.persist();
    // console.log(event.target.value)
    setSearch(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    setQuery(search);
  };
  // const renderStats = data => {
  // }
  useEffect(() => {
    if (query == '') {
      return;
    }
    const getApiData = async () => {
      const pollutionStats = await axios
        .get(`/api/${props.state}/${query}`)
        .then(res => res.data);
      setApiData(pollutionStats);
      // renderStats()
      console.log(pollutionStats);
    };
    getApiData();
  }, [query]);
  // const renderStats = data => {
  // }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City of..."
          onChange={handleChange}
        ></input>
      </form>
      <div className="center-container">
        {apiData.length !== 0 && (
          <PollutionStats stats={apiData} city={query} />
        )}
      </div>
    </>
  );
};
export default Searchbar;

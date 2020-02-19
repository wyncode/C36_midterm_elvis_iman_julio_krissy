import React from 'react';


const Searchbar = ({handleSubmit,handleSearchbarChange,cities}) => {
  return (
    <form id="searchbar-form" onSubmit={handleSubmit}>
      <input 
      id ="citySearchbar" 
      list="cityList" 
      // placeholder="City of ..."
      onChange={handleSearchbarChange}>
      </input>
      <datalist id="cityList">
        {cities.map((state, index) => {
          return (
            <option key={index} value={state}>
              {state}
            </option>
          );
        })}
      </datalist>
      <input type="submit"></input>
    </form>
  );
};
export default Searchbar;

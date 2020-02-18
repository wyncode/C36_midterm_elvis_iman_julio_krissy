import React from 'react';


const Searchbar = ({handleSubmit,handleSearchbarChange,cities}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input list="cityList" onChange={handleSearchbarChange}></input>
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

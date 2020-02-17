import React from 'react';

const Searchbar = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input list="cityList" onChange={props.handleSearchbarChange}></input>
      <datalist id="cityList">
        {props.cities.map((state, index) => {
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

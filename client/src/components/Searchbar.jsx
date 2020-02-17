import React from 'react';


const Searchbar = props => {
  return (
      <form onSubmit={props.handleSubmit}>
        <input list ="cityList" onChange={props.handleSearchbarChange}></input>
        <datalist id="cityList" >
            {Boolean(props.search) &&
                props.recommendedOptions()
            }
        </datalist>
        <input type="submit"></input>
      </form>
  );
};
export default Searchbar;

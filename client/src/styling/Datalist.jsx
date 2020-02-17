import React, {useState,useEffect} from 'react';
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

const Datalist = () => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setSearch(event.target.value.toLowerCase())
        console.log('THIS IS THE HANDLE CHANGE FUNCTION: ',event.target.value.toLowerCase())
    }

    const handleSubmit = event => {
        event.preventDefault();
        setQuery(search)
    }

    const recommendedCities = () => {
        const reducedStates = states.filter( state => {
            return (state.toLowerCase().slice(0,search.length)
                == search
            )
        })
        // console.log(reducedStates)
        return (
            reducedStates.map((state, index) => {
                return (
                  <option key={index} value={state}>
                    {state}
                  </option>
                );
              })
        )
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input list ="cityList" name="city" onChange={handleChange}></input>
            <datalist id="cityList" >
                {Boolean(search) &&
                    recommendedCities()
                }
            </datalist>
            <input type="submit"></input>
        </form>
    );

}

export default Datalist;
import React, { useState } from 'react';
import './App.css';
import CityInfo from './Components/CityInfo'; // Adjust path as necessary
import ForecastList from './Components/ForecastList'; // Adjust path as necessary

const App = () => {
    const [cityName, setCityName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        setSearchQuery(cityName); // Sets the search query to the current input value
    };

    return (
        <div className="App">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {searchQuery && <CityInfo cityName={searchQuery} />}
            {searchQuery && <ForecastList cityName={searchQuery} />}
        </div>
    );
};

export default App;

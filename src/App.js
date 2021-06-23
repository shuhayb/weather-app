import React, {useState} from 'react';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>

const api = {
  key: "d1abfd5ed42e17381e0d8e429bdeab07",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        console.log(result);
        });
    }
  } 

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app-warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
        />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="location-box"></div>
              <div className="location">{weather.name}</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;

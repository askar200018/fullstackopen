import { useEffect, useState } from 'react';
import axios from 'axios';

import CountryInfo from './CountryInfo';

const API_KEY = process.env.REACT_APP_API_KEY;

const SingleCountry = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country?.capital[0]}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [country.capital]);

  return (
    <div>
      <CountryInfo country={country} />
      {weather && (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <p>temperature {weather.main.temp} Celsius</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Temperature Icon"
          />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default SingleCountry;

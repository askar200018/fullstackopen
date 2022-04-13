import { useEffect, useState } from 'react';
import axios from 'axios';
import FilterResult from './components/FilterResult';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div>
        find countries
        <input value={query} onChange={handleQueryChange} />
        {filteredCountries.length > 0 && (
          <FilterResult countries={filteredCountries} />
        )}
      </div>
    </div>
  );
};

export default App;

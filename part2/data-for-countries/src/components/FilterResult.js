import CountryDetail from './CountryDetail';
import SingleCountry from './SingleCountry';

const FilterResult = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (countries.length > 1) {
    return (
      <div>
        {countries.map((country) => (
          <CountryDetail key={country.name.common} country={country} />
        ))}
      </div>
    );
  }
  return <SingleCountry country={countries[0]} />;
};

export default FilterResult;

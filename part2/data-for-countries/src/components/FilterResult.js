import CountryDetail from './CountryDetail';

const FilterResult = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  return (
    <div>
      {countries.map((country) => (
        <CountryDetail key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default FilterResult;

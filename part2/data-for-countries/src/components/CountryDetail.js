import { useState } from 'react';

const CountryDetail = ({ country }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        {country.name.common}
        <button onClick={() => setShow(!show)}>show</button>
      </div>
      {show && (
        <div>
          <h2>{country.name.common}</h2>
          <p>capital {country.capital[0]}</p>
          <p>area {country.area}</p>
          <div>
            <h4>languages</h4>
            <ul>
              {Object.entries(country.languages).map(([key, language]) => (
                <li key={key}>{language}</li>
              ))}
            </ul>
          </div>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
      )}
    </div>
  );
};

export default CountryDetail;

import { useState } from 'react';
import CountryInfo from './CountryInfo';

const CountryDetail = ({ country }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        {country.name.common}
        <button onClick={() => setShow(!show)}>show</button>
      </div>
      {show && <CountryInfo />}
    </div>
  );
};

export default CountryDetail;

import "../Country/Country.css";
import { useEffect, useState } from "react";
import Country from "../Country/Country";
import SelectCountry from "./SelectCountry/SelectCountry";

const Countries = () => {
  const [countries, setCountreis] = useState([]);
  const [selectCountry, setSelectCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountreis(data));
  }, []);

  function handleVisit(country) {
    let visitedCountry = [...selectCountry];
    if (!visitedCountry.includes(country)) {
      visitedCountry.push(country);
      setSelectCountry(visitedCountry);
    }
  }
  console.log(selectCountry);
  return (
    <div>
      <h2>Total Countries : {countries.length}</h2>
      <div>
        <h3>
          At least once, you selected the - {selectCountry.length} countries
          below
        </h3>
        <ul>
          {selectCountry.map((addedCountry) => (
            <SelectCountry
              key={addedCountry.ccn3}
              addedCountry={addedCountry}
            ></SelectCountry>
          ))}
        </ul>
      </div>

      <h3> Here! shows all Country </h3>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.ccn3}
            handleVisit={handleVisit}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

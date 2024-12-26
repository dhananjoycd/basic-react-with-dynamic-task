import "../Country/Country.css";
import { useEffect, useState } from "react";
import Country from "../Country/Country";
import SelectCountry from "../Countries/SelectCountry/SelectCountry";
import { getItem, setItem } from "../../utilies/localStorage";

const Countries = () => {
  const [countries, setCountreis] = useState([]);
  const [savedData, setSavedData] = useState(() => {
    return getItem("country");
  });

  const newData = [...savedData];

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountreis(data));
  }, []);

  function handleVisit(country) {
    if (!savedData.some((c) => c.ccn3 === country.ccn3)) {
      newData.push(country);
      setSavedData(newData);
      setItem(newData);
    } else {
      alert(`Dear, You have visied ${country.name.common} already`);
    }
  }

  return (
    <div className="flex  flex-col justify-center items-center">
      <h2 className="bg-red-500 p-3 rounded m-5">
        Total Countries: ---
        <span className="bg-black p-2 rounded-lg"> {countries.length}</span>
      </h2>
      <div>
        <h3>
          At least once, you selected the -
          <span className="text-emerald-400"> {savedData.length}</span>{" "}
          countries below
        </h3>
        <ul className="bg-rose-50 text-center text-red-900 p-5 rounded-md mt-2">
          {savedData.map((addedCountry) => (
            <SelectCountry
              key={addedCountry.ccn3}
              addedCountry={addedCountry}
            ></SelectCountry>
          ))}
        </ul>
      </div>

      <h3 className="bg-orange-400 m-3 p-3 rounded-md">
        {" "}
        Here! shows all Country{" "}
      </h3>

      <div className="country-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 m-2">
        {countries.map((country) => (
          <Country
            key={country.ccn3}
            handleVisit={handleVisit}
            country={country}
            saveCountry={savedData}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

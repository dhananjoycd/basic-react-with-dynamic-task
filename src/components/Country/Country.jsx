/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Country.css";
import { removeItem } from "../../utilies/localStorage";
const Country = ({ country, handleVisit }) => {
  const { name, flags } = country;
  let [visited, setVisited] = useState(false);

  function selectCountry(country) {
    visited = !visited;
    setVisited(visited);
    handleVisit(country);
  }
  function unMark(country) {
    visited = !visited;
    setVisited(visited);
    removeItem(country);
  }

  const css = "flex  flex-col justify-center items-center p-3 m-2";

  return (
    <div className="">
      <div className={visited ? `visited ${css}` : `each-country ${css}`}>
        <h3> {name.common}</h3> <hr />
        <img className="img-make" src={flags.png} /> <br />
        <button
          className={visited ? `disable-btn` : `btn`}
          onClick={() => selectCountry(country)}
        >
          {visited ? `You have already Visited ` : `Click to visit`}
        </button>{" "}
        <br />
        {visited ? (
          <button className="btn" onClick={() => unMark(country)}>
            Unmark Now
          </button>
        ) : (
          ``
        )}
      </div>
    </div>
  );
};

export default Country;

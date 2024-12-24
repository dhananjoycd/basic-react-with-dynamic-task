/* eslint-disable react/prop-types */
const SelectCountry = ({ addedCountry }) => {
  return <li> {addedCountry.name.common}</li>;
};

export default SelectCountry;

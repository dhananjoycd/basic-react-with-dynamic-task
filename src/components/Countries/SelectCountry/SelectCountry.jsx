/* eslint-disable react/prop-types */
const SelectCountry = ({ addedCountry }) => {
  return (
    <li>
      {addedCountry.name.common}
      <hr />
    </li>
  );
};

export default SelectCountry;

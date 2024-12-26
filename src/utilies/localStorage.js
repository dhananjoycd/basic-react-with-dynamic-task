function setItem(countryID) {
  localStorage.setItem("country", JSON.stringify(countryID));
}

function getItem(key) {
  const getData = JSON.parse(localStorage.getItem(key)) || [];
  return getData;
}

function removeItem(country) {
  let storedData = getItem("country");
  let newData = storedData.filter((c) => c.ccn3 !== country.ccn3);
  setItem(newData);
  location.reload();
}
export { getItem, setItem, removeItem };

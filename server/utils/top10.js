// filter top 10 states with most focus
const jsonData = require("./read_data");
const stateNames = require("./state_names");

const top10Filter = () => {
  const countByState = {};
  for (stateCode in stateNames) {
    countByState[stateNames[stateCode]] = 0;
  }

  jsonData.features.map((foco) => {
    countByState[foco.properties.estado] += 1;
  });

  return Object.entries(countByState)
    .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0))
    .slice(0, 10)
    .map((keyValuePair) => ({
      estado: keyValuePair[0],
      num_focos: keyValuePair[1],
    }));
};

module.exports = top10Filter;

/*

getSpeciesByIds.js

*/


// const data = require('./data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((id) => data.species.filter((specie) => specie.id === id)).flat();

console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));


// module.exports = getSpeciesByIds;
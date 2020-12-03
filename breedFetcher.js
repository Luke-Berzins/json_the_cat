const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (body === undefined) {
      error = "request from site failed";
      callback(error, null);
    }
    if (body !== undefined) {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        error = "invalid breed";
      }
      if (error) {
        callback(error, null);
      }
      if (!error) {
        callback(null, data[0].description);
      }
    }
  });
};


module.exports = { fetchBreedDescription };
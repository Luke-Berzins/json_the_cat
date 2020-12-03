const request = require('request');

const myArgs = process.argv.slice(2);
const breed = myArgs[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was
  }
  if (body === undefined) {
    return console.log("err: request failed");
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("error: input incorrect");
  } else {
    console.log(data[0].description);
  }
});



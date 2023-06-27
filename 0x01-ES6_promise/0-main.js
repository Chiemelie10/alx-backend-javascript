import getResponseFromAPI from "./0-promise";

const response = getResponseFromAPI();
console.log(response);
console.log(response instanceof Promise);
response.then(function(data) {
  console.log(data);
});

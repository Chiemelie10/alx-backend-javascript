import getResponseFromAPI from './0-promise';

const response = getResponseFromAPI();
console.log(response);
console.log(response instanceof Promise);
response.then((data) => {
  console.log(data);
});
response.then((error) => {
  console.error(error.message);
});

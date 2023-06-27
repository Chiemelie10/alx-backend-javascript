export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const project = 'JavaScript Promise';

    if (project) {
      resolve('Learning JavaScript Promise');
    } else {
      reject(Error);
    }
  });
}

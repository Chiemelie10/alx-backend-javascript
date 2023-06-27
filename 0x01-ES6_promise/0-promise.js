export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const project = 'JavaScript Promise';

      if (project) {
        resolve('Learning JavaScript Promise');
      } else {
        reject(Error);
      }
    }, 3000);
  });
}

export default function getResponseFromAPI() {
  const success = true;
  return new promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
}	

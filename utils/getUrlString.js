// @object
export default function getUrlString(_paramsObject) {
  let paramsString = ""; //Empty string

  const keysSorted = Object.entries(_paramsObject).sort(); //Sort keys

  for (const [key, value] of keysSorted) {
    //Check if value exists
    if (value) {
      if (Array.isArray(value)) {
        let arrayString = "";
        value.forEach(item => {
          arrayString += `${key}=${item}&`;
        });
        paramsString += arrayString;
      } else {
        paramsString += `${key}=${value}&`;
      }
    }
  }

  return paramsString;
}

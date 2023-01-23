export default function appendToEachArrayValue(array, appendString) {
  let value = array[idx];	
  for (let idx of array){
    array[idx] = appendString + value;
  }

  return array;
}

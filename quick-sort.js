function quickSort(arr) {
  if (arr < 2) {
    return arr;
  }
  let pivot = arr[0];
  let lesserArray = [];
  let greaterArray = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greaterArray.push(arr[i]);
    } else {
      lesserArray.push(arr[i]);
    }
  }

  return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
}

console.log(quickSort([5, 16, 8, 21, 11]));

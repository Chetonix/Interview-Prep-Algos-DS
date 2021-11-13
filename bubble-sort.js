function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// function swapElements () {
//     let temp = arr[j+1];
//     arr[j+1] = arr[j];
//     arr[j] = temp;
//     return (arr[j], arr[j+1]);

// }

// function swapElements (arr[j], arr[j+1]) {
//     return (arr[j+1], arr[j]);
// }

function bubbleSortOpt(arr) {
  let isSwapped = false;
  for (let i = 0; i < arr.length; i++) {
    isSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}
console.log(bubbleSortOpt([5, 16, 8, 21, 11]));

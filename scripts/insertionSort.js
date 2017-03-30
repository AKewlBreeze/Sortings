const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

export const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let holder = array[i];
    let j = i - 1;
    
    while (j >= 0 && array[j] > holder) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = holder;
  }
  return array;
}

insertionSort(array)

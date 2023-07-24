function heapSort(array) {
    function heapify(array, length, i) {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
  
      if (left < length && array[left] > array[largest]) {
        largest = left;
      }
  
      if (right < length && array[right] > array[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]]
        heapify(array, length, largest)
      }
    }
  
    let length = array.length;
  
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
      heapify(array, length, i);
    }
  
    for (let i = length - 1; i >= 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      length--;
      heapify(array, length, 0);
    }
  
    return array;
  }
  
  arr=[5,67,8,94,57]
  console.log(arr);
  heapSort(arr)
  console.log(arr);

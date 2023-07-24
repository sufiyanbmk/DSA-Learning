function quickSort(arr) {
    const stack = [];
    let pivotIndex = 0;
    let left = 0;
    let right = arr.length - 1;
  
    stack.push(left);
    stack.push(right);
  
    while (stack.length > 0) {
      right = stack.pop();
      left = stack.pop();
  
      pivotIndex = partition(arr, left, right);
  
      if (left < pivotIndex - 1) {
        stack.push(left);
        stack.push(pivotIndex - 1);
      }
  
      if (pivotIndex + 1 < right) {
        stack.push(pivotIndex + 1);
        stack.push(right);
      }
    }
  
    return arr;
  }
  
  function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
  
      while (arr[j] > pivot) {
        j--;
      }
  
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
  
    return i;
  }
  let arr = [3,12,4,23,36]
  console.log(quickSort(arr))
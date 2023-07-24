function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5));



  function recursiveFunction(arr, x, start, end) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
      console.log(`found elm at:${mid}`);
    }
    if (arr[mid] > x) {
      return recursiveFunction(arr, x, start, mid - 1);
    }
    else {
      return recursiveFunction(arr, x, mid + 1, end);
    }
  }
  recursiveFunction(array1, 2, 0, array1.length - 1);
  
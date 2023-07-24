function generateSubsequenceArray(arr, indices) {
    const subsequence = [];
    
    for (let i = 0; i < indices.length; i++) {
      const index = indices[i];
      console.log(arr[index])
      if (index >= 0 && index < arr.length) {
        subsequence.push(arr[index]);
      }
    }
    
    return subsequence;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5, 6, 7];
  const indices = [1, 3, 5];
  const subsequenceArray = generateSubsequenceArray(originalArray, indices);
  console.log(subsequenceArray);
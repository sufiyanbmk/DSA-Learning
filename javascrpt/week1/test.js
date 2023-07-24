function oddMultiplier(n) {
    let result = 1;
    let oddNumber = 1;
  
    for (let i = 0; i < n; i +=2) {
      result *= i;
      console.log(i)
    }
  
    return result;
  }
console.log(`hi ${oddMultiplier(4)}`)
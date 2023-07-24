// loop
var removeDuplicatesLoop = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  }

// set and forEach
var removeDuplicatesSet = function(nums){
    let i = 0;
    const set = new Set(nums)
    set.forEach(num=>{
        nums[i] = num;
        i++;
    })
    return set.size
}

//slice
var removeDuplicatesSlice = function(nums){
    for(let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i+1]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
}

 nums = [1,1,2]

console.log(removeDuplicatesSlice(nums))
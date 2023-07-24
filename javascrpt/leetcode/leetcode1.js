var runningSum = function(nums) {
    for(i =0; i<nums.length;i++){
        nums[i] = nums[i+1];
    }  
  
  };
  
  const result = runningSum([1,2,3,4])
  console.log(result)
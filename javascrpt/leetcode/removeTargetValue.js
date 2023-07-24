var removeElementLoop = function(nums, target) {
    let result = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] !== target){
            nums[result++] = nums[i];
        }
    }
    return result;
};

//slice
var removeElementsSlice = function(nums, target){
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] === target) {
            nums.splice(i,1)
            i--    
        }
    }
    return nums.length
}

//

const nums = [3,2,2,3];
console.log(removeElementsSlice(nums,2))
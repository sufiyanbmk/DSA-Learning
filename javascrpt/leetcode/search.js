// my method
var searchInsert = function(nums, target) {
    let result = null;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target || nums[i] > target || i === nums.length - 1){
            if(i===nums.length - 1){
                result = nums.length
            }else{
                result = i
            }
            return result;
        }
    }
    return result;   
};

//binary search
var searchInsertBinarySearch = function(nums, target){
    const n = nums.length
    if(n === 1 && nums[0] === target) return 0;
    let start = 0;
    let end = n;
    while(start < end){
        let mid = Math.floor(start+end)/2;
        if(target === nums[mid]) return mid;
        else if(target > nums[mid]){
            start = mid - 1;
        }else{
            return end = mid + 1
        }
    }
}


const nums = [1,3,5,6];
console.log(searchInsertBinarySearch(nums,7))
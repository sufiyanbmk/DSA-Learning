
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0 ; i < nums.length ; i++){
        console.log(map)
        var n = nums[i];
        if(map[target-n] >= 0){
            console.log("if")
            console.log(map[target-n])
            console.log(map)

            return [map[target-n],i]
        } 
        else {
            console.log("else")
            map[n] = i;   //use map to store the value and index position
        }
    }
};
let nums = [2,7,11,15]
console.log(twoSum(nums,9))
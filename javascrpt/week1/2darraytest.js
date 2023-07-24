let arr1 = [1,2,3];
let arr2 = [1,2,3]

function subarray(arr1,arr2){

    for(var i = 0 ; i < arr1.length; i++){
        for(var j = 0; j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                return 1;
            }
            else{
                return -1
            }
        }
    }
}

let result =  subarray(arr1,arr2)
if(result = 1){

    console.log("array is subsequence")
}
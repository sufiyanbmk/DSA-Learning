let arr = [1,2,3,4,5]
let start = 0;
let end = arr.length - 1;
let ans = 3;

function binary(arr,ans){
    while(start <= end){
        let mid = (start + end)/2;
        if(ans < arr[mid]){
            end = mid-1;
        }
        else if(ans > arr[mid]){
            start = mid - 1
        }
        else{
            return { position: mid + 1, value: arr[mid] };
        }
    }
    return -1;
}

let result =binary(arr,ans)
if(result == -1){
    console.log("not found")
}else{
    console.log("Found at position:", result.position);
      console.log("Value:", result?.value);
}
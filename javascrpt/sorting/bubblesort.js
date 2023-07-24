function bubleSort(arr){
    let swapped = false
    for(var i = 0; i <= arr.length; i++){
        for(var j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }

        }
        if(!swapped){
            break;
        }
    }
    return arr;
}
let arr = [4,1,3,3,2,5]
let result = bubleSort(arr);
console.log(result)
const insertationSort = arr =>{
    for(let i = 1; i <= arr.length - 1; i++){
        let current = arr[i];
        let  j = i - 1;
        while(j >= 0 && arr[j] >= current){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

let arr = [2,1,3,4,1,6,2]

let result = insertationSort(arr)
console.log(result)

 const selectionSort = arr =>{
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        // [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
    return arr;
 }
 let arr = [1,4,2,5,64,6,-1,7,6]
 let result = selectionSort(arr)
 console.log(result);


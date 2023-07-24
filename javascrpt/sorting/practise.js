function heapsort(arr){
    function heapify(arr,lenght,indx){
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if(left < lenght && arr[left] < arr[largest]){
            largest = left
        }
        else{
            
        }
    }
    let lenght = arr.lenght - 1
    for(let i = Math.floor(arr.length/2) - 1; i > 0;i--){
        heapify(arr, lenght ,i)
    }
}
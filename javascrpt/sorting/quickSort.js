// const quickSort = arr => {
//     if(arr.length <= 1){
//         return arr;
//     }
//     let pivot = arr[arr.length - 1]
//     const leftarray = [];
//     const rightarray = [];
//     for(const ele of arr.slice(0,arr.length - 1)){
//         ele < pivot ? leftarray.push(ele) : rightarray.push(ele)
//     }
//     return [...quickSort(leftarray),pivot,...quickSort(rightarray)];
// }

// const arr = [845,34,6,234,776,545,845];

// console.log(quickSort(arr))

const quickSort = arr =>{
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    const leftarray = [];
    const rightarray = []
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            leftarray.push(arr[i])
        }else{
            rightarray.push(arr[i])
        }
    }
    return [...quickSort(leftarray),pivot,...quickSort(rightarray)]
}
const arr = [845,34,6,234,776,545,845];

console.log(quickSort(arr))
function arrayToList(arr) {
    let head = null;
    let current = null;
    for (let i = 0; i < arr.length; i++) {
        
        let node = {
            data: arr[i],
            next: null
        };
  
        if (head === null) {
            head = node;
            current = node;
        } else {
            current.next = node;
            current = node;
        }
    }
  
    return head;
}
let arr = [1,2,3,4,5]
let result = arrayToList(arr);
console.log(result)
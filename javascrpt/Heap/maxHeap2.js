class Min{
   
    buildHeap(arr){ 
        for(let i =this.parentIndx(arr.length - 1); i >= 0; i--){
            this.shiftDown(i)
        }

    }
    shiftDown(indx){
        let endIndx = arr.length - 1;
        let leftIndx = this.leftChild(indx);
        while(leftIndx <= endIndx){
            let indxToShift;
            let rightIndx = this.rightChild(indx)
            if(rightIndx <= endIndx && arr[rightIndx] < arr[leftIndx]){
                indxToShift = rightIndx;
            }
            else{
                indxToShift = leftIndx;
            }
            if(arr[indx] > arr[indxToShift]){
                [arr[indx],arr[indxToShift]] = [arr[indxToShift],arr[indx]];
                indx = indxToShift;
                leftIndx = this.leftChild(indx)
            }else{
                console.log(arr)
                return;
            }
        }

    }
    shiftUp(indx){
        let parrent = this.parentIndx(indx)
        while(indx > 0 && arr[parrent] > arr[indx]){
            [arr[parrent],arr[indx]] = [arr[indx],arr[parrent]]
            indx = parrent;
            parrent = this.parentIndx(indx)
        }
    }
    peek(){
        return arr[0];
    }
    remove(){
        [arr[0], arr[arr.length-1]] = [arr[arr.length-1],arr[0]];
        arr.pop()
        this.shiftDown(0)
    }
    insert(value){
        arr.push(value)
        this.shiftUp(arr.length-1)
    }
    parentIndx(i){
        return (i - 1)/2
    }
    leftChild(i){
        return (i*2) +1;
    }
    rightChild(i){
        return (i * 2) + 2;
    }
    display(){
        for(let i = 0 ; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}
const heap = new Min()
let arr = [6,2,8,12,4,3]
heap.buildHeap(arr)
// heap.insert(10)
heap.remove()
heap.display()

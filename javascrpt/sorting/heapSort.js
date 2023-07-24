class MinHeap{
    constructor(){
        this.array = [];
    }

    // insert
    insert(val){
        this.array.push(val);
        console.log(this.bubbleUp(this.array.length - 1));
    }

    getParent(childIndex){ 
        return Math.floor((childIndex + 1) / 2) - 1;
    }

    getVal(index){
        return this.array[index];
    }

    swap(i, j){
        const temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }

    isCorrectParentChildRelationship(parentVal, childVal){
        return parentVal < childVal;
    }

    bubbleUp(childIndex){
        if(childIndex === 0) return;
        const parentIndex = this.getParent(childIndex);
        const parentVal = this.getVal(parentIndex);
        const childVal = this.getVal(childIndex);
        if(!this.isCorrectParentChildRelationship(parentVal, childVal)){
            this.swap(childIndex, parentIndex);
            this.bubbleUp(parentIndex);
        }
        return this
    }

    isEmpty(){
        return !this.array.length;
    }

    guardEmpty(){
        if(this.isEmpty()) throw new Error("Heap is Empty");
    }

    peek(){
        this.guardEmpty();
        return this.array[this.array.length - 1];
    }

    insertFromArray(arr){
        for(const num of arr) this.insert(num);
    }
    removeMin(){
        this.guardEmpty();
        const out = this.array.shift();
        if(this.isEmpty()) return out;

        this.array.unshift(this.array.pop()); 
        this.bubbleDown(0);
        return out;
    }

    getLeftChild(parentIndex){ 
        return ((parentIndex + 1) * 2) - 1;
    }

    getRightChild(parentIndex){
        return this.getLeftChild(parentIndex) + 1;
    }

    isValidIndex(index){
        return 0 < index && index < this.array.length;
    }

    bubbleDown(parentIndex){
        let parentVal = this.getVal(parentIndex);
        
        const leftIndex = this.getLeftChild(parentIndex);
        if(this.isValidIndex(leftIndex)){
            const leftVal = this.getVal(leftIndex);
            if(!this.isCorrectParentChildRelationship(parentVal, leftVal)){
                this.swap(leftIndex, parentIndex);
                this.bubbleDown(leftIndex);
                parentVal = leftVal;
            }
        }

        const rightIndex = this.getRightChild(parentIndex);
        if(this.isValidIndex(rightIndex)){
            const rightVal = this.getVal(rightIndex);
            if(!this.isCorrectParentChildRelationship(parentVal, rightVal)){
                this.swap(rightIndex, parentIndex);
                this.bubbleDown(rightIndex);
            }
        }
    }
}

// TESTS //
const arr = [23,34,45,56,786543234,0,2547];

function heapSort(arr){
    const minHeap = new MinHeap;
    minHeap.insertFromArray(arr); // O(nlogn)
    const out = new Array(arr.length);
    let i = 0;
    while(!minHeap.isEmpty()){
        out[i++] = minHeap.removeMin();
    }
    return out;
}

console.log(heapSort(arr));
class MaxHeap {
  constructor() {
    this.value = [41, 39, 33, 18, 27, 12];
  }
  insert(value) {
    let insertIndx = this.value.length;
    this.value[insertIndx] = value;
    console.log(this.bubbleup());
  }
  bubbleup() {
    let Indx = this.value.length - 1;
    let element = this.value[Indx];
    while (Indx > 0) {
      let parentIndx = Math.floor((Indx - 1) / 2);
      let parentElement = this.value[parentIndx];
      if (parentElement > element) break;
      this.value[parentIndx] = element;
      this.value[Indx] = parentElement;
      Indx = parentIndx;
    }
    return this;
  }

  remove() {
    if (this.value.length === 0) return null;
    if (this.value.length === 1) return this.heap.pop();
    const removed = this.value[0];
    this.value[0] = this.value.pop();
    this.heapifyDown();
    return removed;
  }

  heapifyDown() {
    let index = 0;
    const length = this.value.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild > this.value[index]) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild > this.value[index]) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      [this.value[index], this.value[swap]] = [this.value[swap], this.value[index]];
      index = swap;
    }
  }
}

const heap = new MaxHeap();
console.log(heap.insert(45));
// console.log(heap.remove())

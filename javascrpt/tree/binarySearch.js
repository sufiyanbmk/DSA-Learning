class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearch {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (current.value > value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right == null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    while (current) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else if (current.value === value) {
        return current;
      }
    }
    return false;
  }
  bredthFirstSearch(){
    let queue = [this.root];
    let result = [];
    let temp;

    while(queue.length){
      temp = queue.shift()
      result.push(temp.value)
      if(temp.left) {
        queue.push(temp.left)
      }
      if(temp.right){
        queue.push(temp.right)
      }
    }
    return result;
  }
  depthFirstSearchPreorder(){
    let result = [];
    let current = this.root;
    
    function dfsRecursive(node){
      result.push(node.value);
      if(node.left){
        dfsRecursive(node.left)
      }
      if(node.right){
        dfsRecursive(node.right)
      }
    }
    dfsRecursive(current);
    return result;
  }

  depthFirstSearchPostorder(){
    let result = [];
    let current = this.root;
    
    function dfsRecursive(node){
      if(node.left){
        dfsRecursive(node.left)
      }
      if(node.right){
        dfsRecursive(node.right)
      }
      result.push(node.value);
    }
    dfsRecursive(current);
    return result;
  }
  depthFirstSearchInorder(){
    let result = [];
    let current = this.root;
    
    function dfsRecursive(node){
      if(node.left){
        dfsRecursive(node.left)
      }
      result.push(node.value);
      if(node.right){
        dfsRecursive(node.right)
      }
    }
    dfsRecursive(current);
    return result;
  }
}

const tree = new BinarySearch();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
 
// console.log(tree.lookup(100)); 
// console.log(tree.bredthFirstSearch())
console.log(tree.depthFirstSearchPreorder())
console.log(tree.depthFirstSearchPostorder())
console.log(tree.depthFirstSearchInorder())
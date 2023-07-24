class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class Binarysearchtree {
    constructor() {
      this.root = null;
    }
    isempty() {
      return this.root === null;
    }
    insert(value) {
      const node = new Node(value);
      if (this.isempty()) {
        this.root = node;
      } else {
        this.insertNode(this.root, node);
      }
    }
  
    insertNode(root, node) {
      if (node.value < root.value) {
        if (root.left === null) {
          root.left = node;
        } else {
          this.insertNode(root.left, node);
        }
      } else {
        if (root.right === null) {
          root.right = node;
        } else {
          this.insertNode(root.right, node);
        }
      }
    }
  
    check(value, root = this.root) {
      if (!root) {
        return false
      } else {
        if (root.value === value) {
          return true
        } else if (root.value > value) {
          return this.check(value, root.left)
        } else {
          return this.check(value, root.right)
        }
      }
    }
  
    preorder(root = this.root) {
      if (root) {
        console.log(root.value);
        this.preorder(root.left);
        this.preorder(root.right);
      }
    }
  
    inorder(root = this.root) {
      if (root) {
        this.inorder(root.left);
        console.log(root.value);
        this.inorder(root.right);
      }
    }
  
    postOrder(root = this.root) {
      if (root) {
        this.postOrder(root.left);
        this.preorder(root.right);
        console.log(root.value);
      }
    }
    min(root = this.root) {
      if (!root.left) {
        return root;
      } else {
        return this.min(root.left);
      }
    }
  
    max(root = this.root) {
      if (!root.right) {
        return root;
      } else { 
        return this.max(root.right);
      } 
    }
  
    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  
    deleteNode(root, value) {
      if (root === null) {
        return root;
      }
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
       } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        }
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
      return root;
    }
  
     closestValueInBST(target,node=this.root) {
      let closest = node.value;
      while (node) {
        if (Math.abs(node.value - target) < Math.abs(closest - target)) {
          closest = node.value;
        }
        if (node.value < target) {
          node = node.right;
        } else if (node.value > target) {
          node = node.left;
        } else {
          return node.value;
        }
      }
      return closest;
    }
    isBST(node, prevValue = null) {
      if (!node) {
        return true;
      }
      if (!isBST(node.left, prevValue)) {
        return false;
      }
      if (prevValue !== null && node.value <= prevValue) {
        return false;
      }
      prevValue = node.value;
      if (!isBST(node.right, prevValue)) {
        return false;
      }
      return true;
    }
    
  }
  
  let bst = new Binarysearchtree();
  bst.insert(5);
  bst.insert(111);
  bst.insert(15);
  console.log(bst);
  console.log(bst);
  bst.insert(3);
  console.log(bst.isBST())
  // bst.min()
  // console.log(bst.max())
  bst.insert(7);
  // console.log(bst.check(7))
  // bst.inorder();
  // console.log("+++++++++++");
  bst.delete(7);
  // bst.inorder();
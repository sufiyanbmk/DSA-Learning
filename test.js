class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Binarysearchtree{
    constructor(){
        this.root = null;
    }
    insert(value){
        console.log(value)
        const newnode = new Node(value)
        if(this.root === null){
            this.root = newnode
            return
        }
        else{
            let current = this.root;
            while(true){
                if(current > value){
                    
                    if(!current.left){
                        current.left = newnode;
                    }
                    current = current.left 
                }
                else{
                    if(!current.right){
                        current.right = newnode
                    }
                    current = current.right
                }
            }
        }
        return this;

    }
    validBst(){
        this.isBst(this.root,-Infinity,+Infinity)
    }
    isBst(root,min,max){
        if(root === null){
            return true
        }
        if(min !== null && root.value < min){
            return false;
        }
        if(max !== null && root.value > max ){
            return false;
        }
        let left = this.isBst(root,min,root.value);
        let right = this.isBst(root,root.value,max)
        return left && right;
    }

    inorder(){
        let result = [];
        let current = this.root;
        function recursiveinorder(current){
            if(!current.left){
                current = current.left
            }
            result.push(current)
            if(!current.right){
                current = current.right
            }
        }

        recursiveinorder(current)
        return result;
    }

}

const complet = new Binarysearchtree()
complet.insert(2)
complet.insert(5)
complet.insert(6)

console.log(complet.inorder())
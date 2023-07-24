class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.length = 0;
    }
    push(value){
        const newNode = new Node(value)
        if(this.top === null){
            this.top = newNode
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++
    }
    pop(){
        if(this.top === null){
            return null;
        }
        this.top = this.top.next;
        this.length-- ;
        return this;
    }
}

const mystack = new Stack()

mystack.push(100)
mystack.push(200)
mystack.push(300)

console.log(mystack.pop())

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value)
        if(this.top === null){
            this.top = newNode;
            this.bottom = newNode
        }else{
            // let holdingTop = this.top;
            newNode.next=this.top;
            this.top = newNode;
        }
        this.length++
        return this;
    }
    pop(){
        if(this.top == null){
            return null;
        }
        // let holdingTop = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const Mystack = new Stack()
Mystack.push('google')
Mystack.push('twiter')
console.log(Mystack.push('facebook'))

// console.log(Mystack.peek())
console.log(Mystack.pop())
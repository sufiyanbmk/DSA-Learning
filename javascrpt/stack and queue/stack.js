class Stack{
    constructor() {
        this.item = [];
        this.count = 0;
    }
    push(element){
        this.item[this.count] = element;
        this.count++;
        return this.count - 1 ;
    }
    pop(){
        let deleteItem = this.item[this.count - 1];
        console.log(deleteItem)
        this.count--;
        for(let i = 0; i < this.item.length; i++) {
            console.log(this.item[i])
        }
        return 1;
    }
}


const stack = new Stack();

stack.push(20)
stack.push(10)
stack.push(30)

stack.pop()
console.log(stack)
class Node{
    constructor(value,next=null){
        this.data=value
        this.next=next
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }

    insertFirst(value){
        this.head=new Node(value,this.head)
        this.size++
    }

    insertLast(value){
        let node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
           let current=this.head
           while(current.next){
            current=current.next
           }
           current.next=node
           this.size++
        }
    }

    insertAt(data,index){
        if(index>0&&index>this.size) return -1

        if(index==0){
            this.insertFirst(data)
        }
        const node=new Node(data)
        let current,previous;
        current=this.head
        let count=0;
        while(count<index){
            previous=current
            count++
            current=current.next
        }
        node.next=current;
        previous.next=node
        this.size++
    }

    getAt(index){
        let current=this.head
        let count=0
        while(current){
            if(count==index){
                console.log(current.data);
                return
            }
            count++
            current=current.next
        }
        console.log(`elm not found`);
    }

    removeAt(index){
        if(index>0&&index>this.size) return -1
        let current=this.head
        let previous;
        let count=0;
        if(index==0){
            this.head=current.next
        }else{
            while(count<index){
                count++
                previous=current
                current=current.next
            }
            previous.next=current.next
            this.size--
        }
    }

    reverse() {
        if (this.head === null) return;
    
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
      
        // traverse list and adjust links
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = null;
        }
        this.head = prevNode; // reset head
    }

    print(){
        let current=this.head
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
    removedupli(){
        let current=this.head
        while(current.next){
            if(current.data==current.next.data){
                current.next=current.next.next
            }else{
                current=current.next
            } 
        }
    }
}

let ll=new LinkedList()
ll.insertFirst(3)
ll.insertFirst(1500)
ll.insertFirst(400)
ll.insertFirst(30)
ll.insertLast(3)
ll.print()

ll.removedupli()

ll.print()
public class doublelinked {
  class node{
    int data;
    node next;
    node prev;

    node(int data){
        this.data = data;
    }
    
    public node head = null;
    public node tail = null;
    public void addnode(int data){
        node nn = new node(data);
        if(head == null){
            head = nn;
        }
        else{
            tail.next = nn;
            nn.prev = tail;

        }
        tail = nn;
    }
    public void display(){
        if(head == null){
            System.out.println("empty");
        }
        else{
            node temp = head;
            while(temp != null){
                System.out.println(temp.data);
                temp= temp.next;
            }
        }
    }
}

public static void main(String[] args) {
    
}   
}

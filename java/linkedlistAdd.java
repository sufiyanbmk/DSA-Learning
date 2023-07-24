public class linkedlistAdd {
    class Node{
        int data;
        Node next;
        
        Node (int data){
            this.data = data;
        }
    }
    public Node head = null;
    public Node tail = null;
     
    public void addnode(int data){
        Node newnode = new Node(data);
        
        if(head == null){
            head = newnode;
        }
        else{
            tail.next = newnode;
        }
        tail = newnode;
    } 
    public void deletenode(int data){
        Node temp = head,prev=null;
        if(temp != null && temp.data == data){
            head = temp.next;
            return;
        }
        while(temp != null && temp.data != data){
            prev = temp;
            temp = temp.next;
        }
        if(temp == null){
            return;
        }
        if(temp == tail){
            tail = prev;
            tail.next = null;
            return;
        }
        prev.next = temp.next;
    }
    public void insertAfter(int data,int insert) {
        Node nn =new Node(data);
        Node temp = head;
        while(temp != null && temp.data != data){
            temp = temp.next;
        }
        if(temp == null){
            return;
        }
        if(temp == tail){
            tail.next = nn;
            tail = nn;
        }
        nn.next = temp.next;
        temp.next = nn;

    }
    public void distinct(){
        Node curr = head;
        Node next = curr.next;
        while(next != null){
            if(curr.data == next.data){
                curr.next = next.next;
              }
              else{
                curr = next;
            }
            next = next.next;

        }

    }
    public void display() {
        if(head == null){
            System.out.println("empty");
            return;
        }else{
            Node temp = head;
            while(temp != null){
                System.out.println(temp.data);
                temp = temp.next;
            }
        }
    }
    public static void main(String[] args) {
        linkedlistAdd list = new linkedlistAdd();
        list.addnode(10);
        list.addnode(20);

        list.display();
        list.deletenode(50);
        list.display();
        }
}



const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   let count = position;
   let thead = head;
   while(count > 1){
       thead = thead.next;
       count--;
   }
   if(thead.next.next === null){
       thead.next = null;
   }else{
       thead.next = thead.next.next;
   }
   return head;
}


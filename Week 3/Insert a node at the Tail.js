
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let newNode = new LinkedListNode(data);
    let thead = head;
    if(head === null){
        head = newNode;
    }else{
        while(thead.next !== null){
            thead = thead.next;
        }
        thead.next = newNode;
    }
    return head;
}


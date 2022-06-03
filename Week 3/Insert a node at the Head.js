
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let newNode = new LinkedListNode(data);
    if(head === null){
        head = newNode;
    }else{
        newNode.next = head;
        head = newNode;
    }
    return head;
}


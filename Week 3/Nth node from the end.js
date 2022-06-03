const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    head = reverse(head);
    let count = n;
    while(count > 1){
        head = head.next;
        count--;
    }
    return head.data;
}

function reverse(head){
    let prev = null;
    let cur = head;
    var next = null;
    while (cur != null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        }
    head = prev;
    return head;
}

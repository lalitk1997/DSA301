const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    let thead = head;
    let phead = head;
    let count = 0;
    while(thead.next !== null){
        thead = thead.next;
        count++;
    }
    count++;
    if(count % 2 === 0){
        count = Math.ceil(count/2);
        count++;
    }else{
        count = Math.ceil(count/2);
    }

    while(count > 1){
        phead = phead.next;
        count--;
    }
    return phead.data;
};


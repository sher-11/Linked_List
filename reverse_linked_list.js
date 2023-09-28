class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;

    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    data = prev;
    return data;
}

//By Recursion
function reverse(head) {
    if (head == null || head.next == null)
    return head;

    var rest = reverse(head.next);
    head.next.next = head;

    head.next = null;

    return rest;
}
        
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);


// console.log("Reversed Linked List: ",reverseLinkedList(head));
console.log("Reversed Linked List by Recursion",reverse(head));

class _Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    // Relink pointers
    previousNode.next = currNode.next;
  }

  getLeft(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    // Relink pointers
    currNode.next = null;
    return;
  }

  getRight(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    // Relink pointers
    this.head = currNode.next;
    // console.log(currNode);
    return;
  }

  insertBefore(item, itemBefore) {
    // Check if list is empty
    if (this.head === null) {
      this.insertFirst(item);
      console.log("List was empty - added as first item");
      return;
    }

    let previous = this.head;
    let current = this.head;
    // Check to make sure if item is what im looking for and whether it's last
    while (current.next !== null && current.value !== itemBefore) {
      previous = current;
      current = current.next;
    }
    // Check if item found and is the first item on list
    if (this.head === current && current.value === itemBefore) {
      this.head = new _Node(item, current);
    }
    // Check if item found and is not the first item on list
    else if (current.value === itemBefore) {
      return (previous.next = new _Node(item, current));
    }
    // All else
    else {
      console.log("Item not found");
      return;
    }
  }

  insertAfter(item, itemAfter) {
    if (this.head === null) {
      this.head = new _Node(item);
      console.log("This list was empty - added as first item");
      return;
    }
    let current = this.head;

    while (current.next !== null && current.value !== itemAfter) {
      current = current.next;
    }
    if (current.value !== itemAfter) {
      console.log("Item not found");
      return;
    }
    return (current.next = new _Node(item, current.next));
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.head = new _Node(item);
      console.log("This list was empty - added as first item");
      return;
    }

    switch (position) {
      case 0:
        console.log("Cannot insert position at 0");
        return;
      case 1:
        this.head = new _Node(item, this.head);
        return;
      default:
        let count = 1;
        let current = this.head;
        let previous = this.head;
        while (count < position && current.next !== null) {
          previous = current;
          current = current.next;
          count++;
        }
        if (current.next === null) {
          console.log("Position exceeded length of list");
          return;
        } else {
          previous.next = new _Node(item, current);
        }
    }
  }
}

module.exports = LinkedList;

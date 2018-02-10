// implement a singly linked list

class Node {
  constructor(data, next) {
    // if data is already a node, return it (allows for methods to take in data or nodes)
    if (data instanceof Node) return data;
    // set data property on Node
    this.data = data;
    // set next property: if next is not specified,
    // (avoiding default param of null to cover edge case--see test)
    this.next = next === undefined
    // default to null
    ? null
    // if next is a Node,
    : next instanceof Node
    // set to next
    ? next
    // otherwise, next is data; set to a new Node w/ that data
    : new Node(next);
  }
}

class LinkedList {
  constructor(head, ...data) {
    // if head not given
    head === undefined
    // default to null
    ? this.head = null
    // otherwise, set list's head to head and push the rest of the data
    : this.push(head, ...data);
  }
  push(datum, ...data) { // O(1) to add one item, O(n) to add multiple
    // save reference to old tail
    const oldTail = this.tail;
    // save reference to new tail
    const newTail = new Node(datum);
    // if LinkedList is not empty (head/tail aren't null),
    if (oldTail) {
      // set old tail's next property to new tail
      oldTail.next = newTail;
    } else {
      // if empty, set head to newTail
      this.head = newTail;
    }
    // set tail property to new tail
    this.tail = newTail;
    // if multiple pieces of data were passed in, call pushBatch
    if (data.length) this.pushBatch(data);
  }
  pushBatch(data) { // O(n)
    // call push on each piece of data
    for (const datum of data) this.push(datum);
  }
  getLast() {
    return this.tail;
  }
  *[Symbol.iterator]() {
    // start at head
    let node = this.head;
    // if head isn't null (non-empty linked list)
    if (node) {
      // until node is null
      while(node) {
        // yield each node
        yield node;
        // and set node to next node
        node = node.next;
      }
    }
  }
  traverse(fn) { // O(n)
    // iterate through nodes
    let i = -1;
    for (const node of this) {
      // apply fn to each node
      fn(node, ++i, this);
    }
  }
  pop() { // O(n) to update tail since this isn't a doubly linked list
    // save reference to last Node
    const last = this.getLast();
    // iterate until node.next is last
    this.traverse(node => {
      if (node.next === last) {
        // separate last from list by setting the previous Node's next to null
        node.next = null;
        // set tail to previous Node
        this.tail = node;
      }
    });
    // return the popped Node
    return last;
  }
  size() { // O(n) looping for size rather than increment/decrement w/ each operation
    // initialize size at 0
    let size = 0;
    // if list is not empty,
    if (this.head) {
      // iterate through nodes
      this.traverse((node, i) => {
        // if node is the tail, set size to i + 1 since indices are zero-based
        if (node === this.tail) size = i + 1;
      });
    }
    return size;
  }
  insertAt(index, data) {
    // if index is < 0, throw an error
    if (index < 0) throw new Error('insertAt: index must be > -1');
    // if list is empty set head/tail to data, regardless of index
    if (!this.head) return this.push(data);
    // if index is 0,
    if (index === 0) {
      // set head to data, and head's next to old head
      this.head = new Node(data, this.head);
      return;
    }
    // traverse list for all other cases
    let done;
    // pass on refactoring further to use break instead of done flag
    this.traverse((node, i) => {
      if (done) return;
      // if node is the tail,
      if (node === this.tail) {
        // push the data
        this.push(data);
        // to avoid stack overflow, set done flag to true
        return done = true;
      }
      // if node is the node before specified index
      if (i + 1 === index) {
        // save node.next
        const next = node.next;
        // set next to new Node and relink next
        node.next = new Node(data, next);
        // to avoid stack overflow, set done flag to true
        done = true;
      }
    });
  }
  copy() {
    // initialize copy (empty array)
    const copy = [];
    // traverse the original LinkedList, pushing each Node's data to the copy
    this.traverse(n => copy.push(n.data));
    // return a new LinkedList based on the copied data
    return new LinkedList(...copy);
  }
  filter(fn) {
    // initialize empty array to hold filtered Nodes
    const filtered = [];
    // initialize i at -1
    let i = -1;
    // iterate through Nodes
    for (let node of this) {
      // apply fn to each Node,
      if (fn(node, ++i, this)) {
        // and push it to filtered if fn returns true
        filtered.push(node.data);
      }
    }
    // return a new LinkedList, with data passed in from filtered
    return new LinkedList(...filtered);
  }
  map(fn) {
    // initialize empty array to hold mapped Nodes
    const mapped = [];
    // intialize i at -1
    let i = -1
    // loop through nodes
    for (let node of this) {
      // save reference to original node
      const original = node;
      // apply map fn to node and push it to mapped
      mapped.push(fn(node, ++i, this));
      // reset node on original LinkedList to prevent mutation
      node = original;
    }
    // return a new LinkedList, with data passed in from mapped
    return new LinkedList(...mapped);
  }
  clear() {
    this.head = null;
    this.tail = null;
  }
}

module.exports = {Node, LinkedList};

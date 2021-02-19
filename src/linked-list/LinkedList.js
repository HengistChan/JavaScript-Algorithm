import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  /**
   * clear LinkedList
   */
  clear() {
    this.size = 0;
    this.head = null;
  }

  /**
   * add node
   * @param element
   * @param index
   */
  add(element, index = this.size) {
    this.checkIndexRange(index);

    if (index === 0) {
      this.head = new LinkedListNode(element);
    } else {
      let pre = this.node(index);

      pre.next = new LinkedListNode(element, pre.next);
    }
    this.size++;
  }

  /**
   * remove a node by index
   * @param index
   */
  remove(index = this.size - 1) {
    this.checkIndexRange(index);

    let node = this.head;
    if(index === 0) {
      this.head = this.head.next;
    } else {
      let pre = this.node(index);
      node = pre.next;
      pre.next = node.next;
    }
    this.size--;

    return node.data;
  }

  /**
   * get pre_index node
   * @param index
   * @return LinkedListNode
   */
  node(index) {
    this.checkIndexRange(index);
    let node = this.head;
    for (let i = 0; i < index - 1; i++) {
      node = node.next;
    }
    return node;
  }

  /**
   * toString
   * @returns {string}
   */
  toString() {
    let str = '[', node = this.head;
    for (let i = 0; i < this.size; i++) {
      if (i !== 0)
        str += ',';
      str += node.data.toString();
      node = node.next;
    }
    str += ']';
    return str;
  }

  checkIndexRange(index) {
    if (index < 0 || index > this.size) {
      throw new Error('index out of bounds');
    }
  }
}
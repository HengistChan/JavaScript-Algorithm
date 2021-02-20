import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  DATA_NOT_FOUND = -1;

  constructor(comparatorFunc = (a, b) => a - b === 0) {
    this.size = 0;
    this.head = null;
    this.comparator = comparatorFunc;
  }

  /**
   * clear LinkedList
   */
  clear() {
    this.size = 0;
    this.head = null;
  }

  /**
   * get data by index
   * @param index
   * @returns {*}
   */
  get(index) {
    return this.node(index).data;
  }

  /**
   * set data by index and return old data
   * @param index
   * @param data
   * @returns {*}
   */
  set(index, data) {
    let node = this.node(index);
    let old = node.data;
    node.data = data;
    return old;
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
      let pre = this.node(index - 1);

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
      let pre = this.node(index - 1);
      node = pre.next;
      pre.next = node.next;
    }
    this.size--;

    return node.data;
  }

  /**
   * get index by data
   * @param data
   * @returns {number}
   */
  indexOf(data) {
    let node = this.head;
    if(data === null) {
      for(let i = 0 ; i < this.size ; i++) {
        if(node.data === null) return i;
        node = node.next;
      }
    } else {
      for(let i = 0 ; i < this.size ; i++) {
        if(this.comparator(data, node.data)) return i;
        node = node.next;
      }
    }

    return this.DATA_NOT_FOUND;
  }

  /**
   * get node by index
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
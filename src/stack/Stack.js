class Stack {
  constructor() {
    this.data = [];
  }

  clear() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  push(el) {
    this.data.push(el);
  }

  pop() {
    return this.data.pop();
  }

  top() {
    return this.data[this.size() - 1];
  }
}
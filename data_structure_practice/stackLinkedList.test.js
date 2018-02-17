const Stack = require('./stackLinkedList');
const {LinkedList} = require('./doublyLinkedList');

const {expect} = require('chai');

describe('Stack class', () => {
  const stack = new Stack();
  it('should create an instance of Stack', () => {
    expect(stack instanceof Stack).to.be.true;
  });
  it('should use a LinkedList for storage', () => {
    expect(stack.storage instanceof LinkedList).to.be.true;
  });
  it('should add data to its storage', () => {
    expect(new Stack(1, 2, 3).storage).to.eql(new LinkedList(1, 2, 3));
  });
});
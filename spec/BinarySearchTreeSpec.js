const chai = require('chai');
const expect = chai.expect;
const BinarySearchTree = require('../src/BinarySearchTree.js');

describe('Binary Search Tree', function() {

  let binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(50, 50);
  });

  describe('depthFirstTraverse()', function() {
    it('should traverse the binary tree in depth-first order', function() {
      binarySearchTree.left = new BinarySearchTree(20, 20);
      binarySearchTree.right = new BinarySearchTree(75, 75);
      binarySearchTree.left.left = new BinarySearchTree(13, 13);
      binarySearchTree.left.right = new BinarySearchTree(43, 43);
      binarySearchTree.right.left = new BinarySearchTree(62, 62);
      binarySearchTree.right.left.right = new BinarySearchTree(65, 65);
      const traversedNodes = [];
      const log = function(node) {
        traversedNodes.push(node.key);
      };
      binarySearchTree.depthFirstTraverse(log);
      const expected = '50 20 13 43 75 62 65'
      expect(traversedNodes.join(' ')).to.be.equal(expected);
    });
  });

  describe('breadthFirstTraverse()', function() {
    it('should traverse the binary tree in breadth-first order', function() {
      binarySearchTree.left = new BinarySearchTree(20, 20);
      binarySearchTree.right = new BinarySearchTree(75, 75);
      binarySearchTree.left.left = new BinarySearchTree(13, 13);
      binarySearchTree.left.right = new BinarySearchTree(43, 43);
      binarySearchTree.right.left = new BinarySearchTree(62, 62);
      binarySearchTree.right.left.right = new BinarySearchTree(65, 65);
      const traversedNodes = [];
      const log = function(node) {
        traversedNodes.push(node.key);
      };
      binarySearchTree.breadthFirstTraverse(log);
      const expected = '50 20 75 13 43 62 65'
      expect(traversedNodes.join(' ')).to.be.equal(expected);
    });
  });
});

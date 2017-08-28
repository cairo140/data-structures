const chai = require('chai');
const expect = chai.expect;
const BinarySearchTree = require('../src/BinarySearchTree.js');

describe('Binary Search Tree', function() {

  let binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(50, 50);
  });

  const buildSimpleTestTree = function() {
    binarySearchTree.left = new BinarySearchTree(20, 20);
    binarySearchTree.right = new BinarySearchTree(75, 75);
    binarySearchTree.left.left = new BinarySearchTree(13, 13);
    binarySearchTree.left.right = new BinarySearchTree(43, 43);
    binarySearchTree.right.left = new BinarySearchTree(62, 62);
    binarySearchTree.right.left.right = new BinarySearchTree(65, 65);
  };

  describe('depthFirstTraverse()', function() {

    it('should traverse the binary tree in depth-first order', function() {
      buildSimpleTestTree();
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
      buildSimpleTestTree();
      const traversedNodes = [];
      const log = function(node) {
        traversedNodes.push(node.key);
      };
      binarySearchTree.breadthFirstTraverse(log);
      const expected = '50 20 75 13 43 62 65'
      expect(traversedNodes.join(' ')).to.be.equal(expected);
    });
  });

  describe('search()', function() {
    it('should return the correct value when searching binary tree that contains a node with a matching key', function() {
      buildSimpleTestTree();
      const testKeyValues = [20, 75, 13, 43, 62, 65];
      testKeyValues.forEach(testValue => {
        expect(binarySearchTree.search(testValue)).to.be.equal(testValue);
      });
    });

    it('should return undefined if the key being searched for does not exist in the binary tree', function() {
      buildSimpleTestTree();
      expect(binarySearchTree.search(100)).to.be.equal(undefined);
    });
  });
});

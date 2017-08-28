const BinarySearchTree = function(key, value) {
  this.left = null;
  this.right = null;
  this.key = key;
  this.value = value;
};

BinarySearchTree.prototype.depthFirstTraverse = function(callback) {
  callback(this);
  if (this.left) {
    this.left.depthFirstTraverse(callback);
  }
  if (this.right) {
    this.right.depthFirstTraverse(callback);
  }
};

BinarySearchTree.prototype.breadthFirstTraverse = function(callback) {
};

BinarySearchTree.prototype.search = function(key) {
  return 0;
};

BinarySearchTree.prototype.insert = function(key, value) {
};

module.exports = BinarySearchTree;

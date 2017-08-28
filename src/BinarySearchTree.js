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

 module.exports = BinarySearchTree;

const arrayToTree = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(rawArray) {
    this.rawArray = rawArray;
    this.arr = this.sortAndSimplify(rawArray);
    this.root = this.buildTree(this.arr);
  }

  sortAndSimplify(array) {
    let sortedAndRemovedArray = array
      .filter((value, index) => array.indexOf(value) === index)
      .sort(function (x, y) {
        return x - y;
      });

    return sortedAndRemovedArray;
  }

  buildTree(array) {
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2);

    if (start > end) {
      return null;
    }

    let newNode = new Node(
      array[mid],
      this.buildTree(array.slice(start, mid)),
      this.buildTree(array.slice(mid + 1, end + 1))
    );

    return newNode;
  }

  insert(data) {
    let newNode = new Node(data);
    let currentNode = this.root;
    let lookingForLeaf = true;

    do {
      if (newNode.data === currentNode.data) {
        lookingForLeaf = false;
        return;
      } else if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          lookingForLeaf = false;
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else if (newNode.data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          lookingForLeaf = false;
          return;
        } else {
          currentNode = currentNode.right;
        }
      }
    } while (lookingForLeaf);
  }

  find(data) {
    let current = this.root;
    let lookingForValue = true;

    while (current !== null) {
      if (current.data === data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("The parameter must be a function");
    }

    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let current = queue.shift();
      if (current !== null) {
        callback(current);
        queue.push(current.left);
        queue.push(current.right);
      }
    }
  }

  inOrder(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("The parameter must be a function");
    }

    // visit left subtree, visit root, visit right tree

    function recursionInOrder(node) {
      if (node === null) {
        return;
      } else {
        recursionInOrder(node.left);
        callback(node);
        recursionInOrder(node.right);
      }
    }

    recursionInOrder(this.root);
  }

  preOrder(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("The parameter must be a function");
    }

    function recursionPreOrder(node) {
      // visit root, then left, then right

      if (node) {
        callback(node);
        recursionPreOrder(node.left);
        recursionPreOrder(node.right);
      }
    }

    recursionPreOrder(this.root);
  }

  postOrder(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("The parameter must be a function");
    }

    // visit the left, then the right, then the root

    function recursionPostOrder(node) {
      if (node) {
        recursionPostOrder(node.left);
        recursionPostOrder(node.right);
        callback(node.data);
      }
    }

    recursionPostOrder(this.root);
  }

  height(node) {
    if (node === null) {
      return 0;
    }
    return Math.max(this.height(node.left) + 1, this.height(node.right) + 1);
  }

  depth(node) {
    let current = this.root;
    let count = 0;

    while (current !== null) {
      if (current === node) {
        return count;
      } else if (node.data < current.data) {
        current = current.left;
        count++;
      } else if (node.data > current.data) {
        current = current.right;
        count++;
      }
    }

    return null;
  }
}

const testTree = new Tree(arrayToTree);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(testTree.root);
console.log(testTree.depth(testTree.root.right.left.right));

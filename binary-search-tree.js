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
console.log(testTree.find(1000));
prettyPrint(testTree.root);

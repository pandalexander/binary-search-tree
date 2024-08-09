const arrayToTree = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

class Node {
  constructor(data, left, right) {
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
}

let easyArray = [1, 2, 3, 4, 5, 6, 7];

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

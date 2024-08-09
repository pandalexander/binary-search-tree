const arrayToTree = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = null;
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
    let fixedArray = this.sortAndSimplify(array);

    return fixedArray;
  }
}

const testTree = new Tree();

console.log(arrayToTree);

console.log(testTree.buildTree(arrayToTree));

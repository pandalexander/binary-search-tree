const arrayToTree = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.root = null;
  }

  sortAndSimplify(array) {
    array.sort(function (x, y) {
      return x - y;
    });

    let sortedAndRemovedArray = [];

    array.forEach((element) => {
      if (!sortedAndRemovedArray.includes(element)) {
        sortedAndRemovedArray.push(element);
      }
    });

    return sortedAndRemovedArray;
  }

  buildTree() {}
}

const tree = new Tree();

console.log(tree.sortAndSimplify(arrayToTree));

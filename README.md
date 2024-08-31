# Binary Search Tree Implementation in JavaScript

This repository contains an implementation of a Binary Search Tree (BST) in JavaScript. The implementation provides various methods to build, manipulate, and traverse the BST. This was created as a practice project to enhance understanding of tree data structures.

## Overview

A Binary Search Tree (BST) is a data structure in which each node has at most two children, referred to as the left child and the right child. For each node:

- The left subtree contains only nodes with values less than the node's value.
- The right subtree contains only nodes with values greater than the node's value.

This implementation includes methods to:

- Build a BST from an array.
- Insert new nodes.
- Find nodes.
- Traverse the tree in different orders (level-order, in-order, pre-order, post-order).
- Calculate the height and depth of nodes.
- Check if the tree is balanced and rebalance it if necessary.

## Code Structure

### Node Class

The `Node` class represents a single node in the tree.

- **Constructor:** Initializes the node with data, and optionally, left and right children.

### Tree Class

The `Tree` class manages the construction and manipulation of the BST.

- **Constructor:** Takes an array of values, removes duplicates, sorts it, and builds a balanced BST.
- **sortAndSimplify:** Removes duplicate values from the input array and sorts it in ascending order.
- **buildTree:** Recursively constructs the BST from the sorted array.
- **insert:** Inserts a new node into the BST while maintaining the BST properties.
- **find:** Searches for a node with the specified value.
- **levelOrder:** Traverses the tree in level-order and applies a callback function to each node.
- **inOrder:** Traverses the tree in in-order and applies a callback function to each node.
- **preOrder:** Traverses the tree in pre-order and applies a callback function to each node.
- **postOrder:** Traverses the tree in post-order and applies a callback function to each node.
- **height:** Calculates the height of a node, defined as the number of edges on the longest path from the node to a leaf.
- **depth:** Calculates the depth of a node, defined as the number of edges from the node to the root.
- **isBalanced:** Checks if the tree is balanced, meaning the heights of the two child subtrees of any node differ by no more than one.
- **rebalance:** Rebuilds the tree into a balanced BST if it is not already balanced.

### Additional Utilities

- **prettyPrint:** A helper function to visualize the structure of the tree in the console.

## Example Usage

```javascript
const arrayToTree = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const testTree = new Tree(arrayToTree);

// Insert a new node
testTree.insert(10);

// Find a node
const node = testTree.find(9);
console.log(node);

// Traverse the tree in level-order
testTree.levelOrder((node) => console.log(node.data));

// Check if the tree is balanced
console.log(testTree.isBalanced());

// Rebalance the tree if necessary
testTree.rebalance();

// Pretty print the tree structure
prettyPrint(testTree.root);
```

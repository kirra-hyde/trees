"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    // //node. Takes its value.  Go to children
    let sum = this.val;

    for (let child of this.children) {
      sum += child.sumValues();
    }

    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    //start at this.val
      //count # of nodes with this.val % 2 === 0
      //return int(count)
    let count = this.val % 2 === 0 ? 1 : 0;

    for (let child of this.children) {
      count += child.countEvens();
    }

    return count;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound) {
    let count = this.val > lowerBound ? 1 : 0;

    for (let child of this.children) {
      count += child.numGreater(lowerBound);
    }

    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (this.root) {
      return this.root.sumValues();
    } else {
      return 0;
    }
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (this.root) {
      return this.root.countEvens();
    } else {
      return 0;
    }
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (this.root) {
      return this.root.numGreater(lowerBound);
    } else {
      return 0;
    }
  }
}

module.exports = { Tree, TreeNode };

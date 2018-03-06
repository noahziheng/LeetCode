/**
 * [Failed|Wrong] 实现错误，未理解题意
 * 结论：理解错误，误认为判断左右均有子
 */

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  if (root.left === null && root.right === null) return true
  else if (root.left !== null && root.right !== null) return isSymmetric(root.left) && isSymmetric(root.right)
  return false
}

var casee = new TreeNode(1)
casee.left = new TreeNode(2)
// casee.right = new TreeNode(3)

console.log(isSymmetric(casee))

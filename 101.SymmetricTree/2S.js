/**
 * [Succeed] 实现成功
 * 结果：80ms，超 100%
 */
/**
 * Definition for a binary tree node.
 */
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
/**
 * Main Function
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return root === null || isMirror(root.left, root.right)
}

/**
 * Do recursive approach
 * @param {TreeNode} p1
 * @param {TreeNode} p2
 * @return {boolean}
 */
var isMirror = function (p1, p2) {
  if (p1 === null && p2 === null) return true
  else if (p1 === null || p2 === null) return false
  else if (p1.val !== p2.val) return false
  else return isMirror(p1.left, p2.right) && isMirror(p1.right, p2.left)
}

var tmp = new TreeNode(1)
tmp.left = new TreeNode(2)
tmp.right = new TreeNode(2)

console.log(isSymmetric(tmp))

/**
 * [Succeed] 穷举优化实现，148ms
 * 结论：indexOf 较快，可用于取代循环找值
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  return checkSum(nums, target, 0)
}
/**
 * Check Sum Result(Recursion)
 * @param {number[]} lastarr
 * @param {number} target
 * @param {number} index
 * @return {number[]}
 */
var checkSum = function (nums, target, index) {
  var now = nums.shift()
  var res = nums.indexOf(target - now)
  return res === -1 ? checkSum(nums, target, index + 1) : [index, index + res + 1]
}

console.log(twoSum([2, 11, 7], 9))

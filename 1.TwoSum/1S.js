/**
 * [Failed|Timeout] 穷举实现，1648ms 较慢
 * 结论：穷举耗时过长，可优化
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
  var result = -1
  nums.forEach(function (element, i) {
    if (now + element === target) result = i
  })
  return result === -1 ? checkSum(nums, target, index + 1) : [index, index + result + 1]
}

console.log(twoSum([2, 11, 7], 9))

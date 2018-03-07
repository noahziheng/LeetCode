/**
 * [Succeed]  斐波那契数列实现，56ms
 */
/* eslint-disable indent */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 3) return n
    var arr = [1, 2]
    var i = 1
    while (i < n - 1) {
        arr.push(arr.shift() + arr[0])
        i++
    }
    return arr[1]
}

var tmpArr = []

for (let i = 1; i <= 10; i++) {
    tmpArr.push(climbStairs(i))
}

console.log(tmpArr)

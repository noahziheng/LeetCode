/**
 * [Failed|Timeout] 循环实现，结果正确，超时
 * 结论：过于重视逻辑方法，导致复杂度过高
 */
/* eslint-disable indent */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var laststep = [ n ]
    var steps = 0
    while (laststep.length) {
        laststep.forEach(function (item, index) {
            if (item >= 1) {
                if (item >= 2) laststep.push(item - 2)
                laststep[index]--
            } else {
                steps++
                laststep.splice(index, 1)
            }
        })
        // console.log(laststep)
    }
    return steps
}

var tmpArr = []

for (let i = 1; i <= 20; i++) {
    tmpArr.push(climbStairs(i))
}

console.log(tmpArr)

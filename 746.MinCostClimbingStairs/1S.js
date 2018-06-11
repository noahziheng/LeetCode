/**
 * [Succeed] 实现成功
 * 结果：80ms，超 100%
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    return (Array.isArray(cost) && Math.min.apply(null, cost.reverse().reduce(function (f, cur) {
        return [cur + Math.min.apply(null, f), f[0]]
    }, [0, 0]))) || 0
}

minCostClimbingStairs([0, 0, 1, 1])
# 746.最小成本爬楼梯

状态：完成

## 原题

On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

Example 1:
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
Example 2:
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
Note:
cost will have a length in the range [2, 1000].
Every cost[i] will be an integer in the range [0, 999].

## 分析

### 法1 动态规划

引自官方答案

直觉

有一个清晰的递归可用：最终的成本f [i]从某步骤爬上楼梯我是f [i] = cost [i] + min（f [i + 1]，f [i + 2]）。 这激发了动态编程。

算法

我们按顺序向后评估f。 这样，当我们决定f [i]是什么时，我们已经计算出f [i + 1]和f [i + 2]。

我们可以做得比这更好。 在第i步，令f1，f2为f [i + 1]，f [i + 2]的旧值，并将它们更新为新值f [i]，f [i + 1]。 当我们向后迭代时，我们会保持这些更新。 最后，我们需要min（f1，f2）。

问题：通过，100ms，完美解决

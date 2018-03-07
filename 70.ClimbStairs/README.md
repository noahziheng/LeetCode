# 70.爬梯子问题

状态：完成

## 原题

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

```plain
Input: 2
Output:  2
Explanation:  There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps
```

Example 2:

```plain
Input: 3
Output:  3
Explanation:  There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## 分析

### 法1 完整实现路径

建立一个数组，保存所有可能的路径剩余步数，初始里面只有一个 n。

每个循环检测每条路径，如果能减2，则将（当前剩余步数 - 2）追加入数组，然后都进行减一

数组中出现 0 说明该路径已走完，总路径数加一

问题：幂指数型复杂度，超时

### 法2 斐波那契数列

穷举或分析数学问题发现这一问题满足斐波那契数列，直接使用有关方法解出即可

## 理想方案

采用斐波那契数列进行数学运算
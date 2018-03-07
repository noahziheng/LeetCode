# 1.两整数求和

状态：完成

## 原题

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

## 分析

### 法1 穷举检测

使用 O(n^2) 的二维遍历（可混合递归）可解决

问题：耗时较长

### 法2 递归检测

对每一个值进行数组的indexOf，总体使用递归，算是穷举的优化解法

问题：耗时仍不够好

### 法2  Hash Table

使用 Map(Table) 方式可进行优化

## 理想方案

使用 Table 映射解决

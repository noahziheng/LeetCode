# 70.爬梯子问题

状态：完成

## 原题

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

```plain
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

## 分析

### 法1 链表逐项相加

将链表从头开始递归相加，注意考虑进位，特别是两相加数的下一位都没有时也需考虑进位问题

## 理想方案

链表逐项相加
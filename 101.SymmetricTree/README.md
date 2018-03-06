# 101.平衡树

状态：完成

## 原题

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

## 分析

### 法1 完整实现路径

先判根，排除根就是 null 的情况

再判左右，全 null，镜像，返回 true，结束递归

再判左右，不全为 null，不是镜像，返回 false，结束递归

再判左右值不同，不是镜像，返回 false，结束递归

否则，递归检测左右子树（与）

问题：通过，80ms，完美解决

### 法2 遍历

原答案中的方案之一，未做实现，猜想性能较差，逻辑模糊，放弃

## 理想方案

递归判别左右子树

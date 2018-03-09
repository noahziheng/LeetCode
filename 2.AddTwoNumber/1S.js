/**
 * [Succeed] 128ms 100% above
 */
/**
 * Definition for singly-linked list.
 */
function ListNode (val) {
  this.val = val
  this.next = null
}
/**
  * @param {ListNode} l1
  * @param {ListNode} l2
  * @return {ListNode}
  */
var addTwoNumbers = function (l1, l2) {
  var r = addNumber(l1, l2)
  return r
}

var addNumber = function (n1, n2, c = 0) {
  if (n1 === null && n2 === null && c === 0) return null
  if (n1 === null) n1 = new ListNode(0)
  if (n2 === null) n2 = new ListNode(0)
  var t = n1.val + n2.val + c
  var nc = parseInt(t / 10)
  t = new ListNode(t % 10)
  t.next = addNumber(n1.next, n2.next, nc)
  return t
}

/**
 * Function for reverse str
 * @param {String} str
 * @return {String} str
 */
function reverseString (str) {
  if (str === '') {
    return ''
  } else {
    return reverseString(str.substr(1)) + str.charAt(0)
  }
}

var l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(9)

var l2 = new ListNode(3)
l2.next = new ListNode(2)
l2.next.next = new ListNode(1)

var result = addTwoNumbers(l1, l2)
var resultStr = ''

while (result !== null) {
  resultStr += result.val
  result = result.next
}

console.log(reverseString(resultStr))

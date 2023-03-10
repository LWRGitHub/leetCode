// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// 	2 -> 4 -> 3
// 	5 -> 6 -> 4
// 	-----------
// 	7 -> 0 -> 8

// 	Input: l1 = [2,4,3], l2 = [5,6,4]
// 	Output: [7,0,8]
// 	Explanation: 342 + 465 = 807.

// Example 2:

// 	0
// 	0
// 	-
// 	0

// 	Input: l1 = [0], l2 = [0]
// 	Output: [0]

// Example 3:

// 	9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9
// 	9 -> 9 -> 9 -> 9
// 	------------------------------------
// 	8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

// 	Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 	Output: [8,9,9,9,0,0,0,1]

// Constraints:

// 	The number of nodes in each linked list is in the range [1, 100].
// 	0 <= Node.val <= 9
// 	It is guaranteed that the list represents a number that does not have leading zeros.

// LeetCode (2023) Add Two Numbers: https://leetcode.com/problems/add-two-numbers/

package main

import (
	"fmt"
)

func main() {
	fmt.Println(addTwoNumbers(&ListNode{2, &ListNode{4, &ListNode{3, nil}}}, &ListNode{5, &ListNode{6, &ListNode{4, nil}}}))

	fmt.Println(addTwoNumbers(&ListNode{0, nil}, &ListNode{0, nil}))

	fmt.Println(addTwoNumbers(&ListNode{9, &ListNode{9, &ListNode{9, &ListNode{9, &ListNode{9, &ListNode{9, &ListNode{9, nil}}}}}}}, &ListNode{9, &ListNode{9, &ListNode{9, &ListNode{9, nil}}}}))
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	carry, dummy := 0, new(ListNode)
	for node := dummy; l1 != nil || l2 != nil || carry > 0; node = node.Next {
		if l1 != nil {
			carry += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			carry += l2.Val
			l2 = l2.Next
		}
		node.Next = &ListNode{carry % 10, nil}
		carry /= 10
	}
	return dummy.Next
}

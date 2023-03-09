/*

    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    

    Example 1:

        2 -> 4 -> 3
        5 -> 6 -> 4
        -----------
        7 -> 0 -> 8

        Input: l1 = [2,4,3], l2 = [5,6,4]
        Output: [7,0,8]
        Explanation: 342 + 465 = 807.


    Example 2:

        0 
        0
        -
        0

        Input: l1 = [0], l2 = [0]
        Output: [0]


    Example 3:

        9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9
        9 -> 9 -> 9 -> 9
        ------------------------------------
        8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

        Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
        Output: [8,9,9,9,0,0,0,1]
    
        

    Constraints:

        The number of nodes in each linked list is in the range [1, 100].
        0 <= Node.val <= 9
        It is guaranteed that the list represents a number that does not have leading zeros.

        

    LeetCode (2023) Add Two Numbers: https://leetcode.com/problems/add-two-numbers/

*/

class ListNode{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}
  

const addTwoNumbers = (l1, l2) =>{
    const addLists = (num1, num2, carry = 0) => {
        if (!num1 && !num2 && !carry) return null;
        const newVal = (num1?.val || 0) + (num2?.val || 0) + carry;
        const nextNode = addLists(num1?.next, num2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return addLists(l1, l2);
};


console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))); // [7,0,8]
console.log(addTwoNumbers(new ListNode(0), new ListNode(0))); // [0]
console.log(addTwoNumbers(new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))), new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))); // [8,9,9,9,0,0,0,1]

"""

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

"""

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        

def addTwoNumbers(l1, l2):
    dummy = ListNode()
    curr, carry = dummy, 0

    while l1 or l2 or carry:
        val = carry
        if l1:
            val += l1.val
            l1 = l1.next
        if l2:
            val += l2.val
            l2 = l2.next
        carry, val = divmod(val, 10)
        curr.next = ListNode(val)
        curr = curr.next
        
    return dummy.next


case1 = addTwoNumbers(ListNode(2, ListNode(4, ListNode(3))), ListNode(5, ListNode(6, ListNode(4))))
case1_ans = ''
while(case1):
    case1_ans += str(case1.val) + ' -> '
    case1 = case1.next
print('case1: ', case1_ans)


case2 = addTwoNumbers(ListNode(0), ListNode(0))
case2_ans = ''
while(case2):
    case2_ans += str(case2.val) + ' -> '
    case2 = case2.next
print('case2: ', case2_ans)


case3 = addTwoNumbers(ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9))))))), ListNode(9, ListNode(9, ListNode(9, ListNode(9)))))
case3_ans = ''
while(case3):
    case3_ans += str(case3.val) + ' -> '
    case3 = case3.next
print('case3: ',case3_ans)

    
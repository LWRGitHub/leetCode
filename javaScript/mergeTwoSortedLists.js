/*

    Merge Two Sorted Lists


   You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.

    

    Example 1:


    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]
    Example 2:

    Input: list1 = [], list2 = []
    Output: []
    Example 3:

    Input: list1 = [], list2 = [0]
    Output: [0]
    

    Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.
        

    LeetCode (2023) Merge Two Sorted Lists:
: 

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


// const mergeTwoLists = (list1, list2) =>{

//     if(!list1 && !list2) return list1;
//     const dumyLL = new ListNode();
//     const listToReturn = dumyLL;

//     const merge = (l1, l2, ll)=>{
//         if(l1 && l2){
//             if(l1.val < l2.val){
//                 ll.next = l1
//                 merge(l1.next, l2, ll.next)
//             }else{
//                 ll.next = l2
//                 merge(l1, l2.next, ll.next)
//             }
//         }else if(l1){
//             ll.next = l1
//             merge(l1.next, l2, ll.next)
//         }else if(l2){
//             ll.next = l2
//             merge(l1, l2.next, ll.next)
//         }
//     }
//     merge(list1, list2, dumyLL);

//     return listToReturn.next;
// };


const mergeTwoLists = (l1, l2) =>{
    if(!l1) return l2;
    else if(!l2) return l1;
    else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

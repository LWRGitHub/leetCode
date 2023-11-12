/* JS: LeetCode

Find Mode in Binary Search Tree


Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
If the tree has more than one mode, return them in any order.
Assume a BST is defined as follows:
* The left subtree of a node contains only nodes with keys less than or equal to the node's key.
* The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
* Both the left and right subtrees must also be binary search trees.
 
Example 1:

Input: root = [1,null,2,2]
Output: [2]
Example 2:
Input: root = [0]
Output: [0]
 
Constraints:
* The number of nodes in the tree is in the range [1, 10^4].
* -10^5 <= Node.val <= 10^5


LeetCode (2023) Find Mode in Binary Search Tree; https://leetcode.com/problems/find-mode-in-binary-search-tree/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    const memo = {}

  const dfs = (n) =>{
    if(!n) return;
      
    dfs(n.left);
    dfs(n.right);
    if(n.val in memo){
      memo[n.val]++;
    }else{
      memo[n.val] = 1;
    }
    
  }
    dfs(root)
  const arr = Object.entries(memo).sort((a,b)=> b[1] - a[1]);
  let ans = [];
  
  for(let i=0; i<arr.length; i++){
    if(arr[i][1] === arr[0][1]){
      ans.push(arr[i][0])
    }else{
      break; 
    }
  }
  return ans;
};

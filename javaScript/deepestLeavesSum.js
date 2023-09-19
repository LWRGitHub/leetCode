/*
    Deepest Leaves Sum

    Given the root of a binary tree, return the sum of values of its deepest leaves.
    

    Example 1:


    Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
    Output: 15
    Example 2:

    Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
    Output: 19
    

    Constraints:

    The number of nodes in the tree is in the range [1, 104].
    1 <= Node.val <= 100

    LeetCode (2023) Deepest Leaves Sum: https://leetcode.com/problems/deepest-leaves-sum/

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
 * @return {number}
 */

const deepestLeavesSum = (root) =>{
    
    deepthObj = {
        deepest: 0,
        nums: []
    }
    
    const dfs = (n, depth)=>{
        if(!root) return;
        depth++;
        if(n.left !== null) dfs(n.left, depth);
        if(n.right !== null) dfs(n.right, depth);
        if(deepthObj.deepest < depth){
            deepthObj.deepest = depth
            deepthObj.nums = [n.val]
        }else if(deepthObj.deepest === depth){
            deepthObj.nums.push(n.val)
        }
    }
   
    dfs(root, 0);
    
    return deepthObj.nums.reduce((a, b) => a + b, 0);
    
};

/*
    Longest Common Prefix


    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
    

    Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.


    LeetCode (2023) Longest Common Prefix: https://leetcode.com/problems/longest-common-prefix/
*/



/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) =>{
    
    let prefix = strs[0];
    for(let i=1; i<strs.length; i++){
        
        while( prefix.length > 0 && !(strs[i].includes(prefix)) ){
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    
    for(let i=0; i<strs.length; i++){
        
        for(let j=0; j<prefix.length; j++){
            
            if(strs[i][j] !== prefix[j]){
                prefix = prefix.substring(0, prefix.length - 1);
            } 
        }
    }
    
    return prefix;
};

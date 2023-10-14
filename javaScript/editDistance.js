/*

    Edit Distance
    Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

    You have the following three operations permitted on a word:

    Insert a character
    Delete a character
    Replace a character
    

    Example 1:

    Input: word1 = "horse", word2 = "ros"
    Output: 3
    Explanation: 
    horse -> rorse (replace 'h' with 'r')
    rorse -> rose (remove 'r')
    rose -> ros (remove 'e')
    Example 2:

    Input: word1 = "intention", word2 = "execution"
    Output: 5
    Explanation: 
    intention -> inention (remove 't')
    inention -> enention (replace 'i' with 'e')
    enention -> exention (replace 'n' with 'x')
    exention -> exection (replace 'n' with 'c')
    exection -> execution (insert 'u')
    

    Constraints:

    0 <= word1.length, word2.length <= 500
    word1 and word2 consist of lowercase English letters.


    LeetCode (2023) Edit Distance:https://leetcode.com/problems/edit-distance/

*/ 


// const minDistance = (word1, word2) =>{

//     const paths = Array.from({length: word2.length+1}, ()=> Array.from({length: word1.length+1}, ()=> 0))
//     for(let i=0; i<paths[0].length; i++){
//         paths[0][i] = i;
//     }
//     for(let i=0; i<paths.length; i++){
//         paths[i][0] = i;
//     }

//     for(let i=1; i<paths.length; i++){
//         for(let j=1; j<paths[i].length; j++){

//             if(word1[j-1] === word2[i-1]){
//                 paths[i][j] = paths[i-1][j-1]
//             }else{
//                 paths[i][j] = Math.min(paths[i-1][j-1], paths[i-1][j], paths[i][j-1]) + 1
//             }
//         }
//     }

//     return paths[word2.length][word1.length]
// };

const minDistance = (word1, word2)=>{
    const dp = Array(word1.length+1).fill(0).map(()=>Array(word2.length+1).fill(0));
    for(let i = 0; i <= word1.length; i++){
        dp[i][0] = i;
    };
    for(let j = 0; j <= word2.length; j++){
        dp[0][j] = j;
    };
    for(let i = 1; i <= word1.length; i++){
        for(let j = 1; j <= word2.length; j++){
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]);
            };
        };
    };
    return dp[word1.length][word2.length];
};






console.log( minDistance("horse", "ros") ) // 3
console.log( minDistance("intention", "execution") ) // 5
console.log( minDistance("", "a") ) // 1
console.log( minDistance("a", "") ) // 1
console.log( minDistance("", "") ) // 0
console.log( minDistance("plasma", "altruism") ) // 6
console.log( minDistance("zoologicoarchaeologist", "zoogeologist") ) // 10

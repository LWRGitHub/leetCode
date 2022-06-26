// A string s is called happy if it satisfies the following conditions:

    // s only contains the letters 'a', 'b', and 'c'.
    // s does not contain any of "aaa", "bbb", or "ccc" as a substring.
    // s contains at most a occurrences of the letter 'a'.
    // s contains at most b occurrences of the letter 'b'.
    // s contains at most c occurrences of the letter 'c'.

// Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

    // Input: a = 1, b = 1, c = 7
    // Output: "ccaccbcc"
    // Explanation: "ccbccacc" would also be a correct answer.

// Example 2:

    // Input: a = 7, b = 1, c = 0
    // Output: "aabaa"
    // Explanation: It is the only correct answer in this case.
 

// Constraints:

    // 0 <= a, b, c <= 100
    // a + b + c > 0


// LeetCode (2022) Longest Happy String: https://leetcode.com/problems/longest-happy-string/



// /**
//  * @param {number} a
//  * @param {number} b
//  * @param {number} c
//  * @return {string}
//  */



// *****************************************************************************************************
// run time better on LeetCode than below


// const longestDiverseString = (a, b, c, total=a+b+c, ans=[], ltrs=[['a',a],['b',b],['c',c]]) =>{

//     while (ans.length < total) {

//         const ansLen = ans.length;

//         // ltr = lg letter, unless used twice, then 2nd lg
//         const ltr = ans[ansLen-1] === ans[ansLen-2] && ans[ansLen-1] === ltrs.sort(([a,c1],[b,c2]) => c2-c1)[0][0] ? ltrs.sort(([a,c1],[b,c2]) => c2-c1)[1] : ltrs.sort(([a,c1],[b,c2]) => c2-c1)[0];
        
//         if (ltr[1] === 0) break
        
//         ans.push(ltr[0]);
//         ltr[1]--;
//     }

//     return ans.join('');
// };


// *****************************************************************************************************



const longestDiverseString = (a, b, c, total=a+b+c, ans=[], ltrs=[['a',a],['b',b],['c',c]]) =>{

    while (ans.length < total) {

        const ansLen = ans.length;

        // ltr = lg letter, unless used twice, then 2nd lg
        const ltr = ans[ansLen-1] === ans[ansLen-2] 
                        && ans[ansLen-1] === ltrs.sort(([a,c1],[b,c2]) => c2-c1)[0][0] 
                        ? ltrs.sort(([a,c1],[b,c2]) => c2-c1)[1] 
                        : ltrs.sort(([a,c1],[b,c2]) => c2-c1)[0];
        
        if (ltr[1] === 0) break
        
        ans.push(ltr[0]);
        ltr[1]--;
    }

    return ans.join('');
};


// Test cases:

console.log(longestDiverseString(1, 1, 7)) // "ccaccbcc"
console.log(longestDiverseString(7, 1, 0)) // "aabaa"
console.log(longestDiverseString(2, 1, 7)) // "ccaccaccbc"
console.log(longestDiverseString(3, 1, 7)) // "ccaccaccacb"

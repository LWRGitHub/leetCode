// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

    // Input: s = "babad"
    // Output: "bab"
    // Explanation: "aba" is also a valid answer.


// Example 2:

    // Input: s = "cbbd"
    // Output: "bb"
 


// Constraints:

    // 1 <= s.length <= 1000
    // s consist of only digits and English letters.



// Leetcode (5) Longest Palindromic Substring : https://leetcode.com/problems/longest-palindromic-substring/




const longestPalindrome = (s, start=0, end=0) => {
    const expand = (s,i,j) =>{
        while(i>=0 && j<s.length && s[i]==s[j]){
            i--; 
            j++;
        }
        return j-i-1;
    }
    for(let i=0; i<s.length; i++){
        const len1 = expand(s,i,i+1);
        const len2 = expand(s,i,i);
        let len = Math.max(len1,len2);
        if(end-start<len){ 
            start = i-Math.floor((len-1)/2);
            end = i+Math.floor(len/2);
        }
    }
    return s.substring(start,end+1);
};

console.log("RETURN: ",longestPalindrome("babad")) // bab || aba
console.log(longestPalindrome("cbbd")) // bb || bb
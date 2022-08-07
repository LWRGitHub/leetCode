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




const longestPalindrome = (s, start=0, end=0) => {//babad, 0, 0
    const expand = (s,i,j) =>{//babad, 1, 2
        console.log("expand While: ",i>=0 && j<s.length && s[i]==s[j]);
        while(i>=0 && j<s.length && s[i]==s[j]){
            i--; //-1
            console.log("expand i: ",i);
            j++;//1
            console.log("expand j: ",j);
        }
        console.log("expand RETURN: ", j-i-1);
        return j-i-1;//1
    }
    for(let i=0; i<s.length; i++){//1
        console.log("")
        console.log("for: ",i)
        const len1 = expand(s,i,i+1);// 
        console.log("len1: ", len1)
        const len2 = expand(s,i,i);// 1
        console.log("len2: ", len2)
        let len = Math.max(len1,len2); // 1
        console.log("Math.max len: ", len)
        console.log("if end-start<len: ",end-start<len)
        if(end-start<len){ //true
            console.log("if: ",i)
            start = i-Math.floor((len-1)/2);//0
            console.log("start: ",start)
            end = i+Math.floor(len/2);//0
            console.log("end: ",end)
        }
    }
    console.log("start: ", start)
    console.log("end+1: ", end+1)
    return s.substring(start,end+1)
};

console.log("RETURN: ",longestPalindrome("babad")) // bab || aba
// console.log(longestPalindrome("cbbd")) // bb || bb